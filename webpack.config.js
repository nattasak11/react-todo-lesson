var path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.join(__dirname,'public'),
		filename: 'bundle.js'
	},
	module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  ]
	},
	devServer: {
		contentBase: './public',
	}
}