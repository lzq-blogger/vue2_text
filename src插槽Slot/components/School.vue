<template>
    <div>
       <h3>{{title}}</h3>
       <!-- 默认插槽 -->
       <!-- <slot></slot> -->

       <!-- 具名插槽 -->
       <!-- <slot name="chifan"></slot> -->

      <!-- 具名插槽 -->
      <slot :chifan="chifan"></slot>
    </div>
</template>
<script>

  export default{
      name:'School',
      props:['title'],
      data(){
            return{
                chifan:[1,2,3],
            }
        }
  }
</script>