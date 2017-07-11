var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
webpackConfig.output.publicPath = '/';
webpackConfig.plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new ExtractTextPlugin("css/[name].[hash].css"),
	new HtmlWebpackPlugin({
		filename: 'pages/index.html',
		template: path.resolve(__dirname, './pages/index.html'),
		inject: true
	})
];
//加入热检测中间件
// var hotWare = 'webpack-hot-middleware/client';
var hotWare = './dev-client.js';
Object.keys(webpackConfig.entry).forEach(function(name, i) {
	var ext = [hotWare];
	webpackConfig.entry[name] = ext.concat(webpackConfig.entry[name]);
});
module.exports = webpackConfig;