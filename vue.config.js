module.exports = {
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    });
    config.plugin('html')
      .tap(args => {
        args[0].title = 'Amélie & Nathan';
        return args;
      });
  }
};
