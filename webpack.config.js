'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/app.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.sass$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.pug$/,
                use: ['html-loader','pug-html-loader']
            },
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin({
            title: "my aoo",
            filename: "index.html",
            template: __dirname+"/src/index.pug"
        })
    ]
};

