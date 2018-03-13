require('env2')('./env.json');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
const ifDev = (then) => (isDev ? then : null);
const ifProd = (then) => (!isDev ? then : null);
const identity = (i) => i;

console.log(`Starting compiler with NODE_ENV is ${process.env.NODE_ENV}, isDev is ${isDev}`);

module.exports = {
    target: 'web',
    profile: true,
    entry: [ifDev('webpack-hot-middleware/client'),
        ifDev('react-hot-loader/patch'),
        './index'].filter(identity),
    performance: {
        hints: false
    },
    context: path.resolve(__dirname, './src'),
    devtool: isDev ? 'cheap-module-source-map' : false,
    resolve: {
        modules: [
            path.resolve(__dirname, './src'),
            path.resolve(__dirname, './assets'),
            'node_modules']
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
        filename: isDev ? 'app.bundle.js' : 'app.bundle.[chunkhash].js'
    },
    plugins: [
        ifProd(new CleanWebpackPlugin(['dist/*.*', 'logs/*.*'], {verbose: true})),
        ifProd(new webpack.LoaderOptionsPlugin({minimize: true, debug: false})),
        new webpack.EnvironmentPlugin({
            DEBUG: isDev,
            NODE_ENV: isDev ? 'development' : 'production'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
            minify: {collapseWhitespace: true}
        }),
        ifDev(new webpack.HotModuleReplacementPlugin()),
        ifDev(new webpack.NamedModulesPlugin()),
        new ExtractTextPlugin({filename: 'app.bundle.[contenthash].css', disable: isDev}),
        ifProd(new UglifyJsPlugin({parallel: true, cache: true, uglifyOptions: {warnings: true}})),
        ifDev(new OpenBrowserPlugin({url: `http://localhost:${process.env.APP_PORT}`}))
    ].filter(identity),
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, './src')],
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev,
                                minimize: isDev ? false : {discardComments: {removeAll: true}}
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                noIeCompat: true,
                                sourceMap: isDev,
                                paths: [path.resolve(__dirname, 'node_modules'),
                                    path.resolve(__dirname, 'src')]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['file-loader']
            }
        ]
    }
};
