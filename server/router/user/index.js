const express = require('express')
const router = express.Router()
const userDB = require('../../db/user')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

// 上传的准备
const upload = multer({
    // 在磁盘中存储 而不是内存
    storage: multer.diskStorage({
        // 存储地址
        destination(req, file, cb) {
            cb(null, path.join(__dirname,"../../public/files/img/photo"))
        },
        // 存储时的文件名
        filename(req, file, cb) {
            let ext = /png/.test(file.mimetype)? ".png" : ".jpg"
            let fileName = req.session.userInfo._id + Date.now().toString(36) + ext
            req.fileName = fileName
            cb(null, fileName)
        }
    })
}).single("file")

// 鉴权
router.use((req, res, next) => {
    if(!req.session.userInfo){
        return res.send({
            code: 4,
            msg: '用户未登录'
        })
    }
    next()
})

//修改用户名
router.post("/name", async (req, res) => {
    let {user} = req.body

    //后端验证格式

    //检测是否已经存在同名用户
    let doc = await userDB.findOne({user})

    // 已存在用户
    if(doc){
        return res.send({
            code: 6,
            msg: '用户名已存在'
        })
    }

    // 不存在同名用户,则更新
    await userDB.updateOne({user: req.session.userInfo.user}, {user})

    // 更新session信息
    req.session.userInfo.user = user

    
    res.send({
        code: 0,
        msg: '修改完成'
    })
})

//修改用户密码
router.post("/pass", async (req, res) => {
    let{oldPass, pass} = req.body 

    // 数据格式验证
    let user = req.session.userInfo.user
    let doc = await userDB.findOne({user})

    //原密码错误
    if(oldPass !== doc.pass){
        return res.send({
            code: 2,
            msg: "原密码错误"
        })
    }

    // 修改密码
    await userDB.updateOne({user}, {pass})

    // 清除session
    req.session.destroy()

    // 返回前端
    res.send({
        code: 0,
        msg: "密码修改成功"
    })
})

//头像上传
router.post("/avatar", async (req, res) => {
    upload(req, res, async function(err) {
        if (err instanceof multer.MulterError) { 
            return res.send({
                code: 1,
                msg: "A Multer error occurred when uploading."
            })
        } else if (err) {   
            return res.send({
                code: 2,
                msg: "An unknown error occurred when uploading."
            })
        }

        // 没有错误
        let user = req.session.userInfo.user
        let doc = await userDB.findOne({user})

        // 删除原来的photo文件
        let oldPhoto = doc.photo
        if(!/default\.jpg/.test(oldPhoto)){
            fs.unlink(path.join(__dirname, "../../public"+ oldPhoto), () => { })
        }
        console.log(__dirname);
        console.log(oldPhoto);
        // 更新数据库头像字段
        let newPath = "/files/img/photo/" + req.fileName
        await userDB.updateOne({ user }, { photo: newPath})

        // 更新session
        req.session.userInfo.photo = newPath
        // 返回前端
        res.send({
            code: 0,
            msg: "头像上传完成",
            data: req.session.userInfo
        })
    })
})


module.exports = router