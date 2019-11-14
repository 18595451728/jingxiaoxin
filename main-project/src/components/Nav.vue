<template>
    <div class="top">
        <div class="nav" :class="[searchs ? 'animated slideOutLeft':'']">
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
                            <div @click="navhash(0)">关于我们</div>
                            <div @click="navhash(0)">品牌介绍</div>
                            <div @click="navhash(1)">品牌文化</div>
                            <div @click="navhash(2)">公司发展历程</div>
                            <router-link to="/Contact" tag="div">联系我们</router-link>
                        </div>
                    </div>
                </router-link>
                <div @click="gosearch"><img src="/static/images/search.png" alt=""></div>
                <router-link to="/ShopCart" tag="div"><img src="/static/images/cart.png" alt=""></router-link>
                <router-link to="/Mine/UserMessage?mine_status=0" tag="div"><img src="/static/images/user.png" alt=""></router-link>
            </div>
        </div>

        <div class="search" style="opacity: 0" :class="[searchs ? 'animated fadeIn':'']">
            <img src="/static/images/search.png" alt=""><input type="text" v-model="keyword" @keyup.enter="goProduct" placeholder="搜索"><img @click="nosearch" style="cursor: pointer;" src="/static/images/close_white.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data:function () {
    return {
      gous:!1,
      searchs:!1,
      keyword:''
    }
  },
  methods:{
    navhash(e){
      this.$emit("goscroll",e);
    },
    showus(){
      this.gous = !0
    },
    hideus(){
      this.gous = !1
    },
    gosearch(){
      this.searchs = !0
    },
    nosearch(){
      this.searchs = !1
    },
    goProduct(){
      this.searchs = !1
      console.log(this.keyword)
      this.$router.push({
        path:'/Product',
        query:{
          keyword:this.keyword
        }
      })
    }
  }
}
</script>

<style scoped>

    .search{
        width: 60%;
        position: absolute;
        left: 20%;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        -webkit-animation-delay: 0.8s;//延迟
        animation-delay: 0.8s;
        border-bottom: 3px solid #fff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .search input{
        width: 100%;
        line-height: 72px;
        padding: 0 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: white;
        font-size: 17px;
    }
    .top{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9;
        width: 100%;
        height: 80px;

        background: #333;
    }
    .nav{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 115px 0 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 2;
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
