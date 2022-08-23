<template>
    <div>
        <h1 v-text="msg"></h1>
        <h1 v-text="name"></h1>
        <h1 v-text="myAge"></h1>
        <button @click="btnAdd" >+1</button>
    </div>
</template>
<script>
  import {mixin} from './mixin'

  export default{
      name:'School',
      data(){
          return{
              msg:'School 组件实例 ',
          }
      },
      mixins:[mixin]
  }
</script>