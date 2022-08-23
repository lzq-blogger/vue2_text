<template>
    <div>
        <h1 class="demo">{{msg}}</h1>
    </div>
</template>
<script>
  export default{
      name:'School',
      data(){
          return{
              msg:'School 组件实例 ', 
          }
      }
  }
</script>
<!-- scoped的作用的是仅限于当前组件使用 -->
<style scoped>
  .demo{
      color:red
  }
</style>