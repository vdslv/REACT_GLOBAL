const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
    const isProd = process.env.NODE_ENV === 'production';

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader', "css-loader", "sass-loader"
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: 'Hello World',
                template: 'public/index.html',
                inject: true
            }),
        ];

        if(isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            }))
        }

        return plugins;
    }

    return  {
        mode: isProd ? 'production': 'development',
        entry: ["./src/index.tsx"],
        target: 'web',
        devtool: isProd ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: './dist',
        },
        output: {
            filename: "[name].bundle.js",
            chunkFilename: "[name].bundle.js",
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            modules: [
                path.resolve(__dirname, "./src"),
                path.resolve(__dirname, "./node_modules"),
            ],
            extensions: [".js", ".jsx", ".json", ".tsx", ".ts"],
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(s[ca]ss)$/i,
                    use: getStyleLoaders(),
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        },
                    ],
                },
                {
                    test: /\.(eot|otf|ttf|wof|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        },
                    ],
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            ...getPlugins()
        ]
    };

}
