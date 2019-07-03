<template>
    <div>
        <button  @click='flag1 = !flag1'>+</button>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">

        <div class="ball" v-show='flag1'>

        </div>
    </transition>

    </div>
</template>
<script>

export default {
    data(){
        return {
            isball:false,
            flag1: false,
            flag2:true
        }
    },
    methods:{
        beforeEnter(el) {
                    //动画之前
                    //console.log(1)
                    this.flag2 = !this.flag2;
                    el.style.transform = 'translate(0,0)';
                    //console.log(2)
                    
                },
                enter(el, done) {
                    //表示动画开始之后的样式
                    el.offsetWidth; //此句代码没有实际作用  但是没有过渡效果
                    el.style.transform = 'translate(150px,200px)';
                    el.style.transition = 'all 1s ease'
                    
                        //done其实就是afterenter函数的引用，动画完成
                    done();
                },
                afterEnter() {
                    this.flag1 = !this.flag1;
                    
                    

                }
    },
    watch:{
        flag2:function(){
            document.querySelector(".ball").style.transform = 'translate(0,0)';
        }
    }

}
</script>
<style scoped>

 .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: skyblue;
            position: absolute !important;
            left: 145px;
            top: 386px;
            transform: translate(0,0)
        }
        .ball v-enter-to{
            transform: translate(0,0) !important;
        }

</style>