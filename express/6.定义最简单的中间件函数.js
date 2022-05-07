const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
const mw = (req, res, next) => {
        console.log('这是最简单的中间件函数')
            // 把流转关系交给下一个中间件或者路由
        next()
    }
    // 全局生效的中间件
    // 客户端发起的任何请求，到达服务器之后，都会触发的中间件叫全局生效的中间件
app.use(mw)

// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
    console.log('这是最简单的中间件函数')
    next()
})

app.get('/', (req, res) => {
    console.log('调用了/ 这个路由')
    res.send('HOME.PAGE.')
})
app.get('/user', (req, res) => {
    console.log('调用了/user这个路由')
    res.send('user page.')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})