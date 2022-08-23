<template>
    <div>
        <Student></Student> 
    </div>
</template>

<script>
    //汇总组件，进行组件的引入
    import Student from './components/Student.vue';
    //...

    export default{
        name:"App",
        components:{
            Student
        }
    }
</script>