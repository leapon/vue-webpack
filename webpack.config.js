var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    hello: ['./src/hello.js'],
    build: ['./src/main.js'],
    explorer: ['./src/explorer.js'],
    directive: ['./src/directive.js'],
    plot: ['./src/plot.js'],
    table: ['./src/table.js'],
    component2: ['./src/component2.js'],
    component3: ['./src/component3.js'],
    usermanager: ['./src/usermanager.js'],
    plotmanager: ['./src/plotmanager.js'],
    mint_ui: ['./src/mint_ui.js'],
    vuestrap: ['./src/vuestrap.js'],
    smartsheet: ['./src/smartsheet.js'],
    smartform: ['./src/smartform.js']
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // UglifyJS doesnot work with ES6 yet, need to transpile from ES6 to ES5
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
