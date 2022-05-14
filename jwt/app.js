const express = require('express')
const app = express()
const port = 3000

// 导入JWT相关的两个包
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 定义secret密钥
const secretKey = 'itheima No1 ^_^'

//注册将JWT字符串解析还原成JSON对象的中间件
// unless()可以设置哪些有权限，哪些无权限访问
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/api/login', function(req, res) {
    const userinfo = req.body
        // 登陆失败
    if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
        return res.send({
            status: 400,
            message: '登录失败！',
        })
    }
    // 登录成功
    // 登录成功之后，调用jwt.sign()方法生成JWT字符串。并通过token属性发送给客户端
    jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' }) //参数1：用户的信息 参数2：加密的密钥 参数3：配置对象，可以配置当前token的有效期
    res.send({
        status: 200,
        message: '登录成功',
        token: '' //要发送给客户端的token字符串
    })
    res.send('POST request to the homepage')
})