const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // assetModuleFilename:"img/[name]_[hash:6][ext]"
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
      /* {
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
            // outputPath:"img",
            // name决定图片的一个名字，[]是一种占位写法
            // 如果在前面加一个路径的话，会自动生成一个文件夹
            name:"img/[name]_[hash:6].[ext]"
          }
        }
      }, */
      // url-loader
      /* {
        test:/\.(jpe?g|png|gif|svg)$/,
        use:{
          // url-loader可以替代掉file-loader
          loader:"url-loader",
          options:{
            name:"img/[name]_[hash:6].[ext]",
            // 在开发中，往往小的图片需要转换，大的图片直接使用
            // 因为小的图片转换成base64之后与页面一起请求，可以减少不必要的请求过程
            // 而大的图片也进行转换的话，反而会影响页面的请求速度
            // 设置limit，就可以设置小于多少kb的文件才要进行转换
            // 这里默认的单位是byte，下面这样写就表示100Kb
            limit:100 * 1024
          }
        }
      } */
      // 但是在webpack5之后，我们就不再使用file-loader、url-loader这些东西了
      {
        test:/\.(jpe?g|png|gif|svg)$/,
        // type:"asset/resource",// 这种写法就相当于file-loader，不管什么文件都给你打包
        type:"asset",// 这种写法就是最常用的
        generator:{ // 如果想把打包的文件放到某个文件夹下，可以这样写
          filename:"img/[name]_[hash:6][ext]" // 这里的扩展名是默认有包含.的，所以不用写.

        },
        // 如果要给限制的话，得按照下面这种写法
        parser:{
          dataUrlCondition:{// 数据Url的条件
            maxSize: 100 * 1024
          }
        }
      },
      // 有时候我们需要打包一些字符图片
      /* {
        test:/\.(eot|ttf|woff2?)$/,
        use:{
          loader:"file-loader",
          options:{
            name:"font/[name]_[hash:6].[ext]"
          }
        }
      } */
      // 这种写法也可以 - webpack5的写法
      {
        test:/\.(eot|ttf|woff2?)$/,
        type:"asset/resource",
        generator:{
          filename:"font/[name]_[hash:6][ext]"
        }
      }
    ],
  },
};
