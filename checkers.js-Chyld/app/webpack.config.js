module.exports = {
  entry: [
    './client/index',
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
      query: {
          presets: ['es2015', 'react', 'stage-0']
        }
    }],
  },
};
