// import {sum} from './js/math.js' 可以不跟后缀，webpack会自动加后缀
import {sum} from './js/math';
const {priceFormat} = require('./js/format');

// 这样就有依赖了，下次打包的时候就会打包进去
import "./js/element";
// import "./css/style.css";
import "css-loader!./css/style.css";  // 这种写法是内联配置css-loader，不推荐

console.log(sum(20,30));
console.log(priceFormat());