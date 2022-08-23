import Vue from 'vue'    //残缺版的vue   不能解析template  需要使用render
//import Vue from 'vue/dist/vue'   //正版的  vuex中莫名其妙不可以 
import App from './App.vue'

import vueResource from 'vue-resource'

import store from './store'

Vue.config.productionTip = false
Vue.use(vueResource)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
