<template>
    <div class="cartContainer">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-for="item in goodsInfo" :key="item.index">
                    <mt-switch v-model="item.isSelect" @change="changeChoose([item.isSelect,item.id])"></mt-switch>
                    <div class="img">
                    <img :src="item.img_src">
                    </div>
                    <div class="info">
                        <div class="title">{{item.title}}</div>
                        <div class="price">
                            ￥{{item.price}}
                            <num-box @countChange="countChange" :max="[item.number,item.count]" :id="item.id"></num-box>
                            <span class="delete" @click="deleteFormcart(item.id)">
                                删除
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner hhh">
                   <div class="left">
                       <p>总计（不含运费）</p>
                       <p>已勾选<span class="red">{{this.$store.getters.getAll[1]}}</span>件，总价￥<span class="red">{{this.$store.getters.getAll[0]}}</span></p>
                   </div>
                   <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../subcomponents/numberbox-cart'
export default {
    data(){
        return {
            goodsInfo:this.$store.state.car,
            isSelect:true
        }
    },
    methods:{
        countChange(){
            //this.countSelect = count;
            //console.log("父组件拿到的值为"+count)
        },
        deleteFormcart(id){
            this.$store.commit("deleteFromcart",id)
        },
        changeChoose(a){
            //console.log(a)
            this.$store.commit("changeChoose",a)
            
        }
    },
    components:{
        'num-box':numbox
    }

    
}
</script>
<style scoped>
.red{
    color: red;
}
.hhh{
    display: flex;
    justify-content: space-between;
}
.mui-card-content-inner {
    display: flex;
    align-items: center;
}
.mui-card-content-inner .img{
width:60px;
height: 60px;
}

.img img{
    width: 100%;
}
.info{
    text-align: center;
}
.title{
    font-size: 16px;
    font-weight: bold;
}
.price{
    color: red
}
.delete{
    color: aqua
}

               
</style>