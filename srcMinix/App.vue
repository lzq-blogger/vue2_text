<template>
    <div>
        <School></School> 
        <!-- <button @click="btn" ref="btn">获取实例</button> -->
    </div>
</template>

<script>
    //汇总组件，进行组件的引入
    import School from './components/School.vue';
    //...

    export default{
        name:"App",
        components:{School},
    }
</script>