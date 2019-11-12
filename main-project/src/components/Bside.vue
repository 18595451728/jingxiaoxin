<template>
    <div class="footer">
        <div class="f-main">
            <p>© Better 2016. A project design by Basiclab</p>
            <div class="f-nav">
                <router-link tag="div" to="/">首页</router-link>
                <router-link tag="div" to="/Product">产品中心</router-link>
                <router-link tag="div" to="/Case">项目案例</router-link>
                <router-link tag="div" to="/News">新闻资讯</router-link>
                <router-link tag="div" to="/Partner">招聘城市合伙人</router-link>
                <router-link tag="div" to="/AboutUs">关于我们</router-link>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Bside'
  }
</script>

<style scoped>
    .footer{
        background: #404040;
        line-height: 70px;
        padding: 0 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 10;
        position: fixed;
        left: 0;
        bottom:0;
        width: 100%;
    }
    .f-main{
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .f-main p{
        color: white;
        font-size: 12px;
    }
    .f-nav{
        display: flex;
        align-items: center;
    }
    .f-nav div{
        padding: 0 24px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
        color: #a6a6a6;
        cursor: pointer;
    }
    @media screen and (max-width: 1200px){
        .f-nav div{
            padding: 0 10px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
</style>
