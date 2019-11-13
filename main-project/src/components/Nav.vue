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
            <router-link to="/AboutUs" tag="div">
                <div @mouseover="showus" @mouseout="hideus">
                    <p>关于我们</p>
                    <div class="subnav" v-show="gous">
                        <router-link to="/AboutUs" tag="div">关于我们</router-link>
                        <router-link to="/AboutUs" tag="div">品牌介绍</router-link>
                        <router-link to="/AboutUs" tag="div">品牌文化</router-link>
                        <router-link to="/AboutUs" tag="div">公司发展历程</router-link>
                        <router-link to="/Contact" tag="div">联系我们</router-link>
                    </div>
                </div>
            </router-link>
            <router-link to="" tag="div"><img src="/static/images/search.png" alt=""></router-link>
            <router-link to="/ShopCart" tag="div"><img src="/static/images/cart.png" alt=""></router-link>
            <router-link to="/Mine/UserMessage?mine_status=0" tag="div"><img src="/static/images/user.png" alt=""></router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data:function () {
    return {
      gous:!1
    }
  },
  methods:{
    showus(){
      this.gous = !0
    },
    hideus(){
      this.gous = !1
    }
  }
}
</script>

<style scoped>
    .top{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9;
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
        position: relative;
        line-height: 80px;
    }
    .navlist>div .subnav{
        position: absolute;
        width: 150%;
        left: 0;
        top: 100%;
        background: #fff;
        color: #000;
        line-height: 60px;
    }
    .subnav div{
        padding-left: 35px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .subnav div:hover{
        color: white;
        background: #333;
    }
    .logo{
        cursor: pointer;
    }
    @media screen and (max-width: 1400px){
        .navlist>div{
            padding: 0 15px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
    }

    @media screen and (max-width: 1200px){
        .navlist>div{
            padding: 0 10px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
    @media screen and (max-width: 1200px){
        .navlist>div{
            font-size: 15px;
        }
    }
</style>
