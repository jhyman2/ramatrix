var HtmlWebpackPlugin = require('html-webpack-plugin');
var path              = require('path');

module.exports = {
  entry: {
    app: './dev/index.jsx'
  },
  progress: true,
  colors: true,
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.html'],
    fallback: path.join(__dirname, 'node_modules')
  },
  resolveLoader: {
    modulesDirectories: [
      './node_modules'
    ],
    fallback: path.join(__dirname, 'node_modules')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ramatrix',
      template: 'dev/index.html',
      filename: 'index.html'
    })
  ],
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: "umd",
    library: "[name]",
  },
  devServer: {
    contentBase: './dist'
  }
}
