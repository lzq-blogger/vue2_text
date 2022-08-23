
//分类一：
export default  {
    namespaced:true,
    //条件逻辑判断处理
    actions :{
        jia(context,value){
            context.commit('JIA',value)
        },
        deom1(value){
            console.log('调用了deom1')
        }
        
    },

    //做具体的一个逻辑处理
    mutations :{
        JIA(state,value){
            state.sum+=value;
        }
    },

    state:{
        sum:0
    },

    //相当于vUe实例中的computed计算属性
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}