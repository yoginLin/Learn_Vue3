const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode:development,
  devtool:"source-map",// 建立js映射文件，方便调试代码和错误
  entry: "./src/main.js",// 设置打包的入口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/,
        type:"asset",
        generator:{
          filename:"img/[name]_[hash:6][ext]"
        },
        parser:{
          dataUrlCondition:{
            maxSize: 10 * 1024
          }
        }
      },
      {
        test:/\.(eot|ttf|woff2?)$/,
        type:"asset/resource",
        generator:{
          filename:"font/[name]_[hash:6][ext]"
        }
      },
    ],
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      title:'哈哈哈哈'
    }),
    new DefinePlugin({
      BASE_URL:"'./'"
    }),
    new CopyWebpackPlugin({
      patterns:[{
        from: "public",
        to: "./",
        globOptions:{
          ignore:[
            "**/index.html"
          ]
        }
      }]
    })
  ]
}; 