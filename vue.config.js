/*
    @Time    : 2019/3/4 09:48
    @Author  : wangzhaoguang
    @Email   : wangzhaoguang@hlchang.com
    @File    : vue.config.js
    @Software: webstrom
    @license : 娱网科道信息技术有限公司 copyright  2016-2019 */
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 图片压缩
const ImageminPlugin = require('imagemin-webpack-plugin').default
// webpack中使用UglifyJS压缩代码时，出现如下错误：使用的这个插件// 清除打包后的console.log
const TerserPlugin = require('terser-webpack-plugin')
const resolve = dir => {
  return path.join(__dirname, dir)
}
// cdn预加载使用
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'iview': 'iview',
  'js-cookie': 'Cookies',
  'nprogress': 'NProgress'
}
const cdn = {
  // 开发环境
  dev: {
    css: [
      'https://cdn.bootcss.com/iview/3.2.2/styles/iview.css',
      'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
    ],
    js: []
  },
  // 生产环境
  build: {
    css: [
      'https://cdn.bootcss.com/iview/3.2.2/styles/iview.css',
      'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
    ],
    js: [
      'https://cdn.bootcss.com/vue/2.6.6/vue.min.js',
      'https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js',
      'https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js',
      'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
      'https://cdn.bootcss.com/iview/3.2.2/iview.min.js',
      'https://cdn.bootcss.com/js-cookie/2.2.0/js.cookie.min.js',
      'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js'
    ]
  }
}
// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']
// 项目部署基础
module.exports = {
  publicPath: './',
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })
  },
  configureWebpack: config => {
    const myConfig = {}

    // 生产环境的配置
    if (process.env.NODE_ENV === 'production') {
      // 1. 生产环境npm包转CDN
      myConfig.externals = externals

      myConfig.plugins = []
      // 2. 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
      productionGzip && myConfig.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 8192,
          minRatio: 0.8
        })
      )
      // 图片压缩
      myConfig.plugins.push(
        new ImageminPlugin({
          disable: process.env.NODE_ENV !== 'production', // Disable during development
          pngquant: {
            quality: '95-100'
          }
        })
      )
      // 添加清除的console.log输出
      myConfig.plugins.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true, // console
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        }))
    }
    // 开发环境的配置
    if (process.env.NODE_ENV === 'development') {
      /**
             * 关闭host check，方便使用ngrok之类的内网转发工具
             */
      myConfig.devServer = {
        disableHostCheck: true
      }
    }
    return myConfig
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false

}
