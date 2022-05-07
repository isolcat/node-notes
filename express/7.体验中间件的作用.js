const express = require('express')
const app = express()

// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
    // 多个中间件之间共享同一份req和res，基于这一特性，可在上游中间件中统一为req和res对象添加自定义的属性或方法，供下游的中间件使用或路由使用
    // 获取到请求到达服务器的时间
    const time = Date.now()
        // 为req对象挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = time
    next()
})

app.get('/', (req, res) => {
    res.send('HOME.PAGE.' + req.startTime)
})
app.get('/user', (req, res) => {
    res.send('user page.' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})