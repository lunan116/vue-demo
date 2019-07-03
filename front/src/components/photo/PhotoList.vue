<template>
<div>
    <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a @click="getPhotoList(item.id)" :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cate" :key="item.id" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                    {{item.title}}
                </a>
                
            </div>
        </div>
	</div>
    <ul class="photo-list">
        <router-link tag="li" v-for="item in list" :key="item.index" :to='"/home/photoInfo/"+item.id'>
            <img v-lazy="item.img_url">
            <div class="info">
                <div class="title">{{item.title}}</div>
                <div class="zhaiyao">{{item.zhaiyao}}</div>
            </div>
        </router-link>
    </ul>
</div>
</template>
<script>
import mui from '../../../node_modules/mui/js/mui'


export default {
    data(){
        return {
            cate:[
                {"id":0,title:"全部"},
                {"id":1,title:"军事"},
                {"id":2,title:"家居"},
                {"id":3,title:"热点"},
                {"id":4,title:"房地产"},
                {"id":5,title:"杭州"},
                {"id":6,title:"国际"}
            ],
            list:[]
        }
    },
    methods:{
        getPhotoList(id){
            this.$http.get('http://localhost:3000/getPhotoList?type='+id).then((result)=>{
                this.list = result.body.message;
            })
        }
    },
    created(){
        this.getPhotoList(0)
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>
<style  scoped>
 * { touch-action: pan-y; } 
 img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list{
    background-color: #fff;
    text-align: center;
    list-style: none;
    padding: 0px;
    margin-bottom: 60px;
    margin-top: 5px;
}
.photo-list li{
    margin: 0px 10px;
    margin-bottom: 5px;
    border-radius: 15px;
}
.photo-list li img{ 
    width: 100%;
    box-shadow: 0px 0px 8px #888888;
}
.info{
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position:absolute;
    bottom: 4px;
    padding:8px;
}
.info > .title{
    font-size: 14px;
    color: #fff;
}
.info > .zhaiyao{
    font-size: 13px;
    color: aliceblue;
    text-align: left;
}
.photo-list li{
    position: relative;
}
</style>


