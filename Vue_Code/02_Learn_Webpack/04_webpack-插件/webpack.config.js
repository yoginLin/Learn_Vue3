const path = require("path");
// loader是对特定模块进行转换
// plugin可以用于执行更广泛的任务，比如打包优化、资源管理、环境变量注入等
// 安装cleanWebpackPlugin：npm install clean-webpack-plugin -D
// 安装完要导入一下插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  /* 设置模式：开发者模式
      development：开发阶段，会设置development
      production：准备打包上线的时候，设置production
  */ 
  mode:development,
  // 设置开发的一个工具
  // devtool:"eval",
  // 设置source-map：在生成对应的源代码的时候，它也会对应生成对应的source-map文件
  devtool:"source-map",// 建立js映射文件，方便调试代码和错误
  entry: "./src/main.js",// 设置打包的入口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
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
      // 图片
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
      // 字符
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
    // 是一个数组，放着一个个的插件对象
    // 会先删除掉之前打包的文件夹，再重新打包
    new CleanWebpackPlugin(),
    /* 
    默认的打包，打包文件夹下是没有index.html的
    如果想要在打包的文件夹下生成一个index.html
    就要安装html-webpack-plugin插件：npm install html-webpack-plugin -D
    当你安装完这个插件后，你可以把项目中的index.html删除，插件会自动打包一份index.html进你的打包文件夹内 */
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      title:'哈哈哈哈'
    }),
    // 配置路径变量
    new DefinePlugin({
      BASE_URL:"'./'"
    }),
    // npm install copy-webpack-plugin -D 有时候我们想把项目中的一些东西复制到打包的文件夹中，就可以用这个插件
    new CopyWebpackPlugin({
      patterns:[{
        // 从哪里复制
        from: "public",
        // 复制到哪里去（一般不写）
        to: "./",
        globOptions:{
          // 要忽略的文件
          ignore:[
            "**/index.html"
          ]
        }
      }]
    })
  ]
};
