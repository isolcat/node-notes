// 定义转移HTML字符的函数
function htmlEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

module.exports = {
    htmlEscape
}