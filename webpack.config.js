var HtmlWebpackPlugin = require('html-webpack-plugin');
var path              = require('path');
module.exports = {
  entry: {
    app: './src/js/index.jsx'
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
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    libraryTarget: "umd",
    library: "[name]"
  },
  externals: {
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ramatrix',
      template: 'src/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: './dist'
  }
}
