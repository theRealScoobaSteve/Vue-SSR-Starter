const merge = require("webpack-merge");
const path = require("path");
const base = require("./webpack.config");

module.exports = merge(base, {
  target: "node",
  entry: {
    app: "./src/server.js"
  },
  devtool: false,
  output: {
    filename: "server.bundle.js",
    libraryTarget: "commonjs2"
  },
  devtool: false,
  externals: Object.keys(require("../package.json").dependencies)
});
