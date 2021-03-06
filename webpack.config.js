var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist/assets', //  Where the bundle.js is output
    filename: 'bundle.js',
    publicPath: 'assets',
  },
  devServer: {
    inline: true,
    //  Where the entry html (index.html) resides
    contentBase: './dist',
    port: 3000,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  node: {
    fs: 'empty',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets: ['latest', 'stage-0', 'react'],
        },
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader',
      },
    ],
  },
};
