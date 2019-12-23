<template>
    <div>
        <Nav></Nav>
        <div class=""><img src="/static/images/back.png" @click="back" alt=""><span>我的订单</span></div>
        <div class="main-con">
            <div class="cancel_order" v-if="cancel_orders">
                <img src="/static/images/cancel_order.png" style="margin-bottom: 55px" alt="">
                <p><img src="/static/images/qxdd.png" alt=""></p>
            </div>
            <div class="loginstics" v-if="!cancel_orders">
                <div class="l-top">
                    <div class="l-status">
                        <div class="title">派送信息</div>
                        <p v-if="express_data.AcceptTime">{{express_data.AcceptTime}}</p>
                        <p v-if="express_data.AcceptStation">{{express_data.AcceptStation}}</p>
                        <p v-if="!express_data">暂无信息</p>
                    </div>
                    <div class="l-phone">
                        <div class="title">快递电话</div>
                        <p></p>
                        <p>{{express_tel||'暂无信息'}}</p>
                    </div>
                    <div class="l-no">
                        <div class="title">运单号</div>
                        <p></p>
                        <p>{{express_no||'暂无信息'}}</p>
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
                        <p>订单编号：{{order_no}}</p>
                    </div>
                    <div class="o-goods">
                        <div v-for="item in goodlist.list">
                            <img :src="item.goods_pic" width="100" height="130" alt="">
                            <div class="o-art">
                                <p class="goodsname">{{item.goods_name}}</p>
                                <p class="goodsspec">颜色：高级灰   尺寸：1500mm</p>
                                <p class="goodsprice">¥{{item.goods_price}} x{{item.goods_num}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="o-tongji">
                        <div><p>小计</p><p>￥{{order.total_fee}}</p></div>
                        <div><p>优惠券</p><p>-￥{{order.coupon_money}}</p></div>
                    </div>
                    <div class="allprice">
                        <p>总价</p><p>¥{{order.total_price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from '../Nav'
  export default {
    name: 'Logistics',
    components:{
      Nav
    },
    data:function(){
      return {
        order:'',
        goodlist:'',
        order_no:'',
        express_tel:'',
        express_no:'',
        express_data:'',
        cancel_orders:'',
      }
    },
    mounted(){
      this.order_no = this.$route.query.order_no
      this.status = this.$route.query.status
      console.log(this.order_no)
      this.initData()
      if(this.status!=0){
        this.cancel_orders = !1
        this.initWuliu()
      }else{
        this.cancel_orders = !0
      }
    },
    methods:{
      initWuliu(){
        var that=this
        this.$axios.post('/Order/orderExpress',{
          order_no:this.order_no,
          token:this.$storage.session.get('token')
        }).then(res=>{
          console.log(res)
            if(res.data.status==1){
              that.express_tel = res.data.data.express_tel
              that.express_no = res.data.data.express_no
              that.express_data = res.data.data.express_data[res.data.data.express_data.length-1]
            }else{
              that.$layer.msg(res.data.msg)
            }
        })
      },
      initData(){
        var that=this
        this.$axios.post('/Order/orderDetail',{
          order_no:this.order_no,
          token:this.$storage.session.get('token')
        }).then(res=>{
          console.log(res.data.data)
          if(res.data.status==1){
            that.order = res.data.data.order
            that.goodlist = res.data.data.goods_list
          }else{
            that.$layer.msg(res.data.msg)
          }
        })
      },
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
    .cancel_order{
        width: 63.57%;
        height: 600px;
        -webkit-box-shadow: 0 0 59px rgba(0,0,0,.08);
        -moz-box-shadow: 0 0 59px rgba(0,0,0,.08);
        box-shadow: 0 0 59px rgba(0,0,0,.08);
        text-align: center;
        padding-top: 150px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .{
        width: 100%;
        line-height: 40px;
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
    . img{
        width: 10px;
    }
    . span{
        margin-left: 43px;
    }
    .main-con{
        width: 1400px;
        height: calc(100% - 130px);
        position: absolute;
        left: calc(50% - 700px);
        top: 130px;
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
        overflow-y: scroll;
        -ms-overflow-style:none;
        /*火狐下隐藏滚动条*/
        overflow:-moz-scrollbars-none;
    }
    .orderdetail::-webkit-scrollbar{width:0px}
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
