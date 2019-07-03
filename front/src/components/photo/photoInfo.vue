<template>
    <div>
        <div class="photoInfocontainer" v-for="item in photoInfo" :key="item.index">
            <h3>{{item.title}}</h3>
            <p class="subtitle">
                <span>发表时间:{{item.add_time | dateFormat}}</span>
                <span>点击次数:{{item.click}}次</span>
            </p>
            <hr>
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
            <div class="content">{{item.content}}</div>
        </div>
        <cmt-box :ids="[this.id,this.photolists]" :dbs="this.photolists"></cmt-box>
    </div>
</template>
<script>
import comment from '../subcomponents/comment'
export default {
    data(){
        return {
            photolists:'photolists',
            id:this.$route.params.id,
            photoInfo:[],
            slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 300,
            h: 200
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 300,
            h: 200
          }
        ]
        }
    },
    methods:{
        handleClose () {
        //console.log('close event')
        },
        getPhotoInfo(){
            this.$http.get('http://localhost:3000/getPhotoList?id='+this.id).then((result)=>{
                this.photoInfo = result.body.message;
            })
        }
    },
    created(){
        this.getPhotoInfo()
    },
    components:{
        'cmt-box':comment
    }
}
</script>
<style scoped>
.subtitle{
    display: flex;
    justify-content: space-between;
}
.photoInfocontainer{
    padding:5px;
}
h3{
    color: aqua;
}
.content{
    text-align: center;
    font-size: 16px;
    color: dimgray;
    line-height: 24px;
}
</style>