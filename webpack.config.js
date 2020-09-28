const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Array of HtmlFiles
const htmlFiles = ["src/index.html"];

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {

      port: 4000,
      host: "0.0.0.0",
    },
    plugins: [
        new HtmlWebpackPlugin({
        filename:  "index.html",
        template: "./src/index.html",
        minify: false,
      })

    ],

};
