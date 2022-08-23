//import Vue from 'vue'    //残缺版的vue   不能解析template  需要使用render
import Vue from 'vue'   //正版的  

import App from './App.vue'

import vueResource from 'vue-resource'

Vue.use(vueResource)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  //方法一需要
  // beforeCreate(){
  //   Vue.prototype.$bus = this
  // }
})
