<template>
    <div class="shopCarContainer">
        <div class="good" v-for="item in goodsList" :key="item.id" @click="goShopInfo(item.id)">
            <div class="goodImg">
                <img :src="item.img_url" alt="">
            </div>
            <div class="goodInfo">
                <div class="title">{{item.title}}</div>
                <div class="goodContent">
                    <div class="goodPrice">
                        <span class="price">￥{{item.price}}</span>
                        <span class="sell">￥{{item.sell}}</span>
                    </div>
                    <div class="number">
                        <span>{{item.status}}</span>
                        <span class="number">剩余{{item.number}}件</span>
                    </div>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain class="more" @click="getGoodsList()">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodsList:[],
            pageNum:0
        }
    },
    methods:{
        getGoodsList(){
            this.pageNum+=1
            this.$http.get('http://localhost:3000/getGoodsList?pageNum='+this.pageNum).then((result)=>{
                this.goodsList = this.goodsList.concat(result.body.message)
            })
        },
        goShopInfo(id){
            this.$router.push({ path: `/home/shopInfo/${id}` })
        }
    },
    created(){
        this.getGoodsList()
    }
}
</script>
<style scoped>
.goodContent{
    border: 1px solid #fff;
    background-color: #ccc;
}
.shopCarContainer{
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
}
.good{
    width:49%; 
    border: 1px solid #ccc;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.goodImg{
    padding: 0px;
    margin: 0px;
    background-color: #fff
}
.goodImg img{
    width: 100%;
}
.title{
    font-size: 16px;
    font-weight: bolder;
    background-color: #fff;
}
.number{
    display: flex;
    justify-content: space-between;
    padding:0px 10px;
    background-color: #ccc;
    font-size: 14px;
}
.goodPrice{
    padding:0px 10px;
    background-color: #ccc;
    text-align: left;
}
.price{
    color: rgb(255, 126, 6);
    font-weight: bold;
    font-size: 18px;
}
.sell{
    font-size: 12px;
    text-decoration: line-through;
}
</style>