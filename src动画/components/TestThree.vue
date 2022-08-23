<template>
    <div>
        <button @click="isShow = !isShow">显示/影藏</button>
        <transition 
            name="animate__animated animate__bounce" 
            enter-active-class="animate__backInUp"
            leave-active-class="animate__backOutDown"
            appear
        >
            <div style="background-color:orange;width:300px;height:50px;"  v-show="isShow">
            你好呀
        </div>
        </transition>
    </div>
</template>
<script>
import 'animate.css'
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
  
</style>