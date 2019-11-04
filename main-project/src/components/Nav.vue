<template>
    <div class="top">
        <router-link to="/" tag="div" class="logo">
            <img src="/static/images/logo.png" alt="">
        </router-link>
        <div class="navlist">
            <router-link to="/" tag="div">首页</router-link>
            <router-link to="/Product" tag="div">产品中心</router-link>
            <router-link to="/Case" tag="div">项目案例</router-link>
            <router-link to="/News" tag="div">新闻资讯</router-link>
            <router-link to="/Partner" tag="div">招聘城市合伙人</router-link>
            <router-link to="/AboutUs" tag="div">关于我们</router-link>
            <div><img src="/static/images/search.png" alt=""></div>
            <div><img src="/static/images/cart.png" alt=""></div>
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
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
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
        cursor: pointer;
        font-size: 16px;
    }
    .logo{
        cursor: pointer;
    }
    @media screen and (max-width: 1400px){
        .navlist>div{
            padding: 0 20px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
</style>
