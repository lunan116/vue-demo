<template>
    <div class="comment-container">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入要评论的内容（200字以内）" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,index) in commentsList" :key="index">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.name}}&nbsp;&nbsp;发布时间：{{item.comment_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.comment_content}}
                </div>
            </div>
            
        </div>
        <mt-button type="danger" size="large" plain class="more" @click="getComments()">加载更多</mt-button>
    </div>
    
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            pageNum:0,
            commentsList:[],
            msg:''
        }
    },
    props:['ids','db'],
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            this.pageNum+=1;
            this.$http.get('http://localhost:3000/getComment?id='+this.ids[0]+'&pageNum='+this.pageNum+'&dbs='+this.ids[1]).then((result)=>{
                //console.log(result)
                this.commentsList = this.commentsList.concat(result.body.data);
            })
        },
        postComment(){
            if(this.msg.trim().length == 0){
                Toast('评论内容不能为空！')
            }else{
                var cmt = {
                id:this.ids[0],
                dbs:this.ids[1],
                name:"匿名用户",
                comment_content:this.msg,
                comment_time:Date.now()
                }
                this.$http.post('http://localhost:3000/addComment',cmt).then((result)=>{
                    //console.log(result)
                    if(result.body.status){
                        Toast('评论成功！')
                    }
                })
                this.commentsList.unshift(cmt)

                this.msg = ''
            }
            
        }
    }
}
</script>
<style scoped>
.comment-container{
    text-align: left;
}
.cmt-item{
    font-size:13px;
    line-height: 24px;
}
.cmt-title{
    text-indent: 2em;
    background-color: #ccc;
}
.cmt-body{
    text-indent: 2em;
}
.comment-container>h1{
    font-size: 32px;
}
.cmt-list{
    margin-top: 15px;
    margin-bottom: 15px;
}
.more{
    margin-bottom: 60px;
}
</style>


