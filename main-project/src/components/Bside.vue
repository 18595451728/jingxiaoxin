<template>
    <div class="footer">
        <div class="footer-main">
            <div class="f-left">
                <div class="f_list">
                    <router-link tag="a" to="/">产品中心</router-link>
                    <router-link tag="a" to="/Case">项目案例</router-link>
                    <router-link tag="a" to="/News">新闻资讯</router-link>
                    <router-link tag="a" to="/Partner">加入城市合伙人</router-link>
                    <router-link tag="a" to="/AboutUs">关于我们</router-link>
                    <router-link tag="a" to="/Contact">联系我们</router-link>
                </div>
                <div class="ls">
                    <img src="/static/images/black_logo.png" alt="">
                    <p>产品技术不是证书与标签，而是您喝下那杯水的感受，我们所有的努力，只为您手中这杯健康好水。</p>
                </div>
                <div class="ca">
                    <img src="/static/images/online.png" alt=""><span>全国服务热线：</span><p>400-080-5680</p>
                </div>
                <div class="copyright">@Copyright 2019 杭州再想科技有限公司 ICP备案编号: <a href="http://www.beian.miit.gov.cn" target="_blank">浙ICP备13022929号-2</a>  技术支持:<a href="http://123bingo.cn/" target="_blank"> 缤构网络</a></div>
            </div>
            <img src="/static/images/code.png" width="165" alt="">
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
        width: 100%;
        background: #dde0e3;
        padding-top: 40px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: -70px;
    }
    .footer-main{
        width: 920px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0 auto;
    }
    .f-left{
        width: 660px;
    }
    .f_list{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: pfb;
    }
    .f_list a{
        font-size: 16px;
        color: #333333;
    }
    .f_list a:hover{
        color: #0099cc;
        text-decoration: underline;
    }
    .ls{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        padding: 0 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .ls img{
        width: 180px;
    }
    .ls p{
        width: 400px;
        font-size: 14px;
        color: #333333;
        line-height: 30px;
    }
    .ca{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 35px;
    }
    .ca span{
        margin-left: 18px;
        font-size: 16px;
        color: #7b7b7b;
    }
    .ca p{
        font-size: 25px;
        color: #333333;
    }
    .copyright{
        text-align: center;
        color: #717171;
        font-size: 12px;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .copyright a{
        color: #666;
        font-weight: bold;
    }
    @media screen and (max-width: 1600px){
    }
    @media screen and (max-width: 1400px){
    }
    @media screen and (max-width: 1200px){


    }
</style>
