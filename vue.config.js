module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          // 最多使用v1.3.2版本, 再高会报错
          test: /\.html$/i,
          exclude: /node_modeules/,
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      ]
    }
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/recommend',
        '/artists',
        '/rank',
        '/search',
        '/account',
        '/listDetail'
      ],

      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
