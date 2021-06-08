const path = require("path");
// loader是对特定模块进行转换
// plugin可以用于执行更广泛的任务，比如打包优化、资源管理、环境变量注入等
// 安装cleanWebpackPlugin：npm install clean-webpack-plugin -D
// 安装完要导入一下插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  /* 设置模式：开发者模式(注意要加双引号)
      development：开发阶段，会设置development
      production：准备打包上线的时候，设置production
  */ 
  mode:"development",
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
      // js代码
      // {
      //   // webpack提供了一个babel-loader，本质上用的就是babel
      //   // 命令：npm install babel-loader @babel/core -D
      //   test:/\.js$/,
      //   // loader:"babel-loader"
        
      //   // 同样的，安装成功后也需要进行一下配置
      //   use:{
      //     loader:"babel-loader",
      //     options:{
      //       // plugins:[
      //       //   // 注意，这里这些插件用之前要安装，当然我这里安装过了
      //       //   // 如果安装后还报错的话，就检查下有没有写错插件名字
      //       //   // "@babel/plugin-transform-arrow-functions",
      //       //   // "@babel/plugin-transform-block-scoping",
      //       // ]
            
      //       // 当然，有更简单的写法
      //       presets:[
      //         "@babel/preset-env",
      //         // "@babel/preset-react",
      //         // "@babel/preset-ts"
      //       ]
      //       // 配置完之后再进行转化，发现这次就转化成功了
      //       // babel的配置信息可以放在一个独立的文件中，类似webpack.config.js
      //       // 可以新建一个babel.config.js 或者 .babelrc.json
      //     }
      //   }
      // }
      // js代码
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      // .vue文件
      {
        test: /\.vue$/,
        use: "vue-loader"
        // npm i @vue/compiler-sfc
      }
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
      BASE_URL:"'./'",
      // __VUE_OPTIONS_API__:对vue2做适配的,默认为true，如果你没有用到的话，vue会在警告中建议你自己配置true不true
      // __VUE_PROD_DEVTOOLS__:Vue的调试工具，在开发阶段时可以设置为true，但是在生产阶段用不上，可以设置为false，vue会在警告中建议你自己配置
      __VUE_OPTIONS_API__:true,
      __VUE_PROD_DEVTOOLS__:false
      // 这时候就没有警告了
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
    }),
    new VueLoaderPlugin()
  ]
};
