
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//条件逻辑判断处理
const actions = {
    jia(context,value){
        context.commit('JIA',value)
        //调方法
        context.deom1(value);
    },
    deom1(value){

    }
    
}

//做具体的一个逻辑处理
const mutations = {
    JIA(state,value){
        state.sum+=value;
    }
}

const state = {
    sum:0
}

//相当于vUe实例中的computed计算属性
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})