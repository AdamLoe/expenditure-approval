// In webpack.config.js
let HtmlWebpackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");

module.exports = {
	entry: ["babel-polyfill", "./entry.js", "./src/index.js"],

	output: {
		path: __dirname + "/public/dist",
		filename: "index.js"
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "es2016", "stage-1"]
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		],
	},

	plugins: [
		new HtmlWebpackPlugin({template: "./src/index.html" }),
		new webpack.ProvidePlugin({
			React: "react",
			connect: "react-redux/lib/connect/connect"
		})

	]
};