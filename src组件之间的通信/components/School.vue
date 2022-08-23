<template>
    <div>
        <span>school中 的 {{StudentName}}</span>
    </div>
</template>
<script>
import pubSub from 'pubsub-js'
  export default{
      name:'School',
      data(){
          return{
              StudentName:'',
          }
      },
      methods:{
          dingyue(msgName,value){
              this.StudentName = value
          }
      },
      mounted(){
          //方法一
        // this.$bus.$on("sendStudentName",(value)=>{
        //     this.StudentName = value
        // });

        // 方法二
        this.pubId = pubSub.subscribe('hello',this.dingyue)
      },
      beforeDestroy(){
          pubSub.unsubscribe(this.pubId)
      }
  }
</script>