// 这个名字是固定的，最好就叫这个名字

const path = require('path')
// 通过module.exports导出了一个对象
module.exports = {
  // 入口
  entry:"./src/main.js",
  // 出口
  output:{
    // 这里必须写绝对路径
    // path:"D:\Vue\Learn_Vue3\Vue_Code\02_Learn_Webpack\01_basic_webpack\build"
    // 但是这样写太麻烦了，所以有另外的写法
    // __dirname可以获取当前文件的所在路径
    path:path.resolve(__dirname,"./build"),

    // 默认打包出来的文件叫做main.js，如果我们要改名，可以这样写
    filename:"bundle.js"
    
  }
}