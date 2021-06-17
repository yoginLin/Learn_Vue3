import "../css/title.less";
// 对css进行引用，让其可以打包
import "../css/image.css";
import "../font/iconfont.css";

// 图片也是一个模块，将其导入
import zznhImage from '../img/zznh.png'

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊，李大嘴";

// 设置背景图片
const bgDivEl = document.createElement("div")
bgDivEl.className = "image-bg";

// 设置img元素的src
const imgEl = document.createElement("img")
imgEl.src = zznhImage;

// i元素
const iEl = document.createElement('i');
iEl.className = 'iconfont icon-ashbin'

// console.log(content.length);

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);

console.log("o((>ω< ))o 早~1");
/* 
  模块的热替换（HMR）：一个文件就是一个模块
    现在我们修改代码，浏览器能及时更新我们的页面
    但是我们不希望浏览器随随便便刷新，我们希望浏览器只修改我们修改的部分
    那么如何开启HMR呢？我们跳到webpack.config.js
*/