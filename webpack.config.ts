const { getJobsTemplate } = require('./src/partials/jobs');
const { Jobs } = require('./src/constants/jobs');
const { getTechnologyTemplate } = require('./src/partials/technologies');
const { Technologies } = require('./src/constants/technologies.const');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

import * as webpack from 'webpack';

const config: (env, argv) => webpack.Configuration = (
  env,
  argv: { mode?: 'production' | 'development' },
) => ({
  entry: './src/index.ts',
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
          'style-loader',
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: process.env.HOST_PATH || path.resolve(__dirname, 'dist/'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      jobs: getJobsTemplate(Jobs),
      tech: getTechnologyTemplate(Technologies),
    }),
    new ImageminWebpWebpackPlugin(),
    new CopyPlugin([{ from: 'manifest.json' }, { from: 'assets/img/**/*' }]),
    new WorkboxPlugin.GenerateSW(),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});

module.exports = config;
