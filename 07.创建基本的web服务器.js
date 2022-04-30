// 1.导入http模块
const http = require('http')
    // 2.创建服务器
const server = http.createServer()
    // 3.为服务器绑定request事件，监听客服端的请求
server.on('request', function(req, res) {
        // request 提供了请求的详细信息。 通过它可以访问请求头和请求的数据。
        // response 用于构造要返回给客户端的数据。  
        console.log('Someone visit our web server');
    })
    // 4.启动服务器
server.listen(8080, function() {
    //运行端口为80的时候可以省略掉结尾的80
    console.log('server running at http://127.0.0.1:8080');
})