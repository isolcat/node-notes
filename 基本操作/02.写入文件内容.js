const fs = require('fs');
fs.writeFile('./files/2.txt', 'hello world', function(err) {
    // 如果文件写入成功 则err的值为null
    console.log(err);
})