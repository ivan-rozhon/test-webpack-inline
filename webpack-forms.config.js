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
  attribute: 'inline-cam',
  compress: false // otherwise fails on 'uglify-js' that is used in 'inline-source'
});
const htmlReplaceWebpack = new HtmlReplaceWebpackPlugin({
  pattern: '@@type',
  replacement: 'type'
});

module.exports = [
  {
    entry: './dist/temp/index_bundle.js',
    mode: 'production',
    output: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: false,
        filename: '../dist/forms/index.html',
        minify: minifyOptions
      }),
      htmlWebpackInline,
      htmlReplaceWebpack
    ]
  },
  {
    entry: './dist/temp/start-form_bundle.js',
    mode: 'production',
    output: {
      path: __dirname + '/dist',
      filename: 'start-form_bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/start-form.html',
        inject: false,
        filename: '../dist/forms/start-form.html',
        minify: minifyOptions
      }),
      htmlWebpackInline,
      htmlReplaceWebpack
    ]
  }
];
