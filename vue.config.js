// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
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
