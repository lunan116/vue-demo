import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/homeContainer'
import MemberContainer from '../components/tabbar/memberContainer'
import ShopcarContainer from '../components/tabbar/shopcarContainer'
import SearchContainer from '../components/tabbar/searchContainer'
import NewsList from '../components/news/newsList'
import NewsInfo from '../components/news/newsInfo'
import PhotoList from '../components/photo/PhotoList'
import PhotoInfo from '../components/photo/photoInfo'
import shopList from '../components/shopcar/shopList'
import shopInfo from '../components/shopcar/shopcarInfo'
import goodDesc from '../components/shopcar/goodDesc'
import goodComment from '../components/shopcar/goodComment'
Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newsList',component:NewsList},
        {path:'/home/newsInfo/:id',component:NewsInfo},
        {path:'/home/photoList',component:PhotoList},
        {path:'/home/photoInfo/:id',component:PhotoInfo},
        {path:'/home/shopList',component:shopList},
        {path:'/home/shopInfo/:id',component:shopInfo},
        {path:'/home/goodComment/:id',component:goodComment,name:'goodComment'},
        {path:'/home/goodDesc/:id',component:goodDesc,name:'goodDesc'},
    ],
    linkActiveClass:'mui-active'
})