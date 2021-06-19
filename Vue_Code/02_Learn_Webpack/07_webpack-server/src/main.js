// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from "vue";
import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import App from "./vue/App";

// import "./js/element"; // 如果想要热替换，就不能这么写
import "./js/element";
if (module.hot) {
  module.hot.accept("./js/element.js", () => {
    // 后面还可以加个回调函数
    console.log("element模块更新了");
  });
}

import "./css/style.css";

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App);
app.mount("#app");

console.log("1234");
console.log("你好啊123");

// 通过axios发送一个get请求
// axios.get("http://localhost:8888/moment").then(res=>{
axios.get("/api/moment").then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
