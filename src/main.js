// 入口文件
import Vue from 'vue'
// 导入自己的router.js
import router from './router'
Vue.use(VueRouter)
// 导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)
// vuex
import Vuex from "vuex"
Vue.use(Vuex)
var cart=JSON.parse(localStorage.getItem('cart')||'[]')
var store=new Vuex.Store({
    state:{
      cart:cart //购物车商品数据
    },
    mutations:{
     addToCart(state,goodsinfo){
         //点击加入购物车
     var flag=false
     state.cart.some(item=>{
         if(item.lid==goodsinfo.lid){
             item.count+=parseInt(goodsinfo.count)
             flag=true
             return true
         }
     })
     if(!flag){
         state.cart.push(goodsinfo)
     }
     localStorage.setItem('cart',JSON.stringify(state.cart))
     },
     updateGoodsInfo(state,goodsinfo){
         //修改购物车商品的数量
         state.cart.some(item=>{
             if(item.lid==goodsinfo.lid){
                item.count=parseInt(goodsinfo.count) 
                return true
             }
         })
         //当修改完商品的数量，把最新的购物车数据，保存到本地存储中
         localStorage.setItem('cart',JSON.stringify(state.cart))
     },
     removeFormCart(state,lid){
      state.cart.some((item,i)=>{
          if(item.lid==lid){
              state.cart.splice(i,1)
              return true;
          }
      })
      //将删除完毕的数据同步到本地存储
      localStorage.setItem('cart',JSON.stringify(state.cart))
     },
     updateGoodsSelected(state,info){
         state.cart.some(item=>{
             if(item.lid==info.lid){
                 item.selected=info.selected
             }
         })
         //将最新的购物车的数据状态保存到store中
      localStorage.setItem('cart',JSON.stringify(state.cart))
     } 
    },
    getters:{
     getAllCount(state){
         var c=0;
         state.cart.forEach(item=>{
             c+=item.count
         })
         return c
     },
     getGoodsCount(state){
         var o={}
         state.cart.forEach(item=>{
           o[item.lid]=item.count  
         })
         return o;
     },
     getGoodsSelected(state){
         var o={}
         state.cart.forEach(item=>{
             o[item.lid]=item.selected
         })
         return o;
     },
     getGoodsCountAndAmount(state){
      var o={
          count:0, //勾选的数量
          amount:0  //勾选的总价
      }
      state.cart.forEach(item=>{
          if(item.selected){
              o.count+=item.count
              o.amount+=item.price*item.count
          }
      })
      return o;
     }
    }
}); 


// 导入mint-ui
import { Header,Swipe, SwipeItem,Button,Switch,Search } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name,Switch);
Vue.component(Search.name, Search);
// 导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 第三方组件element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 第三方组件Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import'./font/iconfont.css'
Vue.use(VueAwesomeSwiper)

import app from './App.vue'
import VueRouter from 'vue-router';
var vm =new Vue({
    el:'#app',
    render: c => c(app),
    router,//挂载
    store
})