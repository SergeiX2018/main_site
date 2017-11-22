const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'application.js'
    },
    module: {
        rules:[

            {
                test: /\.(jpe?g||png|gif|svg)$/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options:{
                        limit:10000,
                    }
                }]
            },
            {
                test: /\.less/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",

                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
        ]

    },
    plugins: [new HtmlWebpackPlugin(
        {template:"./src/index.html",
            inject:"body"}
    )]
};