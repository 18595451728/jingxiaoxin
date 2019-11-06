<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" alt=""><span>支付</span></div>
        <div class="main-con">
            <div class="address">
                <div class="a-title">地址</div>
                <div class="lineOne">
                    <div><input type="text" placeholder="姓名"></div>
                    <div><input type="text" placeholder="浙江省杭州市"><img src="/static/images/arrow-bottom.png" alt=""></div>
                </div>
                <div class="lineOne lineTwo">
                    <div><input type="text" placeholder="详细地址"></div>
                    <div><input type="text" placeholder="电话号"></div>
                </div>
                <div class="save">保存</div>
            </div>
            <div class="cart">
                <div class="cart-title">
                    <div>产品名称</div>
                    <div>
                        <p>价钱</p>
                        <p>数量</p>
                        <p>单号</p>
                    </div>
                </div>
                <div class="cartlist" v-for="item in 2">
                    <div class="c-left">
                        <div class="c-img"><img src="/static/images/goodimg.png" alt=""></div>
                        <div class="c-art">
                            <p>净小新净水器</p>
                            <p>颜色：高级灰</p>
                            <p>尺寸：1500mm</p>
                        </div>
                    </div>
                    <div class="c-right">
                        <div class="price">¥45.05</div>
                        <div class="num">1</div>
                        <div class="allprice">000232304</div>
                    </div>
                </div>
            </div>
            <div class="pay">
                <p>支付方式</p>
                <div class="pays">
                    <div class="zfb">
                        <div><img src="/static/images/zfb.png" alt=""><p>支付宝支付</p></div>
                    </div>
                    <div class="wx">
                        <div><img src="/static/images/wx.png" alt=""><p>微信支付支付</p></div>
                    </div>
                    <div class="xx">
                        <div><img src="/static/images/xx.png" alt=""><div class="par-right">
                            <p>线下汇款/转账</p>
                            <p>汇款后1-3个工作日到账</p>
                            <p><router-link tag="a" to="">帮助</router-link></p>
                        </div></div>
                    </div>
                </div>
            </div>
            <div class="tongji">
                <div class="t-top">
                    <p>小计$ 126.00</p>
                    <p>总计$ <span>126.00</span></p>
                </div>
                <router-link tag="div" to="/Afterpay" class="t-bottom">结算</router-link>
            </div>
        </div>

    </div>
</template>

<script>
  import Nav from './Nav'
  import Bside from './Bside'
  export default {
    name: 'Payment',
    components:{
      Bside,
      Nav
    },
    data:function () {
      return {

      }
    },
    mounted () {
    },
    methods:{

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
        width: 1170px;
        margin: 50px auto;
    }
    .main-con::after{
        height: 0;
        content: "";
        display: block;
        visibility: hidden;
        clear: both;
    }
    .a-title{
        width: 45%;
        line-height: 55px;
        border-bottom: 1px solid #cfcfcf;
        margin-bottom: 20px;
        font-size: 16px;
        color: #000;
    }
    .lineOne{
        display: flex;
        align-items: center;
    }
    .lineOne>div{
        width: 45%;
        border: 1px solid #cfcfcf;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 22px;
        color: #999999;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .lineOne input{
        width: 80%;
        line-height: 53px;
    }
    .lineOne>div:first-child{
        margin-right: 10%;
    }
    .lineTwo{
        margin-top: 25px;
    }
    .save{
        width: 170px;
        height: 55px;
        border: 1px solid #cfcfcf;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 53px;
        text-align: center;
        font-size: 14px;
        color: #000;
        margin: 45px 0 60px;
    }
    .cart{
        border: 1px solid #dadada;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .cart>div{
        padding: 0 26px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #dadada;
        display: flex;
        justify-content: space-between;
    }
    .cart>div>div:first-child{
        width: 71.55%;
    }
    .cart>div>div:last-child{
        width: 28.45%;
        display: flex;
        justify-content: space-between;
    }
    .cart>div>div:last-child>p{
        text-align: center;
        flex: 1;
    }
    .cart>div>div:last-child>p:nth-child(2){
        flex: 2;
    }
    .cart>div:last-child{
        border-bottom: none;
    }
    .cart-title{
        line-height: 50px;
        font-size: 14px;
        color: #000000;
    }

    .cart>div.cartlist{
        padding: 30px 26px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c-left{
        display: flex;
    }
    .c-right{
        font-size: 14px;
        color: #000;
    }
    .c-img{
        margin-right: 30px;
    }
    .c-art p{
        margin-top: 15px;
        font-size: 14px;
        color: #000;
    }
    .c-art p:first-child{
        font-size: 16px;
    }
    .c-right>div{
        flex: 1;
        text-align: center;
        margin-top: 15px;
    }
    .c-right>div.num{
        flex: 2;
    }
    .c-right>div.num>div{
        width: 125px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        background: #f5f5f5;
        line-height: 38px;
        font-size: 14px;
        color: #000;
    }
    .pay>p{
        font-size: 14px;
        color: #000;
        margin: 40px 0;
    }
    .pays{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .pays>div{
        width: 354px;
        height: 128px;
        border: 1px solid #d3d3d3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pays>div>div{
        display: flex;
        align-items: center;
    }
    .pays>div>div>p{
        font-size: 18px;
        color: #000;
    }
    .pays>div>div>img{
        margin-right: 18px;
    }
    .par-right>p:first-child{
        font-size: 18px;
        color: #000;
        margin-bottom: 15px;
    }
    .par-right>p:nth-child(2){
        font-size: 14px;
        color: #666;
    }
    .par-right>p:nth-child(3) a{
        font-size: 14px;
        color: #666;
        text-decoration: underline;
    }
    .tongji{
        width: 354px;
        height: 292px;
        background: #efefef;
        margin-top: 90px;
        float: right;
        padding: 0 34px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .t-top{
        height: 131px;
        padding-top: 40px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: #333;
        border-bottom: 1px solid #cecece;
        text-align: right;
    }
    .t-top>p:first-child{
        margin-bottom: 24px;
        font-size: 16px;
    }
    .t-top>p:last-child{
        font-size: 18px;
    }
    .t-top span{
        color: #ff1212;
    }
    .t-bottom{
        margin-top: 29px;
        line-height: 55px;
        text-align: center;
        color: white;
        background: #333;
        cursor: pointer;
    }
    @media screen and (max-width: 1200px){
        .main-con{
            width: 90%;
        }
        .pays>div{
            width: 30%;
        }
    }
</style>
