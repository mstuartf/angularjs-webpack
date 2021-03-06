
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: {
        app: './app/app.js'
    },

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name].bundle.js'
    },

    module: {
    
        rules: [
    
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
        
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/dist/'
                    }
                },
                "css-loader"
                ]
            },
        
            {
                type: 'javascript/auto',
                test: /\.json$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './translations/',
                            name: "[name].[ext]"
                        }
                    }
        
                ]
            }

        ]

    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        },

    },
    
    plugins: [
        new MiniCssExtractPlugin({
            chunkFilename: "[name].css"
        })
    ]

}
