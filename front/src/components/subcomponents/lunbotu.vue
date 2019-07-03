<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lubotuList" :key="item.index">
            <img :src=item.img :class="{full:isfull}">
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:['lubotuList','isfull']
    
}
</script>
<style scoped>
.mint-swipe{
    height:200px;
}


.mint-swipe-item > img{
    
    height:100%;
}
.full{
    width: 100%;
}
</style>