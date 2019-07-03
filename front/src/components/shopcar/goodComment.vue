<template>
    <com-box :ids='[id,"goods"]' :db="'goods'"></com-box>
</template>
<script>
import comment from '../subcomponents/comment'
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    methods:{

    },
    components:{
        'com-box':comment
    }
    
}
</script>
<style lang="sass" scoped>

</style>