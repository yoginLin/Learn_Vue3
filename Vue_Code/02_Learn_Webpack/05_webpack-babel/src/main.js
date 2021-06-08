import {sum} from './js/math';
const {priceFormat} = require('./js/format');

import "./js/element";
import "./css/style.css";

console.log(sum(20,30));
console.log(priceFormat());

const message = "Hello World";
const names = ['abc','bca','cba'];

names.forEach(item => console.log(item));
console.log(message);

/* 
  那么我们用webpack打包代码的时候，webpack有没有帮我们将代码进行转化呢？答案是没有！
  这样的话就有可能发生因为用户浏览器因为不支持es6代码，从而看不到内容的问题
  因为webpack是一个打包工具，它不负责打包的过程中对代码进行转化
  如果希望webpack打包后的代码是es5的代码，我们可以在webpack中使用babel(babel-loader)

  webpack提供了一个babel-loader，本质上用的就是babel
  命令：npm install babel-loader @babel/core -D
*/