const webpack = require('webpack');

const webpackConfig = require('./webpack.base.config');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    // 'process.env.NODE_ENV': JSON.stringify('production')
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)      //设置production全局变量
  }))
  
webpackConfig.optimization={
  minimize:true,
  // //取代 new webpack.NoEmitOnErrorsPlugin()，编译错误时不打印输出资源。
  // noEmitOnErrors: true
}

module.exports = webpackConfig;