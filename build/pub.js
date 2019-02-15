const rimraf = require('rimraf');
const webpack = require('webpack');
const webpackConfig = require('../build/webpack.base.config');
const config = require('./config');
const path = require('path');

rimraf(path.join(config.distPath + '/*'), function (err) {  //删除dist下面的所有文件
  if (err) {
    throw err;
  }
  webpack(webpackConfig, function (err, stats) {  //执行打包
    if (err) {
      throw err;
    }
  })

});