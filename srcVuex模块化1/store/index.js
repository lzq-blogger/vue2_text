
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import NumOptions from './count'


export default new Vuex.Store({
    modules:{
        NumOptions
    }
})