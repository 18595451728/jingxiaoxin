<template>
    <div>
        <Nav></Nav>
        <div class="main-con">
            <MineLeft :status="mine_status"></MineLeft>
            <div class="o-right">
                <div class="o-header">
                    <div v-for="(item,index) in status" @click="changeStatus(index)" :class="{active:choose==index}">{{item}}</div>
                </div>
                <div class="o-list" v-for="(item,index) in orderlist">
                    <div class="l-top"><p>{{item.order_time}}  订单号：{{item.order_no}}</p><p>{{item.order_status_desc}}</p></div>
                    <div class="l-con" v-for="items in item.goods_list">
                        <div @click="godetail(item)" class="l-left">
                            <img src="/static/images/goodimg.png" alt="">
                            <div class="l-art">
                                <div class="a-top"><span class="goodsname">{{items.goods_name}}</span><span v-for="item1 in items.sku_info.split(' ')">{{item1}}</span></div>
                                <div class="a-bottom">￥{{items.goods_price}}</div>
                            </div>
                        </div>
                        <div class="l-right">
                            <div class="b-top">
                                <div></div>
                                <div class="backmoney" @click="refund(item.order_no,items.order_goods_id)" v-if="item.order_btn.return_btn">退款</div>
                            </div>
                            <!--<div class="b-bottom">-->
                                <!--<div>取消订单</div>-->
                                <!--<div @click="topay(index)">付款</div>-->
                            <!--</div>-->
                        </div>
                    </div>
                    <div class="b-bottom">
                        <div @click="cancleOrder(item)" v-if="item.order_btn.cancel_btn">取消订单</div>
                        <div @click="pay(index)" v-if="item.order_btn.pay_btn">付款</div>
                        <div @click="confirmGetGoods(item)" v-if="item.order_btn.receive_btn">确认收货</div>
                        <div @click="comment(item)" v-if="item.order_btn.comment_btn">评论</div>
                        <div @click="godetail(item)" v-if="item.order_btn.shipping_btn">查看物流</div>
                        <div @click="certificate(item)" v-if="item.order_btn.certificate_btn">上传凭证</div>
                    </div>
                </div>
                <div class="no_order" v-if="no_order">
                    <img src="/static/images/no_order.png" style="margin-bottom: 55px" alt="">
                    <p><img src="/static/images/zwdd.png" alt=""></p>
                </div>
            </div>
        </div>
        <div class="payMessage" v-if="topay">
            <div class="main">
                <div class="m-title">
                    <p>支付方式</p>
                    <img src="/static/images/close.png" @click="closepay" style="cursor: pointer;" alt="">
                </div>
                <div class="m-con">
                    <div class="pays">
                        <div class="zfb" :class="{active:payStyle==0}" @click="changeStyle(0)">
                            <div><img src="/static/images/zfb.png" alt="">
                                <p>支付宝支付</p></div>
                        </div>
                        <div class="wx" :class="{active:payStyle==1}" @click="changeStyle(1)">
                            <div><img src="/static/images/wx.png" alt="">
                                <p>微信支付支付</p></div>
                        </div>
                        <div class="xx"  :class="{active:payStyle==2}" @click="changeStyle(2)">
                            <div><img src="/static/images/xx.png" alt="">
                                <div class="par-right">
                                    <p>线下汇款/转账</p>
                                    <p>汇款后1-3个工作日到账</p>
                                    <p>
                                        <router-link tag="a" to="">帮助</router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="t-bottom" @click="jiesuan">结算</div>
            </div>
        </div>
        <div class="wxpay" @click="hidewx" v-show="showwx">
            <div>
                <p>应付金额：<span>{{paymoney}}元</span></p>
                <div v-html="wxpay"></div>
                <p>使用微信扫码付款</p>
            </div>
        </div>
    </div>
</template>

<script>
  import Nav from '../Nav'
  import MineLeft from './MineLeft'
  export default {
    name: 'Myorder',
    components :{
      Nav,
      MineLeft
    },
    data:function () {
      return {
        choose:0,
        status:['全部','待发货','待收货','待评论','退款'],
        mine_status:'',
        orderlist:[],
        payStyle:0,
        topay:!1,
        order_no:'',
        wxpay:'',
        showwx:!1,
        no_order:'',
        paymoney:0
      }
    },
    mounted(){
      this.mine_status = this.$route.query.mine_status
      this.initData(0)
    },
    methods:{
      confirmGetGoods(e){
        var that =this
        this.$axios.post('/Order/confirmOrder',{
          token:this.$storage.session.get('token'),
          order_no:e.order_no
        }).then(res=>{
          console.log(res)
          that.$layer.msg(res.data.msg)
          if(res.data.status==1){
            location.reload(true)
          }
        })
      },
      comment(i){
        console.log(i)
        this.$router.push({
          path:'/Mine/Comment',
          query:{
            item:i
          }
        })
      },
      refund(o,i){
        console.log(o,i)
        this.$router.push({
          path:'/Mine/Refund',
          query:{
            order_no:o,
            id:i
          }
        })
      },
      hidewx(){
        this.showwx = !1
      },
      jiesuan(){
        var that =this

        that.$axios.post('/pay/toPay',{
          order_no:that.order_no,
          token:that.$storage.session.get('token')
        }).then(rr=>{
         if(rr.data.status==1){
           if(that.payStyle==0){
             window.location.href='http://www.jingxiaoxin.com/api/Pay/aliPay?order_no='+rr.data.data.order_no+'&token='+that.$storage.session.get('token')
           }else if(that.payStyle==1){
             that.$axios.post('/Pay/wxPay',{
               order_no:rr.data.data.order_no,
               token:that.$storage.session.get('token')
             }).then(r=>{
               console.log(r)
               that.wxpay = r.data.data.code_url
               that.showwx = !0
               that.judgeHasPay(rr.data.data.order_no)
             })
           }else{
                 that.$router.push({path:'/Mine/OffLine',query:{order_no:rr.data.data.order_no}})
           }
         }
        })
      },
      judgeHasPay(e){
        var that =this
        var times = 0
        var tt = setInterval(()=>{
          times++;
          if(times>=50){
            clearInterval(tt)
            that.$router.push({
              path:'/Mine/Myorder',
              query:{
                mine_status:1
              }
            })
          }
          console.log(e)
          this.$axios.post('/Pay/orderRequest',{
            order_no:e,
            token:this.$storage.session.get('token')
          }).then(res=>{
            console.log(res)
            if(res.data.status == 1){
              clearInterval(tt)
              that.showwx = !1
              that.$layer.msg(res.data.msg)
              setTimeout(function () {
                that.$router.push({
                  path:'/Afterpay',
                  query:{
                    order_no:e
                  }
                })
              },1000)

            }
          })
        },1000)
      },
      cancleOrder(e){
        var that =this
        this.$axios.post('/Order/cancelOrder',{
          token:this.$storage.session.get('token'),
          order_no:e.order_no
        }).then(res=>{
          if(res.data.status==1){
            that.$layer.msg(res.data.msg)
            location.reload(true)
          }else{
            that.$layer.msg(res.data.msg)
          }
          console.log(res)
        })
      },
      pay(index){
        console.log(this.orderlist[index].order_no)
        this.topay = !0
        this.order_no  = this.orderlist[index].order_no
        this.paymoney  = this.orderlist[index].total_fee
      },

      closepay(){
        this.topay = !1
      },
      changeStyle(e){
        this.payStyle = e
      },
      changeStatus(e){
        this.choose = e
        switch (e) {
          case 0:
            this.initData(0)
            break;
          case 1:
            this.initData(2)
            break;
          case 2:
            this.initData(3)
            break;
          case 3:
            this.initData(4)
            break;
          case 4:
            this.initData(6)
            break;
        }

      },
      certificate(e){
        this.$router.push({
          path:'/Mine/Offline',
          query:{
            order_no:e.order_no
          }
        })
      },
      godetail(e){
        this.$router.push({
          path:'/Mine/Logistics',
          query:{
            order_no:e.order_no,
            status : e.order_status_code
          }
        })
      },
      initData(e){
        var that =this
        this.$axios.post('/Order/orderLIst',{
          status:e,
          list_row:100,
          page:1,
          token:this.$storage.session.get('token')
        }).then(res=>{
          if(res.data.status==1){
            that.orderlist = res.data.data.list
            if(that.orderlist.length==0){
              that.no_order = !0
            }else{
              that.no_order = !1
            }
          }else{
            if(res.data.status==-1){
              this.$layer.msg('登录失效，请重新登录')
              that.$storage.session.set('paths',that.$route.fullPath)
              setTimeout(function () {
                that.$router.push('/Mine/Login')
              },1500)
            }else{
              this.$layer.msg(res.data.msg)
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
    .no_order{
        width: 100%;
        padding-top: 140px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
    }
    .payMessage{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 13;
        background: rgba(0,0,0,.21);
    }
    .main{
        width: 70%;
        height: 700px;
        position: absolute;
        left: 15%;
        top: calc(50% - 350px);
        background: white;
    }

    .m-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 70px;
        font-size: 18px;
        background: #ececec;
    }
    .m-title img{
        width: 20px;
    }
    .m-con{
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pays {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .pays > div {
        width: 30%;
        height: 128px;
        border: 1px solid #d3d3d3;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .pays > div.active{
        border: 1px solid #000;
    }
    .pays > div > div {
        display: flex;
        align-items: center;
    }

    .pays > div > div > p {
        font-size: 18px;
        color: #000;
    }

    .pays > div > div > img {
        margin-right: 18px;
    }

    .t-bottom {
        width: 300px;
        float: right;
        margin-right: 30px;
        line-height: 55px;
        text-align: center;
        color: white;
        background: #333;
        cursor: pointer;
    }

    .main-con{
        width: 72.9%;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
    }
    .o-right{
      width: 70%;
        height: 700px;
        overflow-y: scroll;
        -webkit-box-shadow: 0 0 59px rgba(0,0,0,.08);
        -moz-box-shadow: 0 0 59px rgba(0,0,0,.08);
        box-shadow: 0 0 59px rgba(0,0,0,.08);
        /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
        -ms-overflow-style:none;
        /*火狐下隐藏滚动条*/
        overflow:-moz-scrollbars-none;
    }
    .o-right::-webkit-scrollbar{width:0px}
    .o-header{
        width: 100%;
        line-height: 48px;
        display: flex;
    }
    .o-header>div{
        width: 20%;
        background: #333;
        color: white;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
    }
    .o-header>div.active{
        line-height: 44px;
        border-top: 4px solid #fff;
        background: #0099cc;
    }
    .o-list{
        padding: 30px 27px 30px 50px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 3px solid #f4f4f4;
    }
    .o-list::after{
        display: block;
        content: "";
        height: 0;
        visibility: hidden;
        clear: both;
    }
    .l-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: #000;
        margin-bottom: 25px;
    }
    .l-con{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .l-left{
        display: flex;
        /*justify-content: space-between;*/
        align-items: center;
        width: 55%;
        cursor: pointer;
    }
    .l-left>img{
        width: 86px;
        margin-right: 65px;
    }

    .a-top{
        font-size: 14px;
        color: #000;
        margin-bottom: 50px;
    }
    .a-top span{
        margin-right: 20px;
    }
    .a-top span:last-child{
        margin-right: 0;
    }
    .goodsname{
        font-size: 16px;
    }
    .a-bottom{
        font-size: 16px;
        color: #3c3c3c;
    }
    .l-right{
        width: 28%;

    }
    .b-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .b-top>div{
        width: 48%;
        line-height: 45px;
        border: 2px solid #646464;
        text-align: center;
        color: #3c3c3c;
        font-size: 14px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;
    }
    .b-top>div:first-child{
        border: none;
    }
    .b-bottom{
        width: 28%;
        float: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .b-bottom>div{
        width: 48%;
        line-height: 45px;
        text-align: center;
        font-size: 14px;
        color: white;
        cursor: pointer;
    }
    .b-bottom>div:first-child{
        background: #999999;

    }
    .b-bottom>div:last-child{
        background: #0099cc;
        margin-left: 4%;
    }
    .wxpay{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,.21);
        z-index: 99;
    }
    .wxpay>div{
        text-align: center;
        padding: 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
        font-size: 16px;
        color: rgba(0,0,0,1);
    }
    .wxpay span{
        font-size: 24px;
        color: #FF470A;
    }
    .wxpay img{
        width: 250px;
    }
    @media screen and (max-width: 1400px) {
        .l-left{
            width: 70%;
        }
        .main-con{
            width: 92%;
        }
        .l-left>img{
            margin-right: 40px;
        }
        .main{
            width: 80%;
            left: 10%;
        }
    }
    @media screen and (max-width: 1200px) {
        .main{
            width: 90%;
            left: 5%;
        }
    }
</style>
