/**
 * Created by qhyang on 2017/11/30.
 */

'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(rootDir, 'build')
    },
    devtool: 'source-map',
    entry: {
        main: [ path.resolve(rootDir, 'demo', 'index') ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'demo', 'index.html'),
            chunks: [ 'main' ]
        })
    ],
    resolve: {
        extensions: [ '.js' ]
    }
};
