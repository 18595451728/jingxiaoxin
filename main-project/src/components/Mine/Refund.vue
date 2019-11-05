<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" alt=""><span>我的订单</span></div>
        <div class="main-con">
            <div class="refund">
                <div class="backmes">
                    <p>退款商品：</p>
                    <img src="/static/images/goodimg.png" alt="">
                    <p><span>净小新净水器</span>    颜色：高级灰   尺寸：1500mm</p>
                </div>
                <div class="backser">
                    <p>服务类型：</p>
                    <div>
                        <p><span :class="{active:service==0}" @click="changeService(0)"></span>仅退款</p>
                        <p><span :class="{active:service==1}" @click="changeService(1)"></span>退货退款</p>
                    </div>
                </div>
                <div class="backser">
                    <p>货物状态：</p>
                    <div>
                        <p><span :class="{active:backstatus==0}" @click="changeStatus(0)"></span>未收到货</p>
                        <p><span :class="{active:backstatus==1}" @click="changeStatus(1)"></span>已收到货</p>
                    </div>
                </div>
                <div class="backreason">
                    <p>退货原因：</p>
                    <div>
                        <input type="text" placeholder="请选择" readonly>
                        <img src="/static/images/arrow-bottom.png" alt="">
                    </div>
                </div>
                <div class="backprice">
                    <p>退货金额：</p>
                    <div>
                        <p>￥</p>
                        <input type="text" placeholder="117">
                    </div>
                </div>
                <div class="backdes">
                    <p>退款说明：</p>
                    <div>
                        <textarea name="desc" id="desc" placeholder="退款说明"></textarea>
                        <p>200</p>
                    </div>
                </div>
                <div class="backimgs">
                    <p>上传照片：</p>
                    <div>
                        <img src="/static/images/add.png" alt="">
                        <p>上传凭证</p>
                        <p>（最多10张）</p>
                    </div>
                </div>
                <div class="send">
                    <p style="opacity: 0">巴拉巴拉：</p>
                    <div>提交</div>
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
    name: 'Refund',
    components:{
      Nav,
      Bside
    },
    data:function () {
      return {
        service:0,
        backstatus:0
      }
    },
    methods:{
      changeService(e){
        this.service = e
      },
      changeStatus(e){
        this.backstatus = e
      }
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
        width: 73%;
        height: calc(100% - 220px);
        position: absolute;
        left: 13.5%;
        top: 150px;
        padding-top: 35px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    .refund{
        width: 60%;
        max-height: 95%;
        -webkit-box-shadow: 0 0 59px rgba(0,0,0,.08);
        -moz-box-shadow: 0 0 59px rgba(0,0,0,.08);
        box-shadow: 0 0 59px rgba(0,0,0,.08);
        padding: 25px 0 0 40px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        overflow-y: scroll;        /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
        -ms-overflow-style:none;
        /*火狐下隐藏滚动条*/
        overflow:-moz-scrollbars-none;
    }
    .refund::-webkit-scrollbar{width:0px}
    .refund>div{
        display: flex;
        margin-bottom: 35px;
    }
    .refund>div>p{
        font-size: 14px;
        color: #000;
        margin-right: 20px;
    }
    .backmes p{
        margin-top: 30px;
        font-size: 14px;
        color: #000;

    }
    .backmes p span{
        font-size: 16px;
        margin-right: 15px;
    }
    .backmes p:last-child{
        margin-left: 7.2%;
    }
    .backser div p{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #000;
    }
    .backser div p:first-child{
        margin-bottom: 18px;
    }
    .backser div p span{
        width: 22px;
        height: 22px;
        border: 1px solid #cecece;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin-right: 15px;
        position: relative;
        cursor: pointer;
    }
    .backser div p span.active::after{
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        background: #000;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        top: 6px;
    }
    .backreason>p{
        margin-top: 15px;
    }
    .backreason>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 38%;
        border: 1px solid #bfbfbf;
        height: 60px;
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .backreason>div img{
        cursor: pointer;
    }
    .backprice>p{
        margin-top: 15px;
    }
    .backprice>div{
        display: flex;
        align-items: center;
        width: 38%;
        border: 1px solid #bfbfbf;
        height: 60px;
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .backdes>p{
        margin-top: 15px;
    }
    .backdes>div{
        border: 1px solid #bfbfbf;
        width: 68.67%;
        padding: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        height: 154px;
        position: relative;
    }
    .backdes textarea{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        width: 100%;
        height: 100%;
    }
    .backdes>div p{
        position: absolute;
        right: 20px;
        bottom: 20px;
        font-size: 14px;
        color: #ababab;
    }
    .backimgs>p{
        margin-top: 15px;
    }

    .backimgs>div{
        width: 120px;
        height: 120px;
        text-align: center;
        border: 1px solid #bfbfbf;
        cursor: pointer;
    }
    .backimgs div p{
        color: #ababab;
        font-size: 14px;
    }
    .backimgs div img{
        margin: 25px 0 10px;
    }
    .send>div{
        width: 26%;
        line-height: 52px;
        background: #0099cc;
        text-align: center;
        font-size: 14px;
        color: white;
        cursor: pointer;
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
</style>
