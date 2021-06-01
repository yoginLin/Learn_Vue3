// import {sum} from './js/math.js' 可以不跟后缀，webpack会自动加后缀
import {sum} from './js/math';
const {priceFormat} = require('./js/format');

console.log(sum(20,30));
console.log(priceFormat());