"use strict";

// 这里写的是es6的代码
var message = "Hello World";
var names = ['abc', 'bca', 'cba'];
names.forEach(function (item) {
  return console.log(item);
});
/* 
  ① 为什么需要babel
    并不是所有的JS引擎都能解析ES6的代码，但是绝大多数都能解析ES5的代码，所以需要使用babel将代码进行转化

  ② 安装babel：npm install @babel/core @babel/cli -D

  ③ 现在就可以进行转化：npx babel src --out-dir dist
    src：是源文件的目录 (这里指的是demo.js)
    --out-dir：指定要输出的文件夹dist(这里指的是dist文件夹)
    所以我们的命令应该是：npx babel demo.js --out-dir dist
    这样，代码就会被转化，并生成一份放到dist文件夹里面
    如果不想放到文件夹里面的话就要这样写：npx babel demo.js --out-file test.js

  ④ 但是，我们发现dist文件夹中生成的代码还是es6的语法，babel并没有对我们的代码进行转化
     是因为使用babel时要用对应的插件，才能对对应的语法进行转换
     比如说我们现在想要转化箭头函数，就可以使用箭头函数转换相关的插件
     箭头函数转换安装：npm install @babel/plugin-transform-arrow-functions -D
     安装完插件后，我们如果想要使用它，就需要在命令后面加一些参数，告诉babel如何去使用插件
     命令：npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions
     这时候再点开test.js就会发现，es6箭头函数就成功的被转化成es5的代码

  ⑤ 好的，这时候我们想要将const这种有作用域的关键字转化的话，也需要安装一个插件
      命令：npm install @babel/plugin-transform-block-scoping -D

      并且使用的时候要将之前的那个插件一起写上，也就是说写两个插件
      命令：npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping

  ⑥ 现在虽然转换完成了，但是这样写太麻烦了，每转换一个东西就要找对应的插件，命令又长又臭，有没有简单的写法呢？答案是有的！
      为了呵护程序员的头发，Babel有一个预设选项 preset，将我们最常用的一些转换用到的插件都弄到一起了
      我们只需要安装这个预设就好了：npm install @babel/preset-env -D

      安装完后，我们在转化代码时就不需要再输那一长串又臭又长的命令了
      只需要输入：npx babel demo.js --out-file test.js --presets=@babel/preset-env
      这时候ES6就转换成ES5了
*/
