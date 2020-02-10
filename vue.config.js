module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  },
  devServer: {
    port: 9080,
    host: 'localhost',
    open: true,
    proxy: {
      '/api': {
        target: 'http://83.249.172.60/mock/186/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
