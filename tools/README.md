## 安装
```
npm install isolcat-tools
```

## 导入
```js
const itheima=require('itheima-tools')
```

## 格式化时间
```js
// 调用dateFormat方法对时间进行格式化
const dtStr=itheima.dateFormat(new Date())
console.log(dtStr)
```

## 转义HTML中的特殊字符
```js
const htmlStr=itheima.escapeHtml('<h1>hello</h1>')
console.log(htmlStr)
```

## 开源协议
ISC
