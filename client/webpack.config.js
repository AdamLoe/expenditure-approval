// In webpack.config.js
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: ["babel-polyfill", "./client/index.js"],

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
			}
		],
	},

	plugins: [
		new HtmlWebpackPlugin({template: "./client/index.html" })
	]
};