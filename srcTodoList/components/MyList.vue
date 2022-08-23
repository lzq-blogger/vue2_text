<template>
    <div>
        <MyItem v-for="todo in todoList" :key="todo.id"  :todoObj="todo" :AppchangeTitle="AppchangeTitle" :AppDeleteTitle="AppDeleteTitle" />
    </div>
</template>
<script>
  import MyItem from './MyItem.vue'
  export default{
      name:'MyList',
      components:{MyItem},
      props:['todoList','AppchangeTitle','AppDeleteTitle']
  }
</script>