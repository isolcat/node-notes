// 这是包的入口文件


// 这是包的入口

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

// 向外暴露的元素
module.exports = {
    ...date,
    ...escape
}