<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button" style="width:23px;">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged()" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button"  style="width:23px;">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js';
export default {
    data(){
        return{
        } 
    },
    mounted(){
        mui(".mui-numbox").numbox();
    },
    methods:{
        countChanged(){
            // console.log(this.$refs.numbox.value);
            this.$store.commit('updateGoodsInfo',{lid:this.goodslid,count:this.$refs.numbox.value});
        }
      
    },
    props:["initcount","goodslid"]
    
}
</script>
<style lang="scss" scoped>

.mui-numbox{
    width: 80px;
    padding: 0;
}
.mui-btn{
    color:black;
} 
</style>