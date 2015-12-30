/*eslint-disable*/
var webpack = require('webpack');
module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js|.jsx$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  output: {
     libraryTarget: "umd",
     library: "D"
   },
};
