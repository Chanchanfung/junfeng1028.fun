const mongoose = require('mongoose')
const Schema = mongoose.Schema

let msgSchema = new Schema({
    // 留言内容
    msg: {
        type: String,
        required: true
    },
    // 时间
    date: {
        type: Number,
        default: Date.now
    },
    // 用户信息
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    //点赞
    likes: [Schema.Types.ObjectId],

    //子留言
    children: [{
        msg: { type: String, required: true },
        date: { type: Number, default: Date.now },
        user: {type: Schema.Types.ObjectId, ref: "user", required: true},
        likes: [Schema.Types.ObjectId],
        replyUser: { type: Schema.Types.ObjectId, ref: "user", required: true }
    }]
})

module.exports = mongoose.model("msg", msgSchema)