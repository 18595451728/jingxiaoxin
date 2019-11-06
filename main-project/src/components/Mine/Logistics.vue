<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" alt=""><span>我的订单</span></div>
        <div class="main-con">
            <div class="loginstics">
                <div class="l-top">
                    <div class="l-status">
                        <div class="title">派送中</div>
                        <p>07-16 20:05</p>
                        <p>「杭州市」西湖十二部派件员：正在派件</p>
                    </div>
                    <div class="l-phone">
                        <div class="title">快递电话</div>
                        <p></p>
                        <p>+1 212-490-2121</p>
                    </div>
                    <div class="l-no">
                        <div class="title">运单号</div>
                        <p></p>
                        <p>+1 212-490-2121</p>
                    </div>
                </div>
                <div class="l-bottom">
                    <img src="/static/images/loginstics.png" alt="">
                </div>
            </div>
            <div class="orderdetail">
                <div class="order-main">
                    <div class="o-title">
                        <p>订单详情</p>
                        <p>订单编号：34342432453</p>
                    </div>
                    <div class="o-goods">
                        <div v-for="item in 2">
                            <img src="/static/images/goodimg.png" alt="">
                            <div class="o-art">
                                <p class="goodsname">净小新净水器</p>
                                <p class="goodsspec">颜色：高级灰   尺寸：1500mm</p>
                                <p class="goodsprice">¥45.05 x1</p>
                            </div>
                        </div>
                    </div>
                    <div class="o-tongji">
                        <div><p>小计</p><p>￥20</p></div>
                        <div><p>优惠券</p><p>-￥10</p></div>
                    </div>
                    <div class="allprice">
                        <p>总价</p><p>¥117,00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from '../Nav'
    import Bside from '../Bside'
  export default {
    name: 'Logistics',
    components:{
      Nav,
      Bside
    }
  }
</script>

<style scoped>
    .emei{
        width: 100%;
        line-height: 70px;
        padding: 0 115px 0 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #8f8f8f;
        color: white;
        display: flex;
        align-items: center;
        font-size: 16px;
    }
    .emei span{
        margin-left: 43px;
    }
    .main-con{
        width: 1400px;
        height: calc(100% - 220px);
        position: absolute;
        left: calc(50% - 700px);
        top: 150px;
        padding-top: 60px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        /*align-items: center;*/
    }
    .loginstics{
        width: 63.57%;
    }
    .l-top{
        display: flex;
        justify-content: space-between;
        margin-bottom: 77px;
    }
    .l-top>div{
        width: 31.46%;
        border: 1px solid #1e1e1e;
        text-align: center;
        padding: 30px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .title{
        color: #808080;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .l-status p:first-child{
        color: #000000;
        font-size: 18px;
    }
    .l-status p:last-child{
        color: #000000;
        font-size: 14px;
    }
    .l-bottom img{
        width: 100%;
    }
    .orderdetail{
        width: 28%;
        -webkit-box-shadow: 0 0 59px rgba(0,0,0,.08);
        -moz-box-shadow: 0 0 59px rgba(0,0,0,.08);
        box-shadow: 0 0 59px rgba(0,0,0,.08);
        max-height: 530px;
    }
    .order-main{
        width: 84%;
        margin: 20px auto;
    }
    .o-title{
        font-size: 14px;
        color: #333333;
        line-height: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .o-goods>div{
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid #e6e6e6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .o-goods>div>img{
        width: 25%;
    }
    .goodsname{
        font-size: 16px;
        color: #333333;
        margin-bottom: 15px;
    }
    .goodsspec{
        font-size: 14px;
        color: #747474;
        margin-bottom: 30px;
    }
    .goodsprice{
        font-size: 16px;
        color: #3c3c3c;
    }
    .o-tongji{
        padding: 15px 0;
        border-bottom: 1px solid #e6e6e6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
    }
    .o-tongji>div{
        display: flex;
        align-items: center;
    }
    .o-tongji>div:first-child{
        margin-bottom: 15px;
    }
    .o-tongji>div p:first-child{
        width: 100px;
    }
    .allprice{
        font-size: 30px;
        display: flex;
        align-items: center;
        margin: 15px 0;
    }
    .allprice p:first-child{
        width: 100px;
    }
    @media screen and (max-width: 1400px){
        .main-con{
            width: 90%;
            left: 5%;
        }
        .orderdetail {
            width: 31%;
        }
    }
    @media screen and (max-width: 1200px){

        .orderdetail {
            width: 34%;
        }
        .loginstics{
            width: 62.5%;
        }
    }
</style>
