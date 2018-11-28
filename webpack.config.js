const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');

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
      inject: false
    }),
    new HtmlWebpackInlinePlugin({
      attribute: 'inline'
    })
  ]
};
