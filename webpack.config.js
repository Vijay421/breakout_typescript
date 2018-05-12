const path = require('path');
module.exports = {
	entry: './recources/ts/App.ts',
	mode: 'production',
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
			'.js',
		],
	},
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'public/js/dist'),
		publicPath: '/public/',
	}
};