var path = require('path');
var webpack = require('webpack');

module.export = {
	entry: {
		main: path.resolve('client', 'index.js');
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	module: {
		loaders: [
		// js
		{
			test: /\.js$/,
			loaders: ['babel'],
			include: path.join(__dirname, 'public')
		},// scss
		{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!scss-loader!sass-loader',
			options: { // de uglify 
				sourceMap: true
			}
			include: path.join(__dirname, 'public')
		}
		]
	}
}