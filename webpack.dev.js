const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
    watchFiles: ["src/*.html"],
    hot: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: 
        [
        'style-loader',
        'css-loader', 
        'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
});