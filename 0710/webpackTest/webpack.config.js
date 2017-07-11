//webpack --display-modules --display-chunks --config webpack.config.js
var path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		index: [
			path.resolve(__dirname, './js/project/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, './output/js'),
		publicPath: 'js/',
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
			loader: 'vue-loader',
			options: {
				loaders: {
					css: ExtractTextPlugin.extract({
						use: 'css-loader',
						fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
					})
				}
			}
		}, {
			test: /\.js$/,
			loader: 'babel-loader?presets=es2015',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new ExtractTextPlugin("../css/[name].[hash].css"),
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: path.resolve(__dirname, './pages/index.html'),
			inject: true
		})
	]
};