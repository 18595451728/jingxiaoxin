<template>
    <div>
        <Nav></Nav>
        <div class="emei"><img src="/static/images/back.png" style="cursor: pointer;" @click="back" alt=""><span>支付成功</span></div>
        <div class="main-con">
            <div class="congratulation">
                <p>恭喜您。交易成功</p>
                <div class="ups">
                    <img src="/static/images/paySuccess.png" alt="">
                    <p>恭喜您。交易成功</p>
                </div>
            </div>
            <div class="cart">
                <div class="cart-title">
                    <div>产品名称</div>
                    <div>
                        <p>价钱</p>
                        <p>数量</p>
                        <p>小计</p>
                    </div>
                </div>
                <div class="cartlist" v-for="item in goodlist.list">
                    <div class="c-left">
                        <div class="c-img"><img :src="item.goods_pic" width="100" height="130" alt=""></div>
                        <div class="c-art">
                            <p>{{item.goods_name}}</p>
                            <p>颜色：高级灰</p>
                            <p>尺寸：1500mm</p>
                        </div>
                    </div>
                    <div class="c-right">
                        <div class="price">¥{{item.goods_price}}</div>
                        <div class="num">{{item.goods_num}}</div>
                        <div class="allprice">{{item.goods_price*item.goods_num}}</div>
                    </div>
                </div>
            </div>
            <p class="allprice">总价：￥{{order.total_price}}</p>
            <router-link tag="div" to="/Mine/Myorder?mine_status=1" class="back">返回</router-link>
        </div>

    </div>
</template>

<script>
  import Nav from './Nav'
  export default {
    name: 'Afterpay',
    components:{
      Nav
    },
    data:function () {
      return {
        order_no:'',
        goodlist:'',
        order:''
      }
    },
    mounted () {
      this.order_no = this.$route.query.order_no
      console.log(this.order_no)
      this.initData()
    },
    methods:{
      initData(){
        var that =this
        this.$axios.post('/Order/orderDetail',{
          order_no:this.order_no,
          token:this.$storage.session.get('token')
        }).then(res=>{
          console.log(res)
          if(res.data.status == 1){
            that.goodlist = res.data.data.goods_list
            that.order = res.data.data.order
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

    .emei{
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
    .emei span{
        margin-left: 43px;
    }
    .emei img{
        width: 10px;
    }
    .main-con{
        width: 1170px;
        margin: 70px auto;
    }
    .main-con::after{
        height: 0;
        content: "";
        display: block;
        visibility: hidden;
        clear: both;
    }
    .congratulation{
        position: relative;
        padding: 180px 0 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .congratulation>p{
        text-align: center;
        font-size: 100px;
        color: #eee;
    }
    .ups{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        top:0;
        text-align: center;
    }
    .ups p{
        margin-top: 50px;
        font-size: 30px;
        color: #000;
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
    p.allprice{
        margin: 25px 0 65px;
        font-size: 14px;
        color: #000000;
        text-align: right;
    }
    .back{
        width: 240px;
        line-height: 50px;
        text-align: center;
        border: 1px solid #d3d3d3;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
        color: #000000;
        float: right;
        cursor: pointer;
    }
    @media screen and (max-width: 1200px){
        .main-con{
            width: 90%;
        }
    }
</style>
