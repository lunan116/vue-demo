<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='this.max[0]'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input readonly id="test" class="mui-input-numbox" type="number" :value="this.max[1]" @change="countChanged" ref="numbox"/>
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
        //mui(".mui-numbox").numbox().setOption('max',this.max[0])
    },
    methods:{
        countChanged(){
            //console.log(this.$refs.numbox.value)
            this.$emit("countChange",parseInt(this.$refs.numbox.value))
            this.$store.commit("updateCart",{id:this.id,count:this.$refs.numbox.value})
        }
    },
    props:["max","id"],
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