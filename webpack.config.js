var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",
        chunkFilename: "[name].js",
        libraryTarget: "umd",
        publicPath: '/'
    },
    devServer: {
        port: '9090'
    },
    module: {
        //加载器配置
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader",
                })
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: "babel-loader",
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'), new HtmlWebpackPlugin({
            template: './index.html.ejs'
        })
    ],
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')]
        ,extensions: ['.js', '.jsx']
    }
}