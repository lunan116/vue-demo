<template>
<div>
    <div v-for="item in newsInfo" :key="item.id">
        <h1>{{item.title}}</h1>
        <p class="justifide">
            <span>发表时间：{{item.add_time | dateFormat}}</span>
            <span>点击：{{item.click}}次</span>
        </p>
        <div class="underline"></div>
        <p class="newsInfoContainer">{{item.content}}</p>
    </div>
    <div class="comment">
        <comment-box :ids="[this.id,this.news]" :dbs="this.news"></comment-box>
    </div>
</div>
</template>
<script>
import Comment from '../subcomponents/comment'
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            news:'news',
            id:this.$route.params.id,
            newsInfo:[]
        }
    },
    created(){
        //console.log(this.id)
        this.getNewsInfo(this.id);
        },
    methods:{
        getNewsInfo(ids){
            this.$http.get('http://localhost:3000/getNewsInfo?id='+ids).then((result)=>{
                //console.log(result.body)
                if(result.body.errorCode === 200){
                    this.newsInfo = result.body.data;
                }else{
                    Toast('获取新闻详情失败！')
                }
            })
        }
    },
    components:{
        'comment-box':Comment
    }
}
</script>
<style scoped>
h1{
    color:#ff3c00;
    font-size: 32px;
}
.justifide{
    display: flex;
    justify-content: space-between;
    color:hsl(244, 100%, 50%);
}
.newsInfoContainer{
    text-align: left;
}
.underline{
    height: 1px;
    width: 100%;
    background-color: rgb(66, 65, 65);
    margin-bottom: 6px;
}
</style>


