<template>
    <div>
        <!-- <span>我是school{{$route.query.id}}</span> -->

        <!-- <span>我是school{{$route.params.id}}</span> -->
        
        <router-link active-class="active" to="/School/Msg">第一栏</router-link><br>
        <router-link active-class="active" to="/School/New">第二栏</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

  export default{
      name:'School',
  }
</script>