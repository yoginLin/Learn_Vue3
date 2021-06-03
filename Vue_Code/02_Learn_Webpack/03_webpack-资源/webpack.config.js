const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: '/',
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
        use:"file-loader",
				// 搞定之后再次打包，build文件下会出现一张图片，名字是一串字符
      }
    ],
  },
};
