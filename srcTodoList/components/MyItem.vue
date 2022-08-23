<template>
    <div>
        <li class="ItemLi">
            <input type="checkbox" :checked="todoObj.isGouX" @change="changeTitle(todoObj.id)">
            <span>{{todoObj.todoTitle}}</span>
            <button class="btn" @click="deleteTitle(todoObj.id)">删除</button>
        </li>
    </div>
</template>
<script>
  export default{
      name:'MyItem',
      props:['todoObj','AppchangeTitle','AppDeleteTitle'],
      methods:{
          changeTitle(id){
              this.AppchangeTitle(id)
          },
          deleteTitle(id){
              this.AppDeleteTitle(id)
          }
      },
      
  }
</script>
<style>
.btn{
    color:white;
    background-color: red;
    display: none;
    float: right;
}
.ItemLi{
    width:300px;
    height:25px;
    border: 1px dashed gray;
}
.ItemLi:hover{
    background-color:gainsboro;
}
.ItemLi:hover button{
    display: block;
}
</style>