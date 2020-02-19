module.exports = {
  chainWebpack: config => {
    config.module
      .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
          .loader('px2rem-loader')
          .options({
            remUnit: 75
          })
  },
  devServer: {
    port: 9080,
    host: 'localhost',
    open: true,
    proxy: {
      '/api': {
        target: 'http://39.99.188.76:3000/mock/17/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
