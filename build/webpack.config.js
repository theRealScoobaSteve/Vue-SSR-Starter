const VueLoaderPlugin = require("vue-loader/lib/plugin");

const path = require("path");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/main.js",
  output: {
    filename: "build.js"
  },
  node: {
    fs: "empty",
    child_process: "empty"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env"]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "../public/styles"),
      images: path.resolve(__dirname, "../public/images"),
      components: path.resolve(__dirname, "../src/components"),
      modules: path.resolve(__dirname, "../src/modules"),
      pages: path.resolve(__dirname, "../src/pages")
    }
  },
  plugins: [new VueLoaderPlugin()]
};
