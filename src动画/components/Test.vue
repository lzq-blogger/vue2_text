<template>
    <div>
        <button @click="isShow = !isShow">显示/影藏</button>
        <transition name="hello" appear>
            <div style="background-color:orange;width:300px;height:50px;"  v-show="isShow">
            你好呀
        </div>
        </transition>
    </div>
</template>
<script>
  export default{
      name:'School',
      data(){
          return{
              isShow:true
          }
      }
  }
</script>
<style>
   .hello-enter-active{
       animation: liuzhiqiang 1s;
   }
   .hello-leave-active{
       animation: liuzhiqiang 1s reverse;
   }
   @keyframes liuzhiqiang{
       from{
           transform: translateX(-100%)
       }to{
           transform: translateX(0px)
       }
   }
</style>