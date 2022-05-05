// 导入express
const express = require('express')

// 创建web服务器
const app = express()
    // 运行服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})