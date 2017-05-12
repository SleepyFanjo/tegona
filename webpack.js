export default (webpackConfig) => {
  // Insert a new sass and css loader before the default.
  webpackConfig.module.rules = [{
    test: /\.scss$/,
    use: [{
      loader: 'style-loader' // creates style nodes from JS strings
    }, {
      loader: 'css-loader'// translates CSS into CommonJS
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  }]

  return webpackConfig
}
