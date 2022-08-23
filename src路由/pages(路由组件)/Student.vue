<template>
    <div>
        <!-- <span>我是student{{$route.query.id}}</span> -->
        <span>我是student{{$route.params.id}}</span>
    </div>
</template>
<script>

  export default{
      name:'Student',
      mounted(){
          console.log(this.$route)
      }
  }
</script>