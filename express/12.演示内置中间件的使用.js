const express = require('express')
const app = express()

// 注意 除了错误级别的中间间，其余的中间件都必须在路由之前进行配置
// 通过express.json()这个中间件，解析表单中的json格式的数据
app.use(express.json())
    // 通过express.urlencoded()这个中间件，来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    // 在服务器可以使用req.body这个属性，来接受客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body)
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务器端可以通过req.body来获取json格式的表单数据和url-encoded格式的数据
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://127.0.0.0.1');
})