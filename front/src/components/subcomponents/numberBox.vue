<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../../node_modules/mui/js/mui'

export default {
    mounted(){
        mui(".mui-numbox").numbox();
        //mui(".mui-numbox").numbox().setOption('max',20)
        //console.log(this.max)
        mui(".mui-numbox").numbox().setOption('max',this.max)
    },
    methods:{
        countChanged(){
            //console.log(this.$refs.numbox.value)
            this.$emit("countChange",parseInt(this.$refs.numbox.value))
            
        }
    },
    props:["max"],
    watch:{
        max:function(newVal){
            //console.log(newVal)
            mui(".mui-numbox").numbox().setOption('max',newVal)
        }
    }
}
</script>
<style scoped>

</style>