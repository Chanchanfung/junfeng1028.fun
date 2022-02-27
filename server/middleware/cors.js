const cors = require('cors')


module.exports = cors({
    // 当axios配置了允许携带cookie 就需要配置具体地址和credentials
    origin:'http://localhost:8080',
    credentials:true
})