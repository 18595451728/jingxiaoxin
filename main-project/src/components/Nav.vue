<template>
    <div class="top">
        <div class="logo">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="navlist">
            <div>首页</div>
            <div>产品中心</div>
            <div>项目案例</div>
            <div>新闻资讯</div>
            <div>招聘城市合伙人</div>
            <div>关于我们</div>
            <div><img src="../assets/images/search.png" alt=""></div>
            <div><img src="../assets/images/cart.png" alt=""></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>

<style scoped>
    .top{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 115px 0 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #333;
    }
    .navlist{
        display: flex;
        align-items: center;
        font-size: 16px;
        color: white;
    }
    .navlist>div{
        padding: 0 31px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
