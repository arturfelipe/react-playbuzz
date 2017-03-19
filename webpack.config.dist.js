'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './src/PlayBuzz.jsx',
  output: {
    publicPath: '/dist/',
    filename: './dist/react-playbuzz.js',
    library: 'ReactPlaybuzz',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  }
};
