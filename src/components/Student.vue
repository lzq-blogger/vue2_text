<template>
    <div>
        <h1 id="name">你好{{name}}</h1>
    </div>
</template>
<script>
    export default {
        name:"Student",
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