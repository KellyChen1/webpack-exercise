const webpack = require('webpack');

const webpackConfig = require('./webpack.base.config');

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    // 'process.env.NODE_ENV': JSON.stringify('production')
    'process.env.BUILD_ENV': JSON.stringify(process.env.BUILD_ENV)      //设置production全局变量
  }))

// webpackConfig.plugins.push(
//   new webpack.optimize.UglifyJsPlugin({     //在发布时清除warning, console, debugger
//     compress: {
//       warnings: false,
//       drop_console: true,      
//       drop_debugger: true
//     }
//   })
// )
  


module.exports = webpackConfig;