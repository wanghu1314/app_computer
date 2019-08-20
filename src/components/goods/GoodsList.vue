<template>
    <div class="goods-list">
        <!-- <router-link class="goods-item" v-for="(item,index) in goodslist" :key="index" :to="'/home/goodsinfo/'+item.lid" @click="goDetails(item.lid)"> -->
        <router-link class="goods-item" v-for="(item,index) in goodslist" :key="index" :to="'/home/goodsinfo/'+item.lid">
           <img :src="'http://www.codeboy.com/'+item.pic" alt="">
           <h1 class="title">{{item.title}}</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥{{item.price-500}}</span>
                   <span class="old">￥{{item.price}}</span>
               </p>
               <p class="sell">
                   <span>热卖中11</span>
                   <span>剩余{{item.sold_count}}件</span>
               </p>
           </div>
        </router-link> 
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
 data(){
     return{
         goodslist:[],
         pno:1
         
     }
 },
 created(){
   this.getGoodsList();
 },
 methods:{
     getGoodsList(){
         this.$http.get('http://www.codeboy.com/data/product/list.php?pno='+this.pno).then(result=>{
            //  console.log(result.body)
             if(result.body.status!==0){
                //  this.goodslist=result.body.data;
                 this.goodslist=this.goodslist.concat(result.body.data);
                //  console.log(goodslist)
             }else{
                 Toast('获取新闻列表失败')
             }
         })
     },
     getMore(){
         this.pno++;
         this.getGoodsList();
     },
    //  goDetails(lid){  
    //     this.$router.push("/home/goodsinfo/"+lid) 
    //  }
 }
}
</script>
<style lang="scss" scoped>
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