// 这个名字是固定的，最好就叫这个名字

const path = require("path");
// 通过module.exports导出了一个对象
module.exports = {
  // 入口
  entry: "./src/main.js",
  // 出口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  // css其实就是一个模块，现在我们就要配置这个模块
  module: {
    // 规则
    rules: [
      {
        // 匹配，后面写正则表达式
        test: /\.css$/,
        // 这种写法是第一种写法，本质上是语法糖
        // loader:"css-loader"
        // 上面这段的意思是：遇到.css就用css-loader
        // 写完之后就可以打包看看

        // 2、正常完整的写法是这样写的
        use: [
          // {
          //   // loader:"css-loader",
          //   // options:{}

          //   // 或者
          //   // "css-loader"
          // }

          "style-loader",
          "css-loader",
          "postcss-loader",
          // 增加上postCSS-loader
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [require("autoprefixer")],
          //     },
          //   },
          // },
          // 这里要注意顺序，顺序是从下到上，从右到左
          // 要先加载css，再加载style
          // 这次打包完就可以看到效果了
        ],

        // 但是加载完发现页面并没有生效，因为css-loader只是对css做了个加载
        // 真正要插入style的话还需要一个style-loader：npm install style-loader -D
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
