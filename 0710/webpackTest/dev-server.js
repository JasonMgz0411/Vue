//node dev-server.js
var express = require('express');
var webpack = require('webpack');
// 开发
var config = require('./webpack.dev');
//创建一个express实例
var app = express();
//使用配置调用webpack
var web = webpack(config);
//使用webpack-dev-middleware中间件
var devMiddleWare = require('webpack-dev-middleware')(web, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
});
// 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(web);
//webpack插件，监听html文件改变事件
web.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		//发布事件
		hotMiddleware.publish({
			action: 'reload'
		});
		cb();
	});
});
app.use(hotMiddleware);
app.use(devMiddleWare);
app.listen(8080, function(err) {
	if (err) {
		console.log(err);
	}
});