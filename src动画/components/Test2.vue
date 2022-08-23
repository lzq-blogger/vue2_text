<template>
    <div>
        <button @click="isShow = !isShow">显示/影藏</button>
        <!-- transition 里面只能有一个跟元素，如果有多个的话需要用到transtion-group 并且每个根元素需要标识属性key -->
        <transition-group name="hello" appear>
            <div class="dong"  v-show="!isShow" key="1">
             你好呀
            </div>
            <div class="dong"  v-show="isShow" key="2">
             你好呀
            </div>
        </transition-group>
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
    .dong{
        background-color:orange;
        width:300px;
        height:50px;
        /* 也可以 */
        /* transition: 1s reverse; */
    }
    .hello-enter-active,.hello-leave-active{
        transition: 1s reverse;
    }
   .hello-enter,.hello-leave-to{
       transform: translateX(-100%)
   }
   .hello-enter-to,.hello-leave{
       transform: translateX(0px)
   }
   
</style>