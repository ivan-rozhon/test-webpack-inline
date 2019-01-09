const TerserPlugin = require('terser-webpack-plugin');

const rules = [
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
];

const optimization = {
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        ecma: 6,
        compress: true,
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ]
};

module.exports = [
  {
    entry: './src/index.js',
    mode: 'production',
    output: {
      path: __dirname + '/dist/temp',
      filename: 'index_bundle.js'
    },
    module: { rules: rules },
    optimization: optimization
  },
  {
    entry: './src/start-form.js',
    mode: 'production',
    output: {
      path: __dirname + '/dist/temp',
      filename: 'start-form_bundle.js'
    },
    module: { rules: rules },
    optimization: optimization
  }
];
