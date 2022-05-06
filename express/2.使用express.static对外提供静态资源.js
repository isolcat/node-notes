const express = require('express')
const app = express()

// 在这里，调用express.static()方法，快速的对外提供静态资源
// 如果要多次获取资源，只需要多行app.use(express.static())即可
// 当加上前缀后，便需要在访问前加入/abc
app.use('/abc', express.static('../clock'))
    // 注意，如果在命名上有重复的时候，会按照从上到下的顺序调用引入的静态资源

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})