const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

const minifyOptions = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
};

const htmlWebpackInline = new HtmlWebpackInlinePlugin({
  attribute: 'inline-cam'
});
const htmlReplaceWebpack = new HtmlReplaceWebpackPlugin({
  pattern: '@@type',
  replacement: 'type'
});

module.exports = [
  {
    entry: './src/index.js',
    mode: 'production',
    output: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: false,
        filename: '../forms/index.html',
        minify: minifyOptions
      }),
      htmlWebpackInline,
      htmlReplaceWebpack
    ]
  },
  {
    entry: './src/start-form.js',
    mode: 'production',
    output: {
      path: __dirname + '/dist',
      filename: 'start-form_bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/start-form.html',
        inject: false,
        filename: '../forms/start-form.html',
        minify: minifyOptions
      }),
      htmlWebpackInline,
      htmlReplaceWebpack
    ]
  }
];
