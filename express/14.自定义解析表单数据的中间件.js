const express = require('express')
const app = express()

const qs = require('querystring')
const port = 80

app.use((req, res, next) => {
    // 定义中间件具体的业务逻辑
    // 1.定义一个str字符串，专门用来储存客户端发送过来的请求体数据
    let str = ''
        // 2.监听req的data事件
    req.on('data', (chunk) => {
            str += chunk
        })
        // 3.监听req的end事件
    req.on('end', () => {
        // 在str中存放的是弯针歌单请求体数据
        console.log(str)
            //把字符串格式请求体数据 解析成对象格式
        const body = qs.parse(str)
        console.log(body);
    })
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))