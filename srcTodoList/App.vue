<template>
    <div>
        <MyHeader :addTitle="addTitle"/>
        <MyList :todoList="todoList" :AppchangeTitle="AppchangeTitle" :AppDeleteTitle="AppDeleteTitle"/>
        <MyFooter :todoList="todoList" :AppGouAll="AppGouAll" :AppDeleteAll="AppDeleteAll"/>
    </div>
</template>

<script>
    //汇总组件，进行组件的引入
    import {nanoid} from 'nanoid'
    import MyHeader from './components/MyHeader.vue';
    import MyFooter from './components/MyFooter.vue';
    import MyList from './components/MyList.vue';
    //...

    export default{
        name:"App",
        components:{MyHeader,MyList,MyFooter},
        data(){
          return{
              todoList:[
                  {id:'001',todoTitle:'吃饭',isGouX:true},
                  {id:'002',todoTitle:'睡觉',isGouX:false},
                  {id:'003',todoTitle:'玩游戏',isGouX:true}
              ],

          }
        },
        methods:{
            addTitle(x){
                this.todoList.unshift(x)
            },
            AppchangeTitle(id){
                this.todoList.forEach((todo)=>{
                    if (todo.id===id) todo.isGouX=!todo.isGouX
                })
            },
            AppDeleteTitle(id){
               this.todoList= this.todoList.filter(p=>p.id!==id)
            },
            AppGouAll(isGouX){
                this.todoList.forEach((todo)=>{
                    todo.isGouX=isGouX
                })
            },
            AppDeleteAll(){
                this.todoList=this.todoList.filter(p=>!p.isGouX)
            }
        }
    }
</script>