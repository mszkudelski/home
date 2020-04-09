const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => ({
    entry: './src/index.ts',
    mode: argv.mode || 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        watchContentBase: true,
        hot: true,
        port: 8080
    },
    devtool: argv.mode === 'production' ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: argv.mode !== 'production'
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    'url-loader?limit=10000',
                    {
                        loader: 'img-loader',
                        options: {
                            plugins: [
                                require('imagemin-mozjpeg')({
                                    progressive: true,
                                    arithmetic: false
                                }),
                            ]
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Custom template',
        template: 'index.html'
    })]
})
