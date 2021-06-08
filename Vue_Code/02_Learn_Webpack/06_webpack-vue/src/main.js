// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from 'vue';
import {sum} from './js/math';
const {priceFormat} = require('./js/format');

import App from './vue/App.vue'

import "./js/element";
import "./css/style.css";

console.log(sum(20,30));
console.log(priceFormat());

// 如果想打包vue
// 安装vue：npm i vue@next
// const app = createApp({
//   template: "#my-app",
//   data() {
//     return {
//       title:"Hello World"
//     }
//   }
// });

const app = createApp(App)
app.mount("#app");
// 打包可以，但是没有显示，是因为我们的template需要用vue的源代码来对其进行解析
// Vue版本1：runtime+compiler
// Vue版本2：runtime-only（默认版本，不包含对源代码的编译）
// 所以我们要把版本改成版本一
