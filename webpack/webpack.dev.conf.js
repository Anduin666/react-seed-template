var utils = require('./utils')
var webpack = require('webpack')
var glob = require('glob');
var path = require('path')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./webpack/dev-client', 'react-hot-loader/patch'].concat(baseWebpackConfig.entry[name])
});


var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.less?$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]',
                    'less-loader'
                ]
            }
        ]
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'index.html',
        //     inject: true
        // }),
        new FriendlyErrorsPlugin()
    ]
});

var pages = utils.getEntryHtml('./src/pages/**/*.html'), assets = [];
for (var p in pages) {
    assets['pages/'+p] = pages[p];
}
for (var pathname in pages) {
    // 配置生成的html文件，定义路径等
    var conf = {
        filename: pathname + '.html',
        template: pages[pathname],   // 模板路径
        inject: true,
        excludeChunks:  Object.keys(assets).filter(item => {
            return (item != 'pages/'+pathname)
        })
    };
    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

module.exports = webpackConfig;

