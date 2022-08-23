<template>
    <div>
        <Count/>
    </div>
</template>

<script>
    //汇总组件，进行组件的引入
    import Count from './components/Count.vue';
    //...

    export default{
        name:"App",
        components:{Count},
        mounted(){
            console.log(this)
        }
    }
</script>