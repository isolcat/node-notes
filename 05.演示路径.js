const fs = require('fs')
    // 出现路径拼接错误的问题 是因为提供了./或者../开头的相对路径
    // 如果要解决这个问题 可以直接提供一个完整的文件存放路径就可以
    // fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
    //     if (err) {
    //         return console.log('读取文件失败' + err.message);
    //     }
    //     console.log('读取成功' + dataStr);
    // })

// 绝对路径移植性差 不利于后期的维护
// fs.readFile('C:\\Users\\HSDN\\Desktop\\node\\files\\1.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败' + err.message);
//     }
//     console.log('读取成功' + dataStr);
// })

// __dirname 当前文件所在的目录
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取成功' + dataStr);
})