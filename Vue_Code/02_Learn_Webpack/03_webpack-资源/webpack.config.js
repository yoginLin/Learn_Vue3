const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // css-loader
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      // less-loader
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // file-loader
      {
        // ?表示0个或者1个
        test:/\.(jpe?g|png|gif|svg)$/,
        use:"file-loader"
      }
    ],
  },
};
