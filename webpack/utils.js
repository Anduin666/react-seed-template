var path = require('path')
var config = require('../config')
var glob = require('glob');


exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}


exports.getEntryHtml = function(globPath) {

  var entries = {},
      basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {

    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = tmp[1]; // 正确输出js和html的路径
    entries[pathname] = entry;
  });
  return entries;
}


exports.getEntry = function(globPath) {

  var entries = {},
      basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    if(tmp[0] !='pages') return;
    pathname = tmp[0] + '/' + tmp[1]; // 正确输出js和html的路径
    entries[pathname] = entry;
  });
  return entries;
}