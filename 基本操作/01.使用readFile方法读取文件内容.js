// 导入fs模块
const fs = require('fs');
// 调用fs.readFile方法读取文件内容
fs.readFile('/1.txt', 'utf-8', function(err, dataStr) {
        console.log(err);
        console.log('------');
        console.log(dataStr);
    })
    // 读取成功 err为null
    // 读取失败 err为错误对象 dataStr为undefined