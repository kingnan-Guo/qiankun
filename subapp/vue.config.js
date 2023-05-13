const { defineConfig } = require('@vue/cli-service')

const packageName = require('./package.json').name
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: 'http://localhost:7200',
  configureWebpack: {
    // 必须打包出一个 库文件 格式为 umd
    output:{
      // 指定打包后全局变量名称
      library: `subapp`,
      libraryTarget: 'umd',
      // 如果使用jsonp形式 加载子应用的资源  jsonp的回调函数 的名称
      // jsonpFunction: `webpack_jsonp_${packageName}`
    },
  },
  devServer: {
    host: "127.0.0.1",
    port: 7200, 
    open: true,
    headers:{
      // 允许 cors 跨域
      'Access-Control-Allow-Origin': '*'
    }
   }
})
