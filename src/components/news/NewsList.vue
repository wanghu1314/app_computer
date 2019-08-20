<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.url">
                <router-link :to="'/home/newsinfo/'+item.lid">
                    <img class="mui-media-object mui-pull-left" :src="'http://www.codeboy.com/'+item.pic">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1> 
                        <p class='mui-ellipsis'>
                            <span>价格：{{item.price}}</span>
                        </p>
                    </div>
                    <button class="btn">查看详情</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
 data(){
     return{
         newslist:[]
     }
 },
 created(){
   this.getNewsList();
 },
 methods:{
     getNewsList(){
         this.$http.get('http://www.codeboy.com/data/product/list.php').then(result=>{
            //  console.log(result.body)
             if(result.body.status!==0){
                 this.newslist=result.body.data;
                //  console.log(this.newslist)
             }else{
                 Toast('获取新闻列表失败')
             }
         })
     }
 }
}
</script>
<style lang="scss" scoped>
.mui-table-view>li>a>div>h1{
    font-size: 14px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mui-table-view>li>a>div>p>span{
   font-size: 12px; 
   color:#226aff;
}
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
}
.mui-media-body{
    float: left;
}
.btn{
    background-color: #26a2ff;
}
</style>