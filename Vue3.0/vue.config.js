const { defineConfig } = require('@vue/cli-service')
const packageName = require('./package.json').name
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "127.0.0.1",
    port: 7002, 
    open: true,
   }
})
