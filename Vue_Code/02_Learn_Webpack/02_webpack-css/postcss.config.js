// module.exports = {
//   plugins: [require("autoprefixer")],
// };

// 但是在实际开发中，我们配置的插件并不需要autoprefixer
// 我们可以使用另一个插件：postcss-preset-env
// npm install postcss-preset-env -D

module.exports = {
  plugins:[require("postcss-preset-env")]
}