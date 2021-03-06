// 导入数据库操作模块
const db = require('../db/index')
    // 导入bcrypt.js这个包(用于加密用户信息的包)
const bcrypt = require('bcryptjs')


exports.regUser = (req, res) => {
    // 获取客户端提交到服务器的用户信息
    const userinfo = req.body
        // 对表单中的数据，进行合法性的效验
    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: '用户名或密码不合法' })
    }
    res.send('reguser ok')
}

// 定义sql语句，查询用户名是否被占用
const sqlStr = 'select * from ev_users where username=?'
db.query(sql, [userinfo.username], function(err, results) {
    // 执行 SQL 语句失败
    if (err) {
        return res.send({ status: 1, message: err.message })
    }
    // 用户名被占用
    if (results.length > 0) {
        return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
    }
    //调用bcrypt.hashSync()对密码进行加密
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)

    // 定义插入新用户的SQL语句
    const sql = 'insert into ev_user set ?'
        // 调用db.query()执行SQL语句
    db.query(sql, { username: '', password: '' }, (err, results) => {
        // 判断SQL语句是否执行成功
        if (err) return res.send({ status: 1, message: err.message })
            // 判断影响行数是否为1
        if (results.affectedRows !== 1) return res.send({ status: 1, message: '注册用户失败，请稍后重试' })
        res.send({ status: 0, message: '恭喜你注册成功' })
    })


})

exports.login = (req, res) => {
    res.send('login ok')
}