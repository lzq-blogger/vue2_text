<template>
    <div> 
        <School title="吃饭">
            <!-- 默认 -->
            <!-- <ul>
                <li v-for="(item,index) in chifan" :key="index">{{item}}</li>
            </ul> -->

            <!-- 具名插槽 -->
             <!-- <ul slot="chifan">
                <li v-for="(item,index) in chifan" :key="index">{{item}}</li>
            </ul> -->

            <!-- 作用域插槽 -->
            <template scope="{chifan}">
                <ul>
                    <li v-for="(item,index) in chifan" :key="index">{{item}}</li>
                </ul>
            </template>
        </School>
        <School title="吃饭">
            <!-- 作用域插槽 -->
            <template scope="{chifan}">
                <h4 v-for="(item,index) in chifan" :key="index">{{item}}</h4>
            </template>
        </School>
       <School title="玩游戏">
           <!-- vue2.6的新写法，只能用在template标签和组件中 -->
           <template v-slot:chifan>  
                <img style="width:200px;height:200px;" src="https://cn.bing.com/images/search?q=Tupian&FORM=IQFRBA&id=1C8F66585B854D35E214FEC11B9CE042AC9F177D" alt="">
           </template>
        </School>
    </div>
</template>

<script>
    //汇总组件，进行组件的引入      
    import School from './components/School.vue';
    //...

    export default{
        name:"App",
        components:{School},
        // data(){
        //     return{
        //         chifan:[1,2,3],
        //     }
        // }
    }
</script>