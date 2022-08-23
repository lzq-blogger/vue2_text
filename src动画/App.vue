<template>
    <div>
       <Test/>
       <Test2/>
       <TestThree/>
    </div>
</template>

<script>
    //汇总组件，进行组件的引入
    import Test from './components/Test.vue'; 
    import Test2 from './components/Test2.vue';
    import TestThree from './components/TestThree.vue';
    //...

    export default{
        name:"App",
        components:{Test,Test2,TestThree},
    }
</script>