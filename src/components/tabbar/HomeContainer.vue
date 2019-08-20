<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
           <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
               <img :src="'http://www.codeboy.com/'+item.img" alt="" class="lunbo"/>
           </mt-swipe-item>
        </mt-swipe>
        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
        <!-- 一楼 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <img src="../../images/computer_icon.png" alt="" style="width:25px;margin-right:5px;">
                <h4>首页推荐 / 1F</h4> 
            </li>
        </ul>
        <div class="goods-list">
            <router-link class="goods-item" v-for="(item,index) in newArrivalItems" :key="index" :to="'/home/goodsinfo/'+item.pid">
            <img :src="'http://www.codeboy.com/'+item.pic" alt="">
            <h1 class="title">{{item.details}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.price-500}}</span>
                    <span class="old">￥{{item.price}}</span>
                </p>
                <p class="sell">
                    <mt-button type="primary">查看详情</mt-button>
                </p>
            </div>
            </router-link> 
        </div>
        <!-- 二楼 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <img src="../../images/computer_icon.png" alt="" style="width:25px;margin-right:5px;">
                <h4>首页推荐 / 2F</h4> 
            </li>
        </ul>
        <div class="goods-list">
            <router-link class="goods-item" v-for="(item,index) in topSaleItems" :key="index" :to="'/home/goodsinfo/'+item.pid">
            <img :src="'http://www.codeboy.com/'+item.pic" alt="">
            <h1 class="title">{{item.details}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.price-500}}</span>
                    <span class="old">￥{{item.price}}</span>
                </p>
                <p class="sell">
                    <mt-button type="primary">查看详情</mt-button>
                </p>
            </div>
            </router-link> 
        </div>
        <!-- 三楼 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <img src="../../images/computer_icon.png" alt="" style="width:25px;margin-right:5px;">
                <h4>首页推荐 / 3F</h4> 
            </li>
        </ul>
        <div class="goods-list">
            <router-link class="goods-item" v-for="(item,index) in recommendedItems" :key="index" :to="'/home/goodsinfo/'+item.pid">
            <img :src="'http://www.codeboy.com/'+item.pic" alt="">
            <h1 class="title">{{item.details}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.price-500}}</span>
                    <span class="old">￥{{item.price}}</span>
                </p>
                <p class="sell">
                    <mt-button type="primary">查看详情</mt-button>
                </p>
            </div>
            </router-link> 
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
 data(){
     return{
         lunbotuList:[],
         newArrivalItems:[],
         topSaleItems:[],
         recommendedItems:[]
     }
 },
 created(){
   this.getLunbotu();
//    this.getNewArrivalItems();
 },
 methods:{
     getLunbotu(){
         //轮播图
        var  url='http://www.codeboy.com/data/product/index.php';
         this.$http.get(url).then(result=>{
            //  console.log(result.body);
            if(result.body.status!==0){
                this.lunbotuList=result.body.carouselItems;
                this.newArrivalItems=result.body.newArrivalItems;
                this.topSaleItems=result.body.topSaleItems;
                this.recommendedItems=result.body.recommendedItems;
                // console.log(this.newArrivalItems)
            }else{
                Toast("加载轮播图失败..")
            }
         })
     },
 }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item{
    background-color: lightblue;
}
.lunbo{
    width:100%;
    height:100%;
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:none;
   
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
}
 .mui-grid-view.mui-grid-9 img{
        width: 60px;
        height: 60px;
    }
.mui-media-body{
   font-size:13px !important; 
}
.mui-table-view-cell{
     display: flex;
    // justify-content: space-between;
    align-items: center;
}

.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
}
.goods-item{
    width: 49%;
    border:1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px; 
}
.goods-item>img{
    width: 100%;
}
.title{
   font-size: 14px; 
   color: #000;
}
.info{
  background-color: #eee;  
}
p{
margin: 0;
padding: 5px;
}

.now{
    color:red;
    font-weight: bold;
    font-size:16px;
}
.old{
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;  
}
.sell{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
</style>