const express = require('express')
const app = express()


// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 导入路由模块
const router = require('./2.apiRouter')
    // 把路由模块注册到app上
app.use('/api', router)

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})