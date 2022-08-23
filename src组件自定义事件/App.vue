<template>
    <div>
        <span>11{{name}}</span>
        <!-- 第一种 -->
        <!-- <School @liuzhiqiang="deom"/>  -->
        <!-- 第二种 -->
        <School ref="school" /> 

        <!-- 告诉组件这是原生事件 -->
        <School  @click.native="show"/>
    </div>
</template>

<script>
    //汇总组件，进行组件的引入
    import School from './components/School.vue';
    //...

    export default{
        name:"App",
        components:{School},
        data(){
            return{
                name:""
            }
        },
        methods:{
            deom(value){
                console.log("您触发了App的deom事件"+value);
                this.name=value
            },
            show(){
                console.log(1)
                alert(123)
            }
        },
        mounted(){
            //1  给school绑定liuzhiqiang事件，只能由school实例去触发， this.deom是回调函数
            this.$refs.school.$on('liuzhiqiang',this.deom)
            //2
            this.$refs.school.$on('liuzhiqiang',(value)=>{ this.name=value})
            //3不行
            this.$refs.school.$on('liuzhiqiang',function(value){ this.name=value})
        }
    }
</script>