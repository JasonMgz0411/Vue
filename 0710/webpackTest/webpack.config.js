//webpack --display-modules --display-chunks --config webpack.config.js
var path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		index: [
			path.resolve(__dirname, './js/project/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, './output/static'),
		publicPath: 'static/',
		filename: '[name].[hash].js',
		chunkFilename: '[id].[chunkhash].js'
	},
	resolve: {
		extensions: [' ', '.js', '.vue'],
		alias: {
			'Vue': 'vue/dist/vue.min.js'
		}
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.js$/,
			loader: 'babel-loader?presets=es2015',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: path.resolve(__dirname, './pages/index.html'),
			inject: true
		})
	]
};