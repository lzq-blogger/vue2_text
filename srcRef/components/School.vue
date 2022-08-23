<template>
    <div>
        <h1 v-text="msg"></h1>
        <h1 v-text="name"></h1>
        <h1 v-text="myAge"></h1>
        <button @click="btnAdd" >+1</button>
    </div>
</template>
<script>

  export default{
      name:'School',
      data(){
          return{
              msg:'School 组件实例 ',
              myAge:this.age
          }
      },
      methods:{
          btnAdd(){
              this.myAge++
          }
      },
      //简单接收，都以字符串来接收
      //props:['name','age']
      
      //限制类型接收
    //   props:{
    //       name:String,
    //       age:Number
    //   }

      //限制类型接收+默认值+必要性
      //优先级高于data
      props:{
          name:{
              type:String,
              required:true,
              default:'无'
          },
          age:{
              type:Number,
              required:true,
              default:99
          }
      }

  }
</script>