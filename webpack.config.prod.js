import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
    },
    plugins: [
        // generate an external css file with a hash in the filename
        new ExtractTextPlugin('[name].[contenthash].css'),

        // hash the files using MD5 so that their names change when the content changes
        new WebpackMd5Hash(),


        // use CommonsChunkPlugin to create a separate bundle of vendor libraries so thaty htye're cached separately
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        // create html file that includes reference to bundled JS
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true
            },
            // properties you define here are available in index.html using htmlWebpackPlugin.options.varName
            trackJSToken: 'f4709c7fc9cb4137813656a5052cfb7b'
        }),

        // eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        // minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /\.css$/,
            //exlude: /node_modules/,
            //loaders: ['style', 'css']
            loader: ExtractTextPlugin.extract('css?sourceMap')
        }]
    }
}
