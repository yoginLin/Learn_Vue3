module.exports = {
  presets:[
    "@babel/preset-env"
  ]
}

/* 
  ① 我们之前修改了代码后，都需要重新执行一次npm run build，将代码重新进行一次打包，再到浏览器上运行起来
      这个过程经常会影响我们的开发效率，我们希望做到 当文件发生变化时，可以自动的完成 编译 和 展示
      为了完成自动编译，webpack提供了几种可选的方式：
        （1）webpack watch mode
        （2）webpack-dev-server（常用）
        （3）webpack-dev-middleware

  ② 加上了 --watch之后，我们每次修改完代码，进行保存后，就可以自动 编译 和 展示，不需要重新打包
  
  ③ 上面的方式可以监听到文件的变化，但是事实上它本身是没有自动刷新浏览器的功能的
      虽然目前在VSCode中可以使用live-server来完成这样的功能
      但是，我们希望不使用live-server的情况下，也可以具备live reloading（实时加载功能）的功能
      我们可以安装webpack-dev-server ：npm install webpack-dev-server -D
*/