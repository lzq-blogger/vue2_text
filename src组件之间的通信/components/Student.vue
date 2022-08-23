<template>
    <div>
        <button @click="btnAdd" >点击触发</button>
    </div>
</template>
<script>

  import pubSub from 'pubsub-js'
  export default{
      name:'Student',
      data(){
          return{
              msg:'Student 组件实例 ',
          }
      },
      methods:{
          btnAdd(){
            //   方法一
            //    this.$bus.$emit('sendStudentName',this.msg)

            // 方法二 需要安装第三方库npm i pubsub-js
            pubSub.publish('hello',this.msg)
          }
      }
  }
</script>