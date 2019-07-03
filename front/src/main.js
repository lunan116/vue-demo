import Vue from 'vue'
import router from './router/index'
import {Button,Cell,Header,Swipe,SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/dist/css/mui.css'
import '../static/dist/css/icons-extra.css'
import App from './App.vue'
import { Tabbar, TabItem ,Lazyload ,Switch} from 'mint-ui';
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'
// defalut install
Vue.use(VuePreview)
Vue.use(Vuex)


Vue.config.productionTip = false

//注册mint-ui组件
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Switch.name, Switch);
Vue.use(Lazyload);
Vue.use(VueResource)

//设置全局过滤器
Vue.filter('dateFormat',(datastr,pattern="YYYY-MM-DD HH:mm:ss")=>{
    return moment(datastr).format(pattern)
})

var store = new Vuex.Store({
  state:{
    car:JSON.parse(localStorage.getItem("car"))||[]
  },
  mutations:{
    addToCar:function(state,goodsInfo){
      var flag = false
      state.car.some(item=>{
        if(item.id == goodsInfo.id){
          item.count += goodsInfo.count;
          flag = true
        }
      })
      if(!flag){
        state.car.push(goodsInfo)
      }
      //console.log(state.car)
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    deleteFromcart:function(state,id){
      var index = state.car.some((item,index)=>{
        if(item.id == id){
          return index
        }
      })
      state.car.splice(index,1)
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    updateCart:function(state,goodInfo){
      state.car.some(item=>{
        if(item.id == goodInfo.id){
          item.count = parseInt(goodInfo.count);
          return true
        }
      })
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    changeChoose(state,a){
       state.car.some((item)=>{
         if(item.id == a[1]){
          //console.log(a[0])
          //console.log(item.isSelect)
          item.isSelect = a[0];
          return true
        }
      })
      localStorage.setItem("car",JSON.stringify(state.car))
    }
  },
  getters:{
    getAllCount(state){
      var c = 0;
      state.car.forEach(item=>{
        c += item.count
      })
      return c
    },
    getAll(state){
      var jiage = 0;
      var number = 0
      state.car.forEach(item=>{
        if(item.isSelect == true){
          jiage += item.count * item.price;
          number += item.count;
        }
      })
      return [jiage,number]
    }
  }
})





new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
