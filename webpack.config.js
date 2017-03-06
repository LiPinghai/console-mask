var webpack = require('webpack');
var es3ifyPlugin = require('es3ify-webpack-plugin');
var isProd = process.env.NODE_ENV === 'production';

var config = {
  entry: {
    'console-mask': './console-mask.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].min.js",
    library: 'console-mask',
    libraryTarget: 'umd',
    umdNameDefine: true
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: [
            'stage-3', ['es2015', { loose: true }]
          ]
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     screw_ie8: false, // default关键字问题
    //     warnings: false
    //   }
    // }),
    new es3ifyPlugin()
  ]
}

module.exports = config;