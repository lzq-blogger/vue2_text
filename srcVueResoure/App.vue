<template>
    <div>
        <button @click="getStudentInfo">获取学生数据</button>
    </div>
</template>

<script>
    //汇总组件，进行组件的引入
    // import Student from './components/Student.vue'

    export default{
        name:"App",
        methods:{
            getStudentInfo(){
                this.$http.get("https://api.github.com/search/users?q=test").then(
                    response=>{
                        console.log(response.data)
                    },
                    error=>{
                        console.log(error.message)
                    }
                )
            }
        }
    }
</script>