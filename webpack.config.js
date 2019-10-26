"use strict";

const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
        game: "./scripts/start.js",
        menu: "./scripts/menu.js"
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, './static')
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.less'],
        modules: [
            path.resolve(__dirname, "node_modules"),
            'node_modules'
        ],
        alias: {
            "react": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",
        }
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }],
    },
    watch: (process.env.NODE_ENV === 'development'),
    devtool: (process.env.NODE_ENV === 'development') ? 'cheap-inline-module-source-map' : false,
};

