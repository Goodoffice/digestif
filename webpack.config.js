var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
})

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, 'assets/javascripts/index.js')
    ]
  },
  devtool: 'source-map',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'stage-0', 'react']
        },
        include: [
          path.join(__dirname, 'assets/javascripts')
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]',
          'postcss'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]',
          'sass',
          'postcss'
        ]
      },


      /* TODO: Create Production Webpack Config
       *
       *
      // The notation here is somewhat confusing.
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader normally turns CSS into JS modules injecting <style>,
      // but unlike in development configuration, we do something different.
      // `ExtractTextPlugin` first applies the "postcss" and "css" loaders
      // (second argument), then grabs the result CSS and puts it into a
      // separate file in our build process. This way we actually ship
      // a single CSS file in production instead of JS code injecting <style>
      // tags. If you use code splitting, however, any async bundles will still
      // use the "style" loader inside the async code so CSS from them won't be
      // in the main CSS file.
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style',
            [
              'css?modules&importLoaders=1&localIdentName=[name]__[local]',
              'postcss'
            ]
        )
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style',
            [
              'css?modules&importLoaders=1&localIdentName=[name]__[local]',
              'sass',
              'postcss'
            ]
        )
      },

      */


    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
    }
  },
}
