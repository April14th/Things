const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path');

module.exports = {
    devtool: 'eval',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/fetch.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.vue$/i,
                loader: 'vue-loader' 
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader']
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        port: 8080,
        open: false,
        watchContentBase: true
    }
}