<template>
    <div>
        <div class="mui-input-row mui-search">
            <input type="search" class="mui-input-clear" placeholder="搜索">
        </div>
        <div id="JS_hot" class="m_history_row Left">
            <h3>正在热搜中</h3>
            <ul id="JS_hot_list" class="search_sl hot_search">
                <li>
                    <a  href="#">小米</a>
                </li>
                <li>
                    <a  href="#">戴尔</a>
                </li>
                <li>
                    <a  href="#">Apple</a>
                </li>
                <li>
                    <a  href="#">联想</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
input{
    border:1px solid rgb(192, 190, 190);
    background-color:white;
    margin: 0;
}
.m_history_row h3 {
    font-weight: normal;
    color: #999;
    background-color: #ebebeb;
    padding: 8px 0 6px 16px;
    font-size: 14px;
    margin: 0;
}
.m_history_row ul li {
    list-style: outside none none;
    float: left;
    margin-right: 10px;
    margin-bottom: 8.5px;
    padding: 6px 18px;
    font-size: 14px;
    line-height: 14px;
    border: 1px solid #cccccc;
    border-radius: 5px;
}
</style>