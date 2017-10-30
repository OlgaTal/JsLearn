module.exports = {
  devtool: 'source-map',
  entry: [
    './dst/comp/BeerlistContainer',
  ],
  output: {
    path: './static/code',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
