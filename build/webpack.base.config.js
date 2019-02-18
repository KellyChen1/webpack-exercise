const webpack = require('webpack')
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')  //在html动态插入打包的js
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    //配置模块的入口
    //1. 如果entry是一个string或者array，就只会生成一个chunk，这个chunk的名称是main;
    //2. 如果entry是一个object，就可能出现多个chunk，这时chunk的名称是object键值对里键的名称。
    "app": [path.resolve(__dirname, "../src/index.js")],  //不懂
    "common": ["babel-polyfill"]      //
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-[chunkhash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,      //不对node_modules进行编译，提升打包速度
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use:"css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use:[                    //use: 用loader去编译
            { loader: "css-loader" },
            { loader: "postcss-loader" },
            { loader: "less-loader"}
          ],
          fallback:"style-loader"   //fallback用style-loader提取css
        })
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'best kelly',    //生成html的title属性
      filename: 'index.html',      //生成到dist目录html的文件名
      file: {
        "js": ["app.js", "common.js"]
      },
      template: path.resolve(__dirname, "../src/index.html"),  //入口模板
      favicon: path.resolve(__dirname, "../src/favicon.ico"), //加载网站图标
      inject: "body",  //true === body, js加在body里
      minify: {
        removeComments: true,   //移除注释
        collapseWhitespace: true, //移除空白
        removeAttributeQuotes: true,  //移除html中可以去掉的引号
      }
    }),

    new ExtractTextPlugin({
      filename: "./style.css",      //extract-text-webpack-plugin 在webpack4不能用hash
      allChunks: false
    })

  ]
}
