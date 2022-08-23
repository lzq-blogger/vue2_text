<template>
    <div>
        <School/>
        <Student/>
    </div>
</template>

<script>
    //汇总组件，进行组件的引入
    import School from './components/School.vue';
    import Student from './components/Student.vue'
    //...

    export default{
        name:"App",
        components:{School,Student},
    }
</script>