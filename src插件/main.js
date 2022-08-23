//import Vue from 'vue'    //残缺版的vue   不能解析template  需要使用render
//import Vue from 'vue/dist/vue'   //正版的  
import App from './App.vue'

import plugins from './plugins'

Vue.config.productionTip = false

Vue.use(plugins)  //使用插件

new Vue({
  render: h => h(App),
}).$mount('#app')
