const mongoose = require('mongoose')
const Schema = mongoose.Schema

let visitorSchema = new Schema({
    // 访客ID
    visitor: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    // 时间
    data: {
        type: Number,
        default: Date.now
    }    

})


module.exports = mongoose.model('visitor', visitorSchema)








