<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src=item.img_url>
						<div class="mui-media-body">
                            <p class="news-title" v-text=item.title></p>
							<p class='mui-ellipsis'>
                                <span>{{item.add_time | dateFormat}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('http://localhost:3000/getnewsList').then((result)=>{
                if(result.body.status === 1){
                //console.log(result)
                this.newsList = result.body.message;
                //console.log(this.newsList)
                }else{
                    Toast("请求失败")
                }
                
            })
        }
    }
}
</script>
<style scoped>
.news-title{
    text-align: left;
    font-size: 14px;
    color: black;
}
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
    color: aqua;
}
</style>