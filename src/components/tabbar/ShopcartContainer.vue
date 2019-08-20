<template>
    <div class="shopcart-container">
        <div class="goods-list">
            <!-- 商品列表 -->
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.lid">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.lid]" @change="selectedChanged(item.lid,$store.getters.getGoodsSelected[item.lid])"></mt-switch>
                        <img :src="'http://www.codeboy.com/'+item.pic[i].md" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.lid]" :goodslid="item.lid"></numbox>
                                <a href="#" @click.prevent="remove(item.lid,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
        <!-- 商品结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="text">{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总价<span class="text">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
        <!-- <p>{{$store.getters.getGoodsSelected}}</p> -->
    </div>
</template>
<script>
import numbox from '../subcomponents/shopcart_numbox.vue'
export default {
  data(){
        return{
        goodslist:[]
        }
    },
  created(){
      this.getGoodsList();
  },
  methods:{  
      getGoodsList(){
          //获取store中所有的商品id
          var lidArr=[];
          this.$store.state.cart.forEach(item=>lidArr.push(item.lid));
        //   console.log(this.$store.state.cart)
          if(lidArr.length<=0){
              return;
          }
          this.$http.get('http://www.codeboy.com/data/cart/list.php/'+lidArr.join(",")).then(result=>{
              if(result.body.status!==0){
              this.goodslist=this.$store.state.cart;
            //   console.log(this.goodslist)
              }
          })
      },
      remove(lid,index){
        //   点击删除，把商品从store中根据传递的id删除
          this.goodslist.splice(index,1)
          this.$store.commit('removeFormCart',lid)
      },
      selectedChanged(lid,val){
         //每当点击开关时， 把最新的开关状态同步到store中
        //  console.log(lid+val);
         this.$store.commit('updateGoodsSelected',{lid,selected:val});
      }
  },
  components :{
      numbox
  } 
}
</script>
<style lang="scss" scoped>
.shopcart-container{
    background-color: #eee;
    overflow: hidden;
    
}
.mui-card-content-inner{
display:flex;
align-items:center;
} 
.goods-list img{
width: 60px;
height: 60px;
}
h1{font-size:13px;}
.info{
display: flex;
flex-direction: column;
justify-content:space-between;
}
.price{
  color:red;
  font-weight: bold;  
}
.jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.text{
    color: red;
    font-weight: bold;
    font-size: 16px;
}
</style>