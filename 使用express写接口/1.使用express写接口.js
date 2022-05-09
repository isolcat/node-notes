const express = require('express')
const app = express()


// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 一定要在路由之前配置cors这个中间件，从而解决接口跨域的问题
// cors主要在服务器端进行配置，客户端浏览器无需进行任何额外的配置
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./2.apiRouter')
    // 把路由模块注册到app上
app.use('/api', router)

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})