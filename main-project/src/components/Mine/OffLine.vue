<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" alt=""><span>我的订单</span></div>
        <div class="main-con">
            <div class="refund">
                <div class="voucher">
                    <div>上传凭证</div>
                    <p>请认准以下账户打款，然后填写打款人的户名和账户，并拍照上传转账凭证收款账户</p>
                </div>
                <div class="account">
                    <div>收款账户</div>
                    <p>户名：净小新净水器</p>
                    <p>账户：123231245253432525325</p>
                    <p>开户银行：中国工商银行杭州开元银行</p>
                </div>
                <div class="PayInfo">
                    <p>支付信息</p>
                    <div>
                        <p>*支付金额：</p>
                        <div class="kuang"><input type="text" ref="money"></div>
                    </div>
                    <div>
                        <p>*账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户：</p>
                        <div class="kuang"><input type="text" ref="account"></div>
                    </div>
                    <div>
                        <p>*姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</p>
                        <div class="kuang"><input type="text" ref="username"></div>
                    </div>
                    <div>
                        <p></p>
                        <div class="upload">
                            <img src="/static/images/add.png" alt="">
                            <p>上传凭证</p>
                            <p>（最多1张）</p>
                            <input type="file" @change="uploadImgs">
                        </div>

                    </div>
                    <div>
                        <p></p>
                        <div v-for="item in imgs" class="imglist">
                            <img :src="item" alt="">
                        </div>
                    </div>
                    <div class="send" @click="sendCer">提交</div>
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
    name: 'OffLine',
    components:{
      Nav,
      Bside
    },
    data:function () {
      return {
        service:0,
        backstatus:0,
        imgs:[],
        pic:''
      }
    },
    mounted(){
      this.order_no = this.$route.query.order_no
    },
    methods:{
      sendCer(){
        var money=this.$refs.money.value,account=this.$refs.account.value,username=this.$refs.username.value,that=this
        if(!money){
          this.$layer.msg('支付金额不能为空')
          return false;
        }
        if(!account){
          this.$layer.msg('账号不能为空')
          return false;
        }
        if(!username){
          this.$layer.msg('姓名不能为空')
          return false;
        }
        this.$axios.post('/order/certificate',{
          token:this.$storage.session.get('token'),
          order_no:this.order_no,
          money:money,
          username:username,
          account:account,
          certificate:this.pic
        }).then(res=>{
          if(res.data.status==1){
            that.$layer.msg('上传成功')
            var order_no = res.data.data.order_no
            setTimeout(()=>{
              that.$router.push({path:'',query:{order_no:order_no}})
            },1000)
          }
        })
      },
      changeService(e){
        this.service = e
      },
      changeStatus(e){
        this.backstatus = e
      },
      uploadImgs(e){
        if(this.imgs.length>=1){
          this.$layer.msg('最多上传一张')
          return false;
        }
        var that =this
        console.log(e.target.files[0])
        var file = e.target.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
          console.log(reader.result)
          that.$axios.post('/Index/uploadImg',{
            img_str:reader.result,
            path:'certificate'
          }).then(res=>{
            if(res.data.status==1){
              that.imgs.push(reader.result)
              that.pic = res.data.data.pic
            }
          })
        }
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
        width: 1400px;
        height: calc(100% - 220px);
        position: absolute;
        left: calc(50% - 700px);
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
        padding: 25px 40px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        overflow-y: scroll;        /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
        -ms-overflow-style:none;
        /*火狐下隐藏滚动条*/
        overflow:-moz-scrollbars-none;
    }
    .refund::-webkit-scrollbar{width:0px}
    .voucher{
        width: 100%;
        padding: 25px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 2px solid #e8e8e8;
    }
    .voucher div{
        margin-bottom: 20px;
        font-size: 16px;
        color: #000000;
    }
    .voucher p{
        font-size: 14px;
        color: #ababab;
    }
    .account{
        padding: 33px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 2px solid #e8e8e8;
    }
    .account div{
        font-size: 16px;
        color: #000000;
        margin-bottom: 23px;
    }
    .account p{
        font-size: 14px;
        color: #3c3c3c;
        margin: 23px 0 10px;
    }
    .PayInfo{
        padding: 33px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .PayInfo>p{
        font-size: 16px;
        color: #000;
        margin-bottom: 28px;
    }
    .PayInfo>div{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .PayInfo>div>p{
        width: 80px;
        font-size: 14px;
        color: #545454;
    }
    .kuang{
        width: 48%;
        border: 1px solid #cfcfcf;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 2%;
    }
    .kuang input{
        line-height: 53px;
        width: 80%;
    }
    .upload{
        width: 120px;
        height: 120px;
        text-align: center;
        border: 1px solid #bfbfbf;
        cursor: pointer;
        margin-top: 20px;
        position: relative;
    }
    .upload p{
        color: #ababab;
        font-size: 14px;
    }
    .upload img{
        margin: 25px 0 10px;
    }
    .upload input{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
    }
    .imglist{
        width: 120px;
        height: 120px;
        margin-bottom: 75px;
        margin-right: 10px;
    }
    .imglist img{
        width: 100%;
        height: 100%;
    }
    .PayInfo>div.send{
        display: block;
        width: 215px;
        line-height: 50px;
        border: 1px solid #0099cc;
        background: #0099cc;
        color: white;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        margin-left: 80px;
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
