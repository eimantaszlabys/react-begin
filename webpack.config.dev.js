const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";
module.exports = {
  node: "development",
  target: "web",
  devTool: "cheap-module-source-map",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    pulicPath: "/",
    filename: "bundle.js"
  }
};
