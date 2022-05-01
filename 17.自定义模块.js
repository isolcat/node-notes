// 在自定义模块中，默认情况下，module.exports={}
module.exports.username = 'zs'
    // 向module.exports对象上挂载username属性


const age = 20

module.exports.sayHello = () => {
        console.log('hello');
    }
    // 如果不写这行代码，则无法将该自定义模块中的age属性给暴露出去
module.exports.age = age

// 让module.exports指向一个全新的对象
module.exports = {
        nickname: '小黑',
        sayHi() {
            console.log('hi!')
        }
    }
    // 使用require()方法导入模块时，导入的结果永远以module.exports指向的对象为准

// 由于module.export单词过长，所以node又推出了一个export对象，二者指向同一个对象