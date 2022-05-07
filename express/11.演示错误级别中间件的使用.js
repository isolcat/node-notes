const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // 人为制造的错误
    throw new Error('服务器内部发生错误')
    res.send('home page.')
})

// 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
// 中间件除了错误级别中间件，都是注册在路由之前
// 错误级别中间件只能注册在路由之后，否则会报错
app.use((err, req, res, next) => {
    console.log('发生了错误' + err.message)
    res.send('Error:' + err.message)
})

app.listen(80, () => {
    console.log('http://127.0.0.0.1');
})