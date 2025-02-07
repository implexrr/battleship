const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { 
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
   plugins: [
    new HtmlWebpackPlugin({template: "./src/template.html"})
  ],
  module: {
    rules: [
      {      
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext][query]'
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};