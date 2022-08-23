const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index:{
      entry:'src路由守卫/main.js'
    }
  },   //配置入口
  
  transpileDependencies: true,
 
  lintOnSave:false, /*关闭语法检查*/
})
