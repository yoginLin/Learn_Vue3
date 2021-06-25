// import _ from "../node_modules/lodash-es/lodash.default";
import _ from "lodash-es"
import { sum } from "./js/math"
import mul from "./ts/mul"

import "./css/style.css"
import "./css/title.less"

console.log("Hello World !!!")
console.log(sum(20, 30))
console.log(mul(20, 30))

console.log(_.join(["abc", "cba"], "-"))

const titleEl = document.createElement("div")
titleEl.className = "title"
titleEl.innerHTML = "Hello"
document.body.appendChild(titleEl)

/* 
  1、用了Vite，.js后缀名可以不加
  2、可以自动解析路径
  3、帮我们打包代码
*/
