<template>
    <div class="goodsinfo">
        <transition 
        @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
           <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="nav">商品型号{{goodsinfo.lname}}</div>
        <div class="mui-card">
            <div class="lg flex">
                <div class="swiper">
                    <swiper :options="swiperOption">
                    <swiper-slide v-for="item in goodsinfo.picList" :key="item.url">
                        <img :src="'http://www.codeboy.com/'+item.md" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p style="color: #333;">{{goodsinfo.title}}</p>
                    <p>{{goodsinfo.subtitle}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">价格:￥{{goodsinfo.price}}</a>
            </div>
                <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.sold_count"></numbox></p>
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCart()">加入购物车</mt-button>
                </p>
        </div>
        <ul class="mui-table-view">
                <li class="mui-table-view-cell">CPU:{{goodsinfo.cpu}}</li>
                <li class="mui-table-view-cell">内存:{{goodsinfo.memory}}</li>
                <li class="mui-table-view-cell">硬盘:{{goodsinfo.disk}}</li>
                <li class="mui-table-view-cell">系统:{{goodsinfo.os}}</li>
                <li class="mui-table-view-cell text5">承诺:{{goodsinfo.promise}}</li>
                <li class="mui-table-view-cell">显卡:{{goodsinfo.video_card}}</li>
                <li class="mui-table-view-cell">显存:{{goodsinfo.video_memory}}</li>
                <!-- <li class="mui-table-view-cell">上市时间:{{goodsinfo.shelf_time | formatDate}}</li> -->
        </ul>
        <!-- <div class="content" v-html="goodsinfo.details"></div> -->
        <div  class="content">
            <img src="../../images/1.jpg" alt="">
            <img src="../../images/2.jpg" alt="">
        </div>
    </div>
</template>
<script> 
import {Toast} from 'mint-ui';
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default{
    data() {
    return {
        lid: this.$route.params.lid,
        goodsinfo:{},
        ballFlag:false,//控制小球显示隐藏
        selectedCount:1,
        swiperOption: {
        slidesPerView:1,
        centeredSlides: true,
        slidesPerGroup:1,//默认用户购买的数量
        // loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
            }
         }
       }
    },
    created(){
        this.getGoodsInfo();
    },
    methods:{
        getGoodsInfo(){
            this.$http.get('http://www.codeboy.com/data/product/details.php?lid='+this.lid).then(result=>{
                // console.log(result.body)
               if(result.body.status!==0){
                this.goodsinfo=result.body.details;
                // console.log(this.goodsinfo)
               } else{
                   Toast('获取详情失败！')
               }
            })
        },
        addToShopCart() {
       // 添加到购物车
       this.ballFlag = !this.ballFlag;
       var goodsinfo={lid:this.lid,count:this.selectedCount,title:this.goodsinfo.title,pic:this.goodsinfo.picList,price:this.goodsinfo.price,selected:true};
       this.$store.commit("addToCart",goodsinfo);
        },
       beforeEnter(el) {el.style.transform = "translate(0, 0)";},
       enter(el, done) {
       el.offsetWidth;
       // 获取小球的 在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document.getElementById("badge").getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
       },
      afterEnter(el) { this.ballFlag = !this.ballFlag; },
      getSelectedCount(count){
        //   子组件选中的数量传递给父组件
          this.selectedCount=count;
        //   console.log("父组件拿到的值为："+this.selectedCount)
      }

    },
    components:{
        numbox
    }
}
</script>
<style lang="scss" scoped>
// .goodsinfo{
//     position: relative;
// }
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
.mui-table-view-cell{
    font-size: 13px;
}
.text5{
    width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.content >>>img{
    width:300px;
}
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index:99;
    top:625px;
    left:132px;
    // transform:translate(106px,625px)
}
</style>