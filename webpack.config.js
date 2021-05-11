var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js", // bundle.js to wynik kompilacji projektu przez webpacka
	},
	mode: "development", // none, development, production
	devServer: {
		port: 8080,
		publicPath: "/",
		contentBase: "./src",
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			filename: "./index.html", //relative to root of the application
			title: "FPS Project",
			template: "./src/index.html",
			h1: "h1",
			h2: "h2",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
};
