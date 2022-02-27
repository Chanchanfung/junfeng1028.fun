const express = require('express')
const router = express.Router()
const userDB = require('../../db/user')
const { findOne } = require('../../db/visitor')
const visitorDB = require('../../db/visitor')

//登录接口
router.post('/', async (req, res) => {
    let { user, pass } = req.body
    // 验证数据格式

    // 检测用户名是否存在
    let doc = await userDB.findOne({user})

    // 用户不存在
    if(!doc){
        return res.send({
            code:3,
            msg:"用户不存在"
        })
    }

    // 密码不正确
    if(doc.pass !== pass){
        return res.send({
            code: 5,
            msg:"密码错误"
        })
    }   

    //登录成功
    // 处理返回给前端的数据
    let data = {
        _id:doc._id, 
        user: doc.user,
        photo: doc.photo,
        admin: doc.admin
    }
    //配置session(把用户数据存到session)
    req.session.userInfo = data
    // 添加当前用户到访问表
    let visitorDoc = await visitorDB.findOne({visitor: doc._id})
    if (visitorDoc) {
        await visitorDB.updateOne({visitor: doc._id},{data: Date.now()})
    }else{
        await visitorDB.create({visitor: doc._id})
    }
    //返回前端
    res.send({
        code:0,
        msg:'登录成功',
        data
    })

})

// 检测是否登录接口
router.post('/check', async (req, res) => {
    if(req.session.userInfo){
        // 添加当前用户到访问表
        let _id = req.session.userInfo._id
        let visitorDoc = await visitorDB.findOne({ visitor: _id })
        if (visitorDoc) {
            await visitorDB.updateOne({ visitor: _id }, { data: Date.now() })
        } else {
            await visitorDB.create({ visitor: _id })
        }
        res.send({
            code:0,
            msg:"已登录",
            data: req.session.userInfo
        })
    }else{
        res.send({
            code:1,
            msg:"未登录",
            data:{}
        })
    }
})

// 退出登录接口
router.post('/logout',(req, res) => {
    req.session.destroy() // session 销毁
    res.send({
        code:0,
        msg:'退出登录成功'
    })
})

module.exports = router