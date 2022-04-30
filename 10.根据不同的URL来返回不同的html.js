const http = require('http')

const server = http.createServer()

server.on('request', function(req, res) {
    // 1.获取请求的URL地址
    const url = req.url
        // 2.设置默认的响应内容为404 not found
    let Content = '404 not found'
        // 3.判断用户请求的是否为/或者/index.html
        // 4.判断用户请求的是否为/about.html关于页面
    if (url === '/' || url === '/index.html') {
        Content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        Content = '<h1>关于</h1>'
    }
    // 5.设置content-type响应头 防止中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
        // 6.res.end()把响应内容响应给客户端
    res.end(Content)
})

server.listen(8080, function() {
    console.log('server running at http://127.0.0.1:8080');
})