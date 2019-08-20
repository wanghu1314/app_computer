<template>
    <div>
        <div class="nav">商品型号{{newsinfo.lname}}</div>
        <div class="mui-card">
            <div class="lg flex">
                <div class="swiper">
                    <swiper :options="swiperOption">
                    <swiper-slide v-for="item in newsinfo.picList" :key="item.url">
                        <img :src="'http://www.codeboy.com/'+item.md" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p style="color: #333;">{{newsinfo.title}}</p>
                    <p>{{newsinfo.subtitle}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">价格:￥{{newsinfo.price}}</a>
                <a class="mui-card-link"><button class="btn">加入购物车</button></a>
            </div>
        </div>
        <ul class="mui-table-view">
                <li class="mui-table-view-cell">CPU:{{newsinfo.cpu}}</li>
                <li class="mui-table-view-cell">内存:{{newsinfo.memory}}</li>
                <li class="mui-table-view-cell">硬盘:{{newsinfo.disk}}</li>
                <li class="mui-table-view-cell">系统:{{newsinfo.os}}</li>
                <li class="mui-table-view-cell text5">承诺:{{newsinfo.promise}}</li>
                <li class="mui-table-view-cell">显卡:{{newsinfo.video_card}}</li>
                <li class="mui-table-view-cell">显存:{{newsinfo.video_memory}}</li>
                <!-- <li class="mui-table-view-cell">上市时间:{{newsinfo.shelf_time | formatDate}}</li> -->
        </ul>
        <!-- <div class="content" v-html="newsinfo.details"></div> -->
        <div  class="content">
            <img src="../../images/1.jpg" alt="">
            <img src="../../images/2.jpg" alt="">
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default{
    data() {
    return {
        lid: this.$route.params.lid,
        newsinfo:{},
        // details: '',
        swiperOption: {
        slidesPerView:1,
        centeredSlides: true,
        slidesPerGroup:1,
        // loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
            }
         }
       }
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            this.$http.get('http://www.codeboy.com/data/product/details.php?lid='+this.lid).then(result=>{
                // console.log(result.body)
               if(result.body.status!==0){
                this.newsinfo=result.body.details;
                console.log(this.newsinfo)
               } else{
                   Toast('获取详情失败！')
               }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.nav{
    width: 100%;
    text-align: center;
    display: block;
    padding:5px 0px;
}
// 轮播
 .flex{
   width: 100%;
   overflow: hidden;
   box-sizing: border-box;
   display: inline-block;
 }
 .swiper {
    width: 100%;
  }
.swiper  img{
  display:block;
  width:100%;
  height: 350px;
  /* display:flex; */
}
.mui-card{
box-shadow: 0 0px 0px rgba(0,0,0,.3);
}
.btn{
    background-color: #26a2ff;
}
.mui-table-view-cell{
    font-size: 13px;
}
.text5{
    width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
// .content{
//  width: 100% !important;
// } 
.content >>>img{
    width:300px;
}

</style>