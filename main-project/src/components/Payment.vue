<template>
    <div>
        <Nav></Nav>
        <div class="emei"><img src="/static/images/back.png" @click="back" alt=""><span>支付</span></div>
        <div class="main-con">
            <div class="address">
                <div class="a-title">地址</div>
                <div class="lineOne">
                    <div><input type="text" v-model="name" placeholder="姓名"></div>
                    <div style="position: relative" @click="getprovince(0)">
                        <input type="text" readonly placeholder="浙江省杭州市" v-model="area" style="cursor: pointer;">
                        <img src="/static/images/arrow-bottom.png" style="cursor: pointer;" alt="">
                        <transition name="fade">
                            <div class="addcontainer" v-if="showaddress">
                                <p v-for="item in provinces" @click.stop="getMessage(item.id,item.name)">{{item.name}}</p>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="lineOne lineTwo">
                    <div><input type="text" v-model="details" placeholder="详细地址"></div>
                    <div><input type="text" v-model="phone" placeholder="电话号"></div>
                </div>
                <div class="save" @click="addAddress()">保存</div>
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
                <div class="cartlist" v-for="item in list">
                    <div class="c-left">
                        <div class="c-img"><img :src="item.goods_pic" width="100" height="130" alt=""></div>
                        <div class="c-art">
                            <p>{{item.goods_name}}</p>
                            <!--<p>颜色：高级灰</p>-->
                            <!--<p>尺寸：1500mm</p>-->
                            <p v-for="items in item.goods_skuinfo.split(' ')">{{items}}</p>
                        </div>
                    </div>
                    <div class="c-right">
                        <div class="price">¥{{item.goods_price}}</div>
                        <div class="num">{{item.goods_num}}</div>
                        <div class="allprice">{{(item.goods_price*item.goods_num).toFixed(2)}}</div>
                    </div>
                </div>
            </div>
            <div class="pay">
                <p>支付方式</p>
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
            <div class="tongji">
                <div class="t-top">
                    <!--<p>小计$ 126.00</p>-->
                    <p>总计$ <span>{{money.order_amount}}</span></p>
                </div>
                <div class="t-bottom" @click="jiesuan()">结算</div>
            </div>
        </div>
        <div class="wxpay" @click="hidewx" v-show="showwx" v-html="wxpay"></div>
    </div>
</template>

<script>
  import Nav from './Nav'

  export default {
    name: 'Payment',
    components: {
      Nav
    },
    data: function () {
      return {
        payStyle:0,
        cart_type: '',
        list: '',
        address: '',
        showaddress:!1,
        provinces:[],
        level:0,
        pp:'',
        cc:'',
        xx:'',
        ppp:'',
        ccc:'',
        xxx:'',
        area:'',
        name:'',
        phone:'',
        details:'',
        money:'',
        wxpay:'',
        showwx:!1,
        tt:''
      }
    },
    mounted () {
      this.cart_type = this.$route.query.type
      console.log(this.cart_type)
      var that = this
      //基本信息
      this.$axios.post('/Order/cartOrder', {
        token: this.$storage.session.get('token'),
        cart_type: this.cart_type
      }).then(res => {
        console.log(res)
        if (res.data.status == 1) {
          that.list = res.data.data.cartList
          if(res.data.data.address){
            that.address = res.data.data.address
            that.name = res.data.data.address.consignee
            that.phone = res.data.data.address.telephone
            that.details = res.data.data.address.address
          }
        }
      })
        //总价
      this.$axios.post('/Order/orderBuy', {
        token: this.$storage.session.get('token'),
        cart_type: this.cart_type,
        pay_integral: '',
        coupon_id: '',
        address_id: this.address.id
      }).then(res => {
        console.log(res)
        if (res.data.status == 1) {
          res.data.data.order_amount = res.data.data.order_amount.toFixed(2)
           this.money = res.data.data
        }
      })
    },
    methods: {
      changeStyle(e){
        this.payStyle = e
      },
      getprovince (e) {
        console.log(11,this.showaddress)
        var that=this
        this.showaddress = !this.showaddress
        console.log(11,this.showaddress)
        if(this.showaddress){
          console.log(222)
            that.getMessage(e)
        }else{
          this.pp = ''
          this.cc=''
          this.xx = ''
          this.ppp = ''
          this.ccc=''
          this.xxx = ''
          this.level = 0
        }
      },
      getMessage(e,name){
        console.log(name)
        this.level++;
        switch (this.level) {
          case 2 :
            this.pp = e
            this.ppp = name
            break;
          case 3 :
            this.cc=e
            this.ccc=name
            break;
          case 4 :
            this.xx = e
            this.xxx = name
            break;
        }
        if(this.level >= 4){
          this.showaddress = !1
          this.level = 0
          this.area = this.ppp+' '+this.ccc+' '+this.xxx
          return false;
        }
        var that =this
        this.$axios.post('/Index/getRegion', {
          parent_id: e
        }).then(res => {
          console.log(res)
          if(res.data.status==1){
            that.provinces = res.data.data
          }
        })
      },
      addAddress(){
        var name = this.name,details = this.details,phone = this.phone,area =this.area,reg = /^1[3456789]\d{9}$/
        if(!name){
          this.$layer.msg('姓名不能为空')
          return false;
        }
        if(!details){
          this.$layer.msg('详细地址不能为空')
          return false;
        }
        if(!area){
          this.$layer.msg('地址不能为空')
          return false;
        }
        if(!phone){
          this.$layer.msg('手机号不能为空')
          return false;
        }
        if(!reg.test(phone)){
          this.$layer.msg('手机号格式错误')
          return false;
        }
        var that =this
        this.$axios.post('/User/addAddress',{
          token:this.$storage.session.get('token'),
          consignee:name,
          telephone:phone,
          address:details,
          is_default:0,
          province_id:this.pp,
          city_id:this.cc,
          district_id:this.xx
        }).then(res=>{
            console.log(res)
          that.$layer.msg(res.data.msg)
          location.reload(true)
        })
      },
      jiesuan(){
        var that=this
        if(!this.address.id){
          this.$layer.msg('请先添加收货地址')
          return false;
        }
        this.$axios.post('/Order/addOrder',{
          cart_type:this.cart_type,
          address_id:this.address.id,
          token:this.$storage.session.get('token'),
          source:2
        }).then(res=>{
          console.log(res)
          if(res.data.status == 1){
            var order_no = res.data.data.order_no
            that.$axios.post('/pay/toPay',{
              order_no:order_no,
              token:that.$storage.session.get('token')
            }).then(rr=>{
              if(rr.data.status==1){
                if(that.payStyle==0){
                  window.location.href='http://jingxiaoxin.123bingo.cn/api/Pay/aliPay?order_no='+rr.data.data.order_no+'&token='+that.$storage.session.get('token')
                }else if(that.payStyle==1){
                  that.$axios.post('/Pay/wxPay',{
                    order_no:rr.data.data.order_no,
                    token:that.$storage.session.get('token')
                  }).then(r=>{
                    console.log(r)
                    if(r.data.status==1){
                      that.wxpay = r.data.data.code_url
                      that.showwx = !0
                      that.judgeHasPay(rr.data.data.order_no)
                    }
                  })
                }else{
                  that.$axios.post('/Pay/certificate',{
                    pay_type:4,
                    order_no:rr.data.data.order_no
                  }).then(cc=>{
                    if(cc.data.status==1){
                      that.$router.push({path:'/Mine/OffLine',query:{order_no:rr.data.data.order_no}})
                    }
                  })
                }
              }

            })
          }else{
            that.$layer.msg(res.data.msg)
          }
        })
      },
      judgeHasPay(e){
        var that =this
        var times = 0
        this.tt = setInterval(()=>{
          times++;
          if(times>=50){
            clearInterval(this.tt)
            that.$router.push('/Mine?Myorder?mine_status=1')
          }
          console.log(e)
          this.$axios.post('/Pay/orderRequest',{
            order_no:e,
            token:this.$storage.session.get('token')
          }).then(res=>{
            console.log(res)
            if(res.data.status == 1){
              clearInterval(this.tt)
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
      hidewx(){
        clearInterval(this.tt)
        this.showwx = !1
      },
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
.addcontainer{
    position: absolute;
    width: 100%;
    height: 390px;
    overflow-y: scroll;
    -ms-overflow-style:none;
    overflow:-moz-scrollbars-none;
    left: -1px;
    top: 100%;
    background: white;
    border: 1px solid #cfcfcf;
}
.addcontainer::-webkit-scrollbar{width:0px}
.addcontainer p{
    line-height: 55px;
    border-bottom: 1px solid #cfcfcf;
    padding: 0 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
}
    .emei {
        width: 100%;
        line-height: 60px;
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

    .emei span {
        margin-left: 43px;
    }
    .emei img {
        width: 10px;
    }

    .main-con {
        width: 1170px;
        margin: 50px auto;
    }

    .main-con::after {
        height: 0;
        content: "";
        display: block;
        visibility: hidden;
        clear: both;
    }

    .a-title {
        width: 45%;
        line-height: 55px;
        border-bottom: 1px solid #cfcfcf;
        margin-bottom: 20px;
        font-size: 16px;
        color: #000;
    }

    .lineOne {
        display: flex;
        align-items: center;
    }

    .lineOne > div {
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

    .lineOne input {
        width: 80%;
        line-height: 53px;
    }

    .lineOne > div:first-child {
        margin-right: 10%;
    }

    .lineTwo {
        margin-top: 25px;
    }

    .save {
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
        cursor: pointer;
        margin: 45px 0 60px;
    }

    .cart {
        border: 1px solid #dadada;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .cart > div {
        padding: 0 26px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #dadada;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cart > div > div:first-child {
        width: 71.55%;
    }

    .cart > div > div:last-child {
        width: 28.45%;
        display: flex;
        justify-content: space-between;
    }

    .cart > div > div:last-child > p {
        text-align: center;
        flex: 1;
    }

    .cart > div > div:last-child > p:nth-child(2) {
        flex: 2;
    }

    .cart > div:last-child {
        border-bottom: none;
    }

    .cart-title {
        line-height: 50px;
        font-size: 14px;
        color: #000000;
    }

    .cart > div.cartlist {
        padding: 30px 26px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .c-left {
        display: flex;
    }

    .c-right {
        font-size: 14px;
        color: #000;
    }

    .c-img {
        margin-right: 30px;
    }

    .c-art p {
        margin-top: 15px;
        font-size: 14px;
        color: #000;
    }

    .c-art p:first-child {
        font-size: 16px;
    }

    .c-right > div {
        flex: 1;
        text-align: center;
    }

    .c-right > div.num {
        flex: 2;
    }

    .c-right > div.num > div {
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

    .pay > p {
        font-size: 14px;
        color: #000;
        margin: 40px 0;
    }

    .pays {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pays > div {
        width: 354px;
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

    .par-right > p:first-child {
        font-size: 18px;
        color: #000;
        margin-bottom: 15px;
    }

    .par-right > p:nth-child(2) {
        font-size: 14px;
        color: #666;
    }

    .par-right > p:nth-child(3) a {
        font-size: 14px;
        color: #666;
        text-decoration: underline;
    }

    .tongji {
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

    .t-top {
        height: 131px;
        padding-top: 40px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: #333;
        border-bottom: 1px solid #cecece;
        text-align: right;
    }

    .t-top > p:first-child {
        margin-bottom: 24px;
        font-size: 16px;
    }

    .t-top > p:last-child {
        font-size: 18px;
    }

    .t-top span {
        color: #ff1212;
    }

    .t-bottom {
        margin-top: 29px;
        line-height: 55px;
        text-align: center;
        color: white;
        background: #333;
        cursor: pointer;
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
        background: rgba(0,0,0,.9);
    }
    .wxpay img{
        width: 250px;
    }
    @media screen and (max-width: 1200px) {
        .main-con {
            width: 90%;
        }

        .pays > div {
            width: 30%;
        }
    }
</style>
