<template>
<div>
    <swiper-box :lubotuList="lubotuList"></swiper-box>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/newsList">
                <img class="icon" src="../../../static/dist/images/menu1.png">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/photoList">
                <img class="icon" src="../../../static/dist/images/menu2.png">
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/shopList">
                <img class="icon" src="../../../static/dist/images/menu3.png">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                <img class="icon" src="../../../static/dist/images/menu4.png">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                <img class="icon" src="../../../static/dist/images/menu5.png">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                <img class="icon" src="../../../static/dist/images/menu6.png">
                <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
</div>
</template>

<script>
import lubotu from '../subcomponents/lunbotu'
export default {
    data(){
        return {
            lubotuList:[]
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get('http://localhost:3000/getLunbo').then(result =>{
                //console.log(result.body);
                this.lubotuList = result.body.data
                //console.log(result.body.data)
            })
        }
    },
    components:{
        "swiper-box":lubotu
    }
}
</script>

<style scoped>

.mui-grid-view.mui-grid-9{
    background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0px;
}

.icon{
    width:60px;
    height:60px;
}
</style>