<template>
    <div class="shopcarInfo">
        <transition
               v-on:before-enter="bEnter"
               v-on:enter="enter"
               v-on:after-enter="aEnter">
              <div class="ball" v-if="isball"></div>
          </transition>

            
       

        
        <!-- 商品轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper-box :lubotuList="lubotuList" :isfull="false"></swiper-box>
                </div>
            </div>
        </div>
        <!-- 图片信息 -->
        <div class="mui-card" v-for="item in goodsInfo" :key="item.index">
            <div class="mui-card-header">{{item.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner content-container">
                   <div class="price">
                       市场价：<del>￥{{item.price}}</del>&nbsp;&nbsp;折扣价：<span class="sell">￥{{item.sell}}</span>
                   </div>
                    <div class="number">
                        购买数量：<Number-box @countChange="countChange" :max="goodsInfo[0].number"></Number-box>
                    </div>
                    <div class="button">
                        <mt-button type="primary">立即购买</mt-button>
                        <mt-button type="danger" @click="changeball">加入购物车</mt-button>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 商品详情 -->
        <div class="mui-card" v-for="item in goodsInfo" :key="item.index">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner goodstatus">
                    商品货号：{{item.goodsid}}<br>
                    库存情况：{{item.number}}件<br>
                    上架时间：{{item.add_time | dateFormat}}
                </div>
            </div>
            <div class="mui-card-footer footer">
                <mt-button type="primary" size="large" plain class="buttons" @click="goGoodDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goGoodComment(id)">商品评价</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import lunbotu from '../subcomponents/lunbotu'
import NumberBox from '../subcomponents/numberBox'
export default {
    data(){
        return {
            id:this.$route.params.id,
            lubotuList:[],
            goodsInfo:[],
            isball:false,
            countSelect:1
        }
    },
    methods:{
        getlunbotulist(){
            this.$http.get('http://localhost:3000/getGoodsList?id='+this.id).then(result=>{
                this.lubotuList = result.body.message
                //console.log(result.body.message)
            })
        },
        getgoodsInfo(){
            this.$http.get('http://localhost:3000/getGoodsInfo?id='+this.id).then(result=>{
                this.goodsInfo = result.body.message
                //console.log(result.body.message)
            })
        },
        goGoodDesc(id){
            this.$router.push({name:'goodDesc',params:id})
        },
        goGoodComment(id){
            this.$router.push({name:'goodComment',params:id})
        },
        changeball(){
            this.isball = !this.isball;
            //console.log(this.goodsInfo[0].sell)
            var goodInfo = {
                id:this.id,
                count:this.countSelect,
                price:this.goodsInfo[0].price,
                sell:this.goodsInfo[0].sell,
                img_src:this.goodsInfo[0].img_url,
                title:this.goodsInfo[0].title,
                number:this.goodsInfo[0].number,
                isSelect:true
            }
            this.$store.commit("addToCar",goodInfo)
            //console.log(this.$store)
        },
        bEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            el.offsetTop;
            el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
            el.style.transform = "translate(93px,230px)";
            el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
            done();
        },
        aEnter(){
            this.isball = !this.isball;
        },
        countChange(count){
            this.countSelect = count;
            //console.log("父组件拿到的值为"+count)
        }
    },
    created(){
        this.getlunbotulist(),
        this.getgoodsInfo()
    },
    components:{
        "swiper-box":lunbotu,
        "Number-box":NumberBox
    }
}
</script>
<style scoped>
.content-container{
    text-align: left
}
.price{
    line-height: 30px;
}
.number{
    line-height: 30px;
}
.sell{
    color:red;
    font-weight: bold;
}
.button{
    margin-top: 10px;
}
.shopcarInfo{
    margin-bottom: 50px;
}
.footer{
    display: block;
}
.buttons{
    margin-bottom: 10px;
}
.goodstatus{
    text-align: left;
}
.ball{
    width:20px;
    height: 20px;
    background-color: red;
    position: absolute;
    z-index: 10000;
    border-radius: 50%;
    left: 145px;
    top: 386px;
}

</style>
