<template>
    <div class="payment">
        <Nav></Nav>
        <div class="emei"><img src="/static/images/back.png" @click="back" alt=""><span>支付</span></div>
        <div class="changeAddress" v-show="exchangeAddress">
            <div class="main">
                <div class="c-title">
                    <p>更换收货地址</p>
                    <img src="/static/images/close.png" @click="exchange" alt="">
                </div>
                <table>
                    <thead>
                    <tr>
                        <td>收货人</td>
                        <td class="address">收货地址</td>
                        <td class="tel">联系电话</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in alist">
                        <td>{{item.consignee}}</td>
                        <td class="address">{{item.province}}{{item.city}}{{item.district}}{{item.address}}</td>
                        <td class="tel">{{item.telephone}}</td>
                        <td class="moren"><span @click="chooseMoren(index,1)">更换</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="changeAddress" v-show="editAddress">
            <div class="main">
                <div class="c-title">
                    <p>添加收货地址</p>
                    <img src="/static/images/close.png" @click="exit" alt="">
                </div>
                <div class="c-con">
                    <div class="name">
                        <p><span>*</span>收货人</p>
                        <div class="contain">
                            <input type="text" v-model="username" placeholder="请输入收货人姓名">
                        </div>
                    </div>
                    <div class="name">
                        <p><span>*</span>收货地址</p>
                        <div class="contain" @click="getProvince(0)">
                            <input type="text" v-model="content" readonly style="cursor: pointer;" placeholder="请选择收货地址">
                            <img src="/static/images/arrow-bottom.png" alt="">
                            <div class="addresslist" v-if="showaddress">
                                <p v-for="item in provinceList" @click.stop="getMessage(item.id,item.name)">{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="name">
                        <p><span>*</span>详细地址</p>
                        <div class="contain">
                            <input type="text" v-model="details" placeholder="请输入详细地址">
                        </div>
                    </div>
                    <div class="name">
                        <p><span>*</span>手机号码</p>
                        <div class="contain">
                            <input type="number" v-model="telephone" placeholder="请输入手机号">
                        </div>
                    </div>
                    <div class="sure" @click="sure">确定</div>
                </div>
            </div>
        </div>
        <div class="main-con">
            <div class="a-right">
                <table>
                    <thead>
                    <tr>
                        <td>收货人</td>
                        <td class="address">收货地址</td>
                        <td class="tel">联系电话</td>
                        <td class="fnc">操作</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in morenaddress">
                        <td>{{item.consignee}}</td>
                        <td class="address">{{item.province}}{{item.city}}{{item.district}}{{item.address}}</td>
                        <td class="tel">{{item.telephone}}</td>
                        <td class="fnc"><span @click="edit(item)">修改</span>|<span @click="chooseAddress(index)">选择地址</span></td>
                        <td class="moren"><span @click="chooseMoren(index)" :class="{grey:item.is_default==0}">默认地址</span></td>
                    </tr>
                    </tbody>
                </table>
                <div class="addAddress" @click="add">+新增收货地址</div>
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
        tt:'',
        alist:'',
        editAddress:!1,
        exchangeAddress:!1,
        username:'',
        content:'',
        telephone:'',
        provinceList:'',
        morenaddress:[]
      }
    },
    mounted () {
      this.initAddress()
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

          if(that.list.length==0){
            that.$layer.msg('订单已生成，再看看其他的吧')
            setTimeout(()=>{
              that.$router.push('/Product')
            },1500)
          }
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
      getProvince(e){
        this.showaddress = !this.showaddress
        if(this.showaddress){
          this.getMessage(e)
        }else{
          this.provinceId = ''
          this.province = ''
          this.cityId=''
          this.city=''
          this.areaId = ''
          this.area = ''
          this.level = 0
        }
      },
      getMessage(e,name){
        console.log(name,this.level)
        this.level++;
        switch (this.level) {
          case 2 :
            this.provinceId = e
            this.province = name
            break;
          case 3 :
            this.cityId=e
            this.city=name
            break;
          case 4 :
            this.areaId = e
            this.area = name
            break;
        }
        if(this.level >= 4){
          this.showaddress = !1
          this.level = 0
          this.content = this.province+' '+this.city+' '+this.area
          return false;
        }
        var that =this
        this.$axios.post('/Index/getRegion', {
          parent_id: e
        }).then(res => {
          console.log(res)
          if(res.data.status==1){
            that.provinceList = res.data.data
          }
        })
      },
      add(){
        this.editAddress = !0
        this.isEdit = !1
        this.chooseId = ''
        this.choosedAdress = ''
        this.username = ''
        this.details = ''
        this.telephone = ''
        this.provinceId = ''
        this.cityId = ''
        this.areaId = ''
        this.content = ''
      },
      chooseMoren(i,m){
        var that=this
        this.$axios.post('/User/defaultAddress',{
          token:this.$storage.session.get('token'),
          address_id: m ? this.alist[i].id : i || i == 0 ? this.morenaddress[i].id : this.chooseId
        }).then(res=>{
          console.log(res)
          this.exchangeAddress = !1
          that.$layer.msg(res.data.msg)
          if(res.data.status==1){
            that.initAddress()
          }
        })
      },
      edit(e){
        console.log(e)
        this.editAddress = !0
        this.isEdit = !0
        this.chooseId = e.id
        this.choosedAdress = e
        this.username = e.consignee
        this.details = e.address
        this.telephone = e.telephone
        this.provinceId = e.province_id
        this.cityId = e.city_id
        this.areaId = e.district_id
        this.content = e.province+e.city+e.district
      },
      exit(){
        this.editAddress = !1
      },
      exchange(){
        this.exchangeAddress = !1
      },
      sure(){
        var username =this.username,content=this.content,details=this.details,telephone=this.telephone,reg = /^1[3456789]\d{9}$/
        if(!username){
          this.$layer.msg('姓名不能为空')
          return false;
        }
        if(!content){
          this.$layer.msg('地址不能为空')
          return false;
        }
        if(!details){
          this.$layer.msg('详细地址不能为空')
          return false;
        }

        if(!telephone){
          this.$layer.msg('手机号不能为空')
          return false;
        }
        if(!reg.test(telephone)){
          this.$layer.msg('手机号格式错误')
          return false;
        }
        var that =this
        var data ={
          token:this.$storage.session.get('token'),
          consignee:username,
          telephone:telephone,
          address:details,
          is_default:0,
          province_id:this.provinceId,
          city_id:this.cityId,
          district_id:this.areaId
        }
        if(this.isEdit){
          data.address_id = this.chooseId
        }
        this.$axios.post('/User/addAddress',data).then(res=>{
          console.log(res)
          // that.$layer.msg(res.data.msg)
          that.editAddress = !1
          that.chooseMoren()
        })
      },
      chooseAddress(e){
        this.exchangeAddress = !0
      },
      initAddress(){
        var that =this
        this.$axios.post('/User/addressList',{
          token:this.$storage.session.get('token')
        }).then(res=>{
          console.log(res)
          if(res.data.status==1){
            that.alist = res.data.data.list
            var morenaddress = []
            for(var i in that.alist){
              morenaddress[0] = that.alist[i].is_default ? that.alist[i] : that.alist[0]
            }
            that.morenaddress = morenaddress
            console.log(that.morenaddress)
          }
        })
      },

      changeStyle(e){
        this.payStyle = e
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

    .payment{
        /*font-family: pfb;*/
    }
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
        /*font-family: pfb;*/
    }

    .main-con::after {
        height: 0;
        content: "";
        display: block;
        visibility: hidden;
        clear: both;
    }
    .a-right{
        width: 100%;
        margin-bottom: 50px;
    }
    table{
        width: 100%;
        font-size: 16px;
        color: #000000;
        border-collapse: collapse;
        border: 1px solid #ccc;
    }
    .changeAddress table{
        width: 90%;
        margin: 30px auto;
    }
    table tr{
        line-height: 50px;
        border-bottom: 1px solid #cccccc;
    }
    table tbody{
        font-size: 16px;
    }
    table tbody tr td{
        padding: 15px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    table tr td:first-child{
        padding-left: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .tel,.fnc,.moren{
        text-align: center;
    }

    table tbody .fnc{
        color: #bbbbbb;
    }
    .fnc span{
        margin: 0 5px;
        vertical-align: middle;
        cursor: pointer;
    }

    .moren span{
        display: block;
        padding: 7.5px 15px;
        border: 1px solid #0099cc;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 25px;
        color: #0099cc;
        width: 70%;
        margin: 0 auto;
        cursor: pointer;
        font-size: 14px;
    }
    .moren span.grey{
        color: #bbb;
        border-color: #bbb;
    }
    .address{
        width: 23.5%;
        line-height: 30px;
    }
    .addAddress{
        margin-top: 33px;
        text-align: right;
        margin-right: 10px;
        font-size: 16px;
        color: #0099cc;
        cursor: pointer;
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
        align-items: center;
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


    .changeAddress{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.21);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }
    .main{
        width: 810px;
        height: 710px;
        background: #fff;
    }
    .c-title{
        line-height: 70px;
        padding: 0 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        color: #221815;
    }
    .c-title img{
        width: 20px;
        cursor: pointer;
    }
    .c-con{
        padding: 15px 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c-con>div{
        margin-top: 30px;
        font-size: 16px;
        color: #9fa0a0;
    }
    .c-con>div.sure{
        width: 215px;
        line-height: 50px;
        text-align: center;
        background: #0099cc;
        color: white;
        font-size: 16px;
        margin: 30px auto 0;
        cursor: pointer;
    }
    .c-con>div>p span{
        color: #e60012;
        font-size: 18px;
    }
    .contain{
        margin-top: 20px;
        height: 50px;
        border: 1px solid #dddddd;
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        position: relative;
    }
    .contain input{
        line-height: 48px;
        width: 100%;
        padding-right: 50px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .addresslist{
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
        z-index: 9;
    }
    .addresslist::-webkit-scrollbar{width:0px}
    .addresslist p{
        line-height: 55px;
        border-bottom: 1px solid #cfcfcf;
        padding: 0 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;
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
