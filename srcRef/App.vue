<template>
    <div>
        <h1 v-text="msg" ref="h1"></h1>

        <School ref="scl" name="刘智强" :age="18"></School> 
        <School ref="scl" name="照子" :age="20"></School> 

        <button @click="btn" ref="btn">获取实例</button>
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
                msg:'刘智强Vue'
            }
        },
        methods:{
            btn(){
                //vue获取标签、组件实例
                // console.log(this.$refs.btn);
                // console.log(this.$refs.h1);
                // console.log(this.$refs.scl);
            }
        }
    }
</script>