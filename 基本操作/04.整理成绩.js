const fs = require('fs');

fs.readFile('./files/成绩.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    // console.log('读取成功' + data);

    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ': '))
    })
    const newStr = arrNew.join('\r\n');
    console.log(newStr);

    fs.writeFile('./files/成绩2.txt', newStr, function(err) {
        if (err) {
            return console.log('写入文件失败' + err.message);
        }
        console.log('写入成功');
    })
})