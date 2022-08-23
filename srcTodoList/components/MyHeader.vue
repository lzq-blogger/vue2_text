<template>
    <div>
        <input type="text" v-model="todoTitle" @keyup.enter="enterKey">
    </div>
</template>
<script>
  import {nanoid} from 'nanoid'
  export default{
      name:'MyHeader',
      data(){
          return{
              todoTitle:''
          }
      },
      props:['addTitle'],
      methods:{
          enterKey(){
              const todo = {id:nanoid(),todoTitle:this.todoTitle,isGouX:false}
              this.addTitle(todo)
              this.todoTitle=''
          }
      },
  }
</script>