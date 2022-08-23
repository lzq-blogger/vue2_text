<template>
    <div class="footer" v-show="isShow">
        <input type="checkbox" v-model="isAll" >
        <span>选中{{isGouXTotle}} /</span>
        <span>{{todoList.length}}总共</span>&nbsp;&nbsp;
        <button @click="deleteAll">删除选中</button>
    </div>
</template> 
<script>
  export default{
      name:'MyFooter',
      props:['todoList','AppGouAll','AppDeleteAll'],
      data(){
          return{

          }
      },
      methods:{
          deleteAll(){
              this.AppDeleteAll()
          }
      }, 
      computed:{
          isShow(){
              return this.todoList.length>0
          },
          isGouXTotle(){
              return this.todoList.reduce((pre,cur)=>pre+(cur.isGouX?1:0),0)
          },
          isAll:{
              get(){
                  this.todoList.length===this.isGouXTotle&&this.todoList.length>0
              },
              set(value){
                 this.AppGouAll(value)
              }
          }
      }
  }
</script>
<style>
.footer{
    width:300px;
    height:30px;
    border: 1px dashed gray;
}
</style>