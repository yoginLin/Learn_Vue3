const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      // css-loader
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      // less-loader
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // file-loader
      {
        // ?表示0个或者1个
        test:/\.(jpe?g|png|gif|svg)$/,
        // use:"file-loader",
				// 搞定之后再次打包，build文件下会出现一张图片，名字是一串字符

        // 当我们想给打包好的文件按照一定格式命名时，可以这样写
        use:{
          loader:"file-loader",
          // 可以在options里面写上一些而外的参数
          options:{
            // 输出的一个路径
            outputPath:"img",
            // name决定图片的一个名字，[]是一种占位写法
            name:"[name].png"
          }
        }
      }
    ],
  },
};
