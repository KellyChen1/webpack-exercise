const webpack = require('webpack')
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')  //在html动态插入打包的js

module.exports = {
  entry: {
    "app": [path.resolve(__dirname, "../src/index.js")],  //不懂
  },
  output:{
    path: path.resolve(__dirname,"../dist"),
    filename:"[name]-[chunkhash:8].js",
  },
  plugins:[
    new htmlWebpackPlugin({
      title: 'best kelly',    //生成html的title属性
      filename: 'index.html',      //生成到dist目录html的文件名
      template: path.resolve(__dirname, "../src/index.html"),  //入口模板
      favicon: path.resolve(__dirname, "../src/favicon.ico"), //加载网站图标
      inject: "body",  //true === body
    })
  ]
}
