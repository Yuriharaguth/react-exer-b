const webpack = require('webpack')

module.exports = {
    entry: './ex.5/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8088,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}