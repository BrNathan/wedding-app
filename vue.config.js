// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const hashSalt = Date.now();

module.exports = {
  configureWebpack: {
    output: {
      hashSalt: hashSalt.toString()
    }
  },
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    });
    config.plugin('html')
      .tap(args => {
        args[0].title = 'Mariage Amélie & Nathan';
        return args;
      });
  // config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
  }
};
