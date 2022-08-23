<template>
    <div>
        <!-- <span>我是student{{$route.query.id}}</span> -->
        <span>我是student{{$route.params.id}}</span>
        <input type="text">
    </div>
</template>
<script>

  export default{
      name:'Student',

      //路由组件被激活的时候
      activated(){

      },

      //路由组件被失活的时候
      deactivated(){

      },


      //进入组件时的路由守卫
      beforeRouteEnter(){

      },
       //离开组件时的路由守卫
      beforeRouteLeave(){

      }
  }
</script>