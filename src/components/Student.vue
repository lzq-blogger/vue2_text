<template>
    <div>
        <h1 id="name">你好{{name}}</h1>
    </div>
    
</template>
<script>
import sss from '../components/sss.vue'
    export default {
        name:"Student",
        components:{sss},
        data(){
            return{
                name:"刘智强"
            }
        }
    }
</script>
<style>
#name{
    color:red;
}
</style>