import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcartContainer from './components/tabbar/ShopcartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcart',component:ShopcartContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newsinfo/:lid',component:NewsInfo},
    {path:'/home/goodslist',component:GoodsList},
    {path:'/home/goodsinfo/:lid',component:GoodsInfo}
  ],
  linkActiveClass:'mui-active' //覆盖默认的路由高亮的类
})

// 把路由对象暴露出去
export default router

