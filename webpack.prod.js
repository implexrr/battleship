const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}), new CleanWebpackPlugin(), new HtmlMinimizerPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: 
        [
        MiniCssExtractPlugin.loader,
        'css-loader', 
        'postcss-loader'
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
});