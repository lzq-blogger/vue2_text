<template>
    <div>
        <!-- <router-link active-class="active" :to="`/school?id=${12}`">School</router-link><br> -->
        <!-- <router-link active-class="active" :to="{
            path:'/student',
            query:{
                id:12
            }
        }">
        Student</router-link> -->
        <!-- replace  浏览器路径替换，替换前面的一个路径，不可以返回 -->
        

         <router-link replace active-class="active" :to="`/school/${12}`">School</router-link><br>
         <router-link active-class="active" :to="{
            name:'xues',
            param:{
                id:12
            }
        }">
        Student</router-link>

        
        <hr/>

        <!-- 缓存Student组件  include可以自己配置  不写的话就是缓存所有 -->
        <!-- <keep-alive include="Student">
            <router-view></router-view>
        </keep-alive> -->

        <!-- 数组 -->
        <keep-alive :include="['Student','School']">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>


<script>

    export default{
        name:"App",
        methods:{
            replace(){
                //浏览器记录路由替换前面一个
                this.$router.replace({
                })

                //浏览器记录路由叠加
                this.$router.push({
                })

                this.$router.back();  //当前的上次路由

                this.$router.forward();  //当前的下次路由

                this.$router.go(1)  //当前的上（负数）、下（正数）
            }
        }
    }
</script>