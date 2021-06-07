"use strict";

var message = "Hello World";
var names = ["abc", "vad", "cba"];
names.forEach(function (item) {
  return console.log(item);
});
/* 
  使用babel来处理我们的源代码
  src：是源文件的目录
  --out-dir：指定要输出的文件夹dist

  但是，我们发现代码还是es6的代码，是因为还没用对应的插件进行转化
  我们需要安装对应的插件 npm install @babel/plugin-transform-arrow-functions -D
  安装完插件后，我们在命令后面加一些参数
  npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions 
  想要把定义的块级作用域做一些转化
  npm i @babel/plugin-transform-block-scoping -D

  好的，现在虽然转换完成了，但是太麻烦了，每转换一个就要找对应的插件，这样太麻烦了，有没有简单一些的写法的，答案是有的
  Babel有一个预设preset，将我们最常用的插件安装到一起了，我们只需要安装这个预设就好了：npm install @babel/preset-env -D
  npx babel demo.js --out-file test.js --presets=@babel/preset-env
*/
