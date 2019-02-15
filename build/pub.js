const rimraf = require('rimraf');
const webpack = require('webpack');
const webpackConfig = require('../build/webpack.pub.config');
const config = require('./config');
const path = require('path');


rimraf(path.join(config.distPath + '/*'), function (err) {  //删除dist下面的所有文件
  if (err) {
    throw err;
  }
  // console.log(process.env.BUILD_ENV)
  webpack(webpackConfig, function (err, stats) {  //执行打包
    if (err) {
      throw err;
    }
  })

});