// 这个名字是固定的，最好就叫这个名字

const path = require('path')
// 通过module.exports导出了一个对象
module.exports = {
  // 入口
  entry:"./src/main.js",
  // 出口
  output:{
    path:path.resolve(__dirname,"./build"),
    filename:"bundle.js"
  }
}