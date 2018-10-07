const webpack = require('webpack');
const path = require ('path');
debugger
const APP_DIR = path.resolve(__dirname,'ClientApp');
const PUBLIC_DIR = path.resolve(__dirname,'public');

//const merge = require('webpack-merge');
//const baseConfig = require('./webpack.base.js');

const config = {

    entry: APP_DIR + '/Client.js',
    devServer:{
        contentBase: PUBLIC_DIR,
        port: 9000,
        open: true,
        historyApiFallback: true
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,
                options: {
                    presets: [
                        'react', 'stage-2',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                },
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }

};

module.exports = config;
//module.exports = merge(baseConfig, config);