<template>
    <div>
        <span style="margin-right:100px;">求和{{sum}}</span>
        <span style="margin-right:100px;">放大十倍{{bigSum1}}</span>
        <select v-model.number="msg">
            <option value="1" selected>1</option>
            <option value="2">2</option>
        </select>
        <button @click="btnAdd(msg)">+</button>
    </div>
</template>
<script>
import {mapGetters,mapState,mapActions,mapMutations} from 'vuex'
  export default{
      name:'School',
      data(){
          return{
              msg:'',
          }
      },
      computed:{
          //第一种方法名不相同的
        //   ...mapState('NumOptions',{sum1:'sum'}),

          //第二种，方法名相同的
            ...mapState('NumOptions',['sum']),


          //第一种方法名不相同的
          ...mapGetters('NumOptions',{bigSum1:'bigSum'}),

          //第二种，方法名相同的
          //   ...mapState('NumOptions',['bigSum'])
      },
      methods:{
        //   btnAdd(){
        //       this.$store.dispatch('NumOptions/jia',this.msg)
        //   }

        ...mapActions('NumOptions',{btnAdd:'jia'})
      }
  }

  
</script>