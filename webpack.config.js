const path = require('path');
module.exports = {
	entry: './recources/js/App.ts',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
			}
		],
	},
	resolve: {
		extensions: [
			'.ts',
		],
	},
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'public/js')
	}
};