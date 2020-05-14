const { getJobsTemplate } = require('./src/home/partials/jobs');
const { Jobs } = require('./src/home/constants/jobs');
const { getTechnologyTemplate } = require('./src/home/partials/technologies');
const { Technologies } = require('./src/home/constants/technologies.const');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

import * as webpack from 'webpack';

const config: (env, argv) => webpack.Configuration = (
  env,
  argv: { mode?: 'production' | 'development' },
) => ({
  entry: {
    index: './src/index.ts',
  },
  mode: argv.mode || 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true,
    hot: true,
    port: 8080,
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: process.env.HOST_PATH || '',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: argv.mode !== 'production',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          publicPath: process.env.HOST_PATH || '/',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: process.env.HOST_PATH || path.resolve(__dirname, 'dist/'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      jobs: getJobsTemplate(Jobs),
      tech: getTechnologyTemplate(Technologies.slice(0, 3)),
    }),
    new ImageminWebpWebpackPlugin(),
    new CopyPlugin([
      { from: 'manifest.json' },
      { from: 'assets/img/favicon/*' },
      { from: 'assets/img/*.webp' },
    ]),
    new WorkboxPlugin.GenerateSW(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
});

module.exports = config;
