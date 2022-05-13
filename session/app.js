const express = require('express')
const app = express()
const port = 3000

// 配置session中间件
const session = require('express-session')
app.arguments(
    session({
        secret: 'itheima',
        resave: false,
        saveUnitialized: true,
    })
)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))