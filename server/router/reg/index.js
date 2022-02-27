const express = require('express')
const router = express.Router()
const userDB = require('../../db/user')
// 接收注册请求
router.post('/', async (req,res) => {
    let {user , pass} = req.body
  
    // 
    let userR = /^[^\s]{2,8}$/,
        passR = /^[\w,.?:'"!@#$%^&*()+-]{6,18}$/
    if (!userR.test(user) || !passR.test(pass)){
        // 此时说明数据不符合要求
        return res.send({
            code:1,
            msg:"数据格式错误"
        })
    }
        // 检测用户名是否存在
        let doc = await userDB.findOne({user})
        if (doc){
            return res.send({
                code:2,
                msg:"用户名已存在"
            })
        }

        // 用户不存在创建文档
        await userDB.create({user,pass})
        res.send({
            code:0,
            msg:"用户注册成功"
        })
        
    res.send("收到了")
})

module.exports = router