const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV.trim() !== "production";

const PATHS = {
    app: path.join(__dirname, 'src'),
    assets: path.join(__dirname, 'assets'),
    dist: path.join(__dirname, 'dist'),
};

module.exports = {
    entry: path.resolve(PATHS.app, 'main.js'),
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Boggle - Jquery',
            template: path.resolve(PATHS.assets, 'index.html'),
            favicon: path.resolve(PATHS.assets, 'favicon.png'),
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: devMode,
                            sourceMap: devMode
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: devMode,
                        }
                    },
                    {
                        loader: 'postcss-loader', options: {sourceMap: devMode, }
                    }
                ],
            },
        ],
    },
    output: {
        filename: devMode ? '[name].bundle.js' : '[name].[hash].bundle.js',
        chunkFilename: devMode ? '[id].js' : '[id].[hash].js',
        path: path.resolve(PATHS.dist)
    },    
};