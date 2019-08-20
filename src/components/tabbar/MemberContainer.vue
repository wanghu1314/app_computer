<template>
    <div>
        <div class="pic"><img src="../../images/menu2.png" alt=""></div>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>账号</label>
                <input type="text" placeholder="请输入用户名">
            </div>
            <div class="mui-input-row">
                <label>密码</label>
                <input type="password" class="mui-input-clear" placeholder="请输入密码">
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn mui-btn-primary" onclick="return false;">登录</button>
            </div>
        </form>
        <div class="flex">
            <span>注册</span>
            <span>忘记密码</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.pic{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin:0 auto;
    padding: 10px;   
}
img{
    width: 100%;
    }
.mui-btn-primary{
    width: 98%;
    background-color: #26a2ff;
}
span{
    color:#26a2ff;
}
.flex{
display: flex;
justify-content: space-between;
padding: 10px 10px;
}
</style>