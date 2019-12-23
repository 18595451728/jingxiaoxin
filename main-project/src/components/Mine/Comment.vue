<template>
    <div>
        <Nav></Nav>
        <div class=""><img src="/static/images/back.png" @click="back" alt=""><span>我的订单</span></div>
        <div class="main-con">
            <div class="refund">
                <div v-for="(item,index) in goodlist.list">
                    <div class="backmes">
                        <p>退款商品：</p>
                        <img :src="item.goods_pic" width="100" height="130" alt="">
                        <p><span>{{item.goods_name}}</span>    颜色：高级灰   尺寸：1500mm</p>
                    </div>
                    <div class="backdes">
                        <p style="margin-top: 0;line-height: 24px">整体评价：</p>
                        <img v-for="(items,index1) in 5" @click="chooseStars(index,index1)" :src="content[index].star>=index1 ? '/static/images/star-blue.png' : '/static/images/star-grey.png'" style="margin-right: 10px;cursor: pointer;" alt="">
                    </div>
                    <div class="backdes">
                        <p>产品评价：</p>
                        <div>
                            <textarea name="desc" id="desc" v-model="content[index].desc" @input="countNum(index)" maxlength="200" placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧"></textarea>
                            <p>{{content[index].descNum}}/200</p>
                        </div>
                    </div>
                    <div class="backimgs">
                        <p>上传照片：</p>
                        <div>
                            <img src="/static/images/add.png" alt="">
                            <p>上传凭证</p>
                            <p>（最多3张）</p>
                            <input type="file" @change="uploadImg($event,index)">
                        </div>
                    </div>
                    <div class="imgsss">
                        <p style="opacity: 0">巴拉巴拉：</p>
                        <div>
                            <img v-for="item in content[index].imgs" :src="item" width="120" height="120" alt="">
                        </div>
                    </div>
                </div>
                <div class="send">
                    <p style="opacity: 0">巴拉巴拉：</p>
                    <div @click="send">提交</div>
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
    name: 'Comment',
    components:{
      Nav
    },
    data:function () {
      return {
        service:0,
        backstatus:0,
        goodlist:'',
        order:'',
        order_no:'',
        goodid:'',
        goodinfo:'',
        imgs:[],
        pics:[],
        reason:'',
        price:'',
        desc:'',
        descNum:0,
        star:-1,


        content:[]
      }
    },
    mounted(){
      this.order_no = this.$route.query.item.order_no
      console.log(this.order_no)
      this.initData()
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      chooseStars(idx,i){
        this.content[idx].star = i
        console.log(this.content)
      },
      countNum(index){
        this.content[index].descNum = this.content[index].desc.length
        console.log(this.content)
      },
      send(){
        var that =this
        console.log(this.content)
        var newarr = []
        for(var i=0;i<this.content.length;i++){
          newarr.push({
            desc_star : this.content[i].star+1,
            content : this.content[i].desc,
            slide_img : this.content[i].pics.join(','),
            is_name:!1
          })
        }
        console.log(newarr)
        this.$axios.post('/Order/commentOrder',{
          order_no:this.order_no,
          token:this.$storage.session.get('token'),
          data:newarr
        }).then(res=>{
          console.log(res)
          that.$layer.msg(res.data.msg)
          if(res.data.status==1){
            setTimeout(()=>{
              that.$router.push('/Mine/Myorder?mine_status=1')
            },1000)
          }
        })
      },
      uploadImg(e,index){
        if(this.content[index].imgs.length>=3){
          this.$layer.msg('最多上传三张')
          return false;
        }
        var that =this
        console.log(e.target.files[0])
        var file = e.target.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
          that.$axios.post('/Index/uploadImg',{
            img_str:reader.result,
            path:'refund'
          }).then(res=>{
            if(res.data.status==1){
              that.content[index].imgs.push(reader.result)
              that.content[index].pics.push(res.data.data.pic)
            }
          })
        }
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
            for(var i=0;i<that.goodlist.list.length;i++){
              that.content.push({
                star:-1,
                desc:'',
                slide_img:'',
                descNum:0,
                imgs:[],
                pics:[]
              })
            }
            console.log(that.content)
          }else{
            that.$layer.msg(res.data.msg)
          }
        })
      }
    }
  }
</script>

<style scoped>
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
    . span{
        margin-left: 43px;
    }
    .main-con{
        width: 1400px;
        height: calc(100% - 130px);
        position: absolute;
        left: calc(50% - 700px);
        top: 130px;
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
    .refund>div>div{
        display: flex;
        margin-bottom: 35px;
    }
    .refund>div>div.imgsss div{
        display: flex;
        flex-wrap: wrap;
    }
    .refund>div>div.imgsss img{
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .refund>div>div>p{
        font-size: 14px;
        color: #000;
        margin-right: 20px;
    }
    .send{
        display: flex;
        margin-bottom: 35px;

    }
    .send>p{
        font-size: 14px;
        color: #000;
        margin-right: 20px;
    }
    .refund>div.send>div{
        display: block;
        text-align: center;
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
        position: relative;
    }
    .backimgs div p{
        color: #ababab;
        font-size: 14px;
    }
    .backimgs div img{
        margin: 25px 0 10px;
    }
    .backimgs>div input{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
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
            width: 94%;
            left: 3%;
        }
        .orderdetail {
            width: 31%;
        }
    }
    @media screen and (max-width: 1200px){

        .orderdetail {
            width: 34%;
        }
        .refund{
            width: 63%;
        }
    }
</style>
