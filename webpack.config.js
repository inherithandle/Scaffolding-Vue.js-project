'use strict'
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const pages = require('./pages')

module.exports = {
  mode: 'development',
  entry: pages,
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([
      { from: 'src/html', to: './html' }
    ]),
  ]
}
