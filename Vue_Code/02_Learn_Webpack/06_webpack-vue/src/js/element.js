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