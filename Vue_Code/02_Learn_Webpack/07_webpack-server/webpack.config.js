const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  target:"web", // 然后设置这个东西，但是webpack默认不知道要对哪些模块做热替换
  mode:"development",
  devtool:"source-map",
  // watch:true, // 等同于 webpack --watch，如果这里设为true，那么package.json里面的 "build": "webpack --watch" 可以改成 "build": "webpack“
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  devServer:{
    contentBase: "./public", // 如果有一些资源我们不希望在开发时随便做复制，等生产阶段再做复制的话，就可以设置这个contentBase
    hot:true,  // 如果要想达到模块热替换，首先得设置这个东西
    // host:"0.0.0.0", // 修改主机地址
    port:7777, //端口号修改
    open:true, // 是否打开浏览器 同 "serve": "webpack serve --open"
    // compress:true // 进行gzip压缩，这个开不开都可以
    proxy:{ // 开发阶段解决跨域问题
    // "/api":"http://localhost:8888"
    // "/api":{
    //   target:"http://localhost:8888",
    //   pathRewrite:{
    //     "^/api":""
    //   },
    // }
    //   secure:false, // 默认为true，即使没有证书也可以正确代理
    //   changeOrigin:true // 修改源
    // }
  },
  resolve:{
    // module:["node_modules"] 默认
    // extensions:['.wasm','.mjs','.js','.json']; 默认值
    extensions:[".js",".json",".mjs",".vue"], // 加完后导入时就可以省略掉后缀名了
    alias:{
      "@":path.resolve(__dirname,"./src"),
      "js":path.resolve(__dirname,"./src/js")
    }
  },
  module: {
    rules: [
      {// css-loader
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {// less-loader
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {// 图片
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
      {// 字符
        test:/\.(eot|ttf|woff2?)$/,
        type:"asset/resource",
        generator:{
          filename:"font/[name]_[hash:6][ext]"
        }
      },
      {// js代码
        test: /\.js$/,
        use: "babel-loader"
      },
      {// .vue文件
        test: /\.vue$/,
        use: "vue-loader"
      }
    ],
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      title:'哈哈哈哈'
    }),
    new DefinePlugin({ // 配置路径变量
      BASE_URL:"'./'",
      __VUE_OPTIONS_API__:true,
      __VUE_PROD_DEVTOOLS__:false
    }),
    // new CopyWebpackPlugin({
    //   patterns:[{
    //     from: "public",
    //     to: "./",
    //     globOptions:{
    //       ignore:[
    //         "**/index.html"
    //       ]
    //     }
    //   }]
    // }),
    new VueLoaderPlugin()
  ]
};
