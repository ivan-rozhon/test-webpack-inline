const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
      filename: 'forms/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackInlinePlugin({
      attribute: 'inline-cam'
    }),
    new HtmlReplaceWebpackPlugin({
      pattern: '@@type',
      replacement: 'type'
    })
  ]
};
