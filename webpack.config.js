var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: [
		'./src/main.js',
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
  		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
	],
	output: {
		path: path.join(__dirname,'public'),
		filename: 'bundle.js'
	},
	module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"] }
	  ]
	},
	devServer: {
		contentBase: './public',
	},
	
}