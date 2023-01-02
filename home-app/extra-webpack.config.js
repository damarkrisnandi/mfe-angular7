const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  angularWebpackConfig.devServer = {
    https: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}
