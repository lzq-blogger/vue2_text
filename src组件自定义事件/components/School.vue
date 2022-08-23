<template>
    <div style="width:300px;height:200px;background-color:Red;">
        <button @click="btnAdd" >点击触发</button>
        <button @click="deleteBtnAdd" >解绑事件</button>
    </div>
</template>
<script>
  export default{
      name:'School',
      data(){
          return{
              msg:'School 组件实例 ',
          }
      },
      methods:{
          btnAdd(){
              this.$emit('liuzhiqiang',this.msg)
          },
          deleteBtnAdd(){
              //解绑单个
              this.$off('liuzhiqiang');
              //解绑多个
            //   this.$off(['liuzhiqiang']);
            //   //解绑所有
            //   this.$off();
          }
      }
  }
</script>