// 1.导入mysql模块
const mysql = require('mysql')
    // 2.建立mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的IP地址
    user: 'root', //这是登录数据库的账号
    password: 'admin123', //登录数据库的密码
    database: 'my_db_01', //指定要操作哪个数据库
})

//测试mysql模块能否正常工作
// db.query('select 1', (err, results) => {
//     // mysql模块工作期间报错了
//     if (err) return console.log(err.message);
//     // 能够成功的执行sql语句
//     console.log(results)
// })


//查询users表中的所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, result) => {
//     // 查询数据失败
//     if (err) return console.log(err.message);
//     // 查询数据成功
//     // 注意：如果执行的是select查询语句，则执行的结果是数组
//     console.log(result);
// })


// 向users表中，新增一条数据
// const user = { username: 'Spider-Man', password: 'pcc123' }
//     // 定义待执行的SQL语句
// const sqlStr = 'insert into users(username,password) values(?,?)'
//     // 执行SQL语句
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     if (err) return console.log(err.message)
//         // 通过affectedRows属性，来判断是否插入数据成功
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功！')
//     }
// })


// 演示插入数据的便捷方式
// const user = { username: 'Spider-Man2', password: 'pcc4321' }
//     // 定义待执行的SQL语句
// const sqlStr = 'insert into users set?'
//     // 执行SQL语句
// db.query(sqlStr, user, (err, result) => {
//     if (err) return console.log(err.message)
//     if (result.affectedRows === 1) {
//         console.log('插入数据成功')
//     }
// })

// 演示如何更新用户的信息
// const user = { id: 6, username: 'aaa', password: '000' }
//     // 定义sql语句
// const sqlStr = 'update users set username=?,password=?where id=?'
//     // 执行SQL语句
// db.query(sqlStr, [user.username, user.password, user.id], (err, result) => {
//     if (err) return console.log(err.message)
//         // 注意：执行了update语句之后，执行的结果也是一个对象，可以通过affectedRows判断是否更新成功
//     if (result.affectedRows === 1) {
//         console.log('更新成功')
//     }
// })


// 演示更新数据的便捷方式
// const user = { id: 6, username: 'aaaa', password: '0000' }
//     // 定义SQL语句
// const sqlStr = 'update users set ? where id=?'
//     // 执行SQL语句
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功');
//     }
// })



// 删除id为5的用户
const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 5, (err, result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows === 1) {
        console.log('删除数据成功');
    }
})

// 更推荐标记删除，如status(标记状态)来模拟删除