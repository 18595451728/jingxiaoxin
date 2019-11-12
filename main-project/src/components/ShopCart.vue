<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" alt=""><span>购物车</span></div>
        <div class="main-con">
            <div class="cart">
                <div class="cart-title">
                    <div>产品名称</div>
                    <div>
                        <p>价钱</p>
                        <p>数量</p>
                        <p>总价</p>
                    </div>
                </div>
                <div class="cartlist" v-for="(item,index) in clist">
                    <div class="c-left">
                        <div class="c-img"><img :src="item.goods_logo" width="100" height="130" alt=""></div>
                        <div class="c-art">
                            <p>{{item.goods_name}}</p>
                            <p>颜色：高级灰</p>
                            <p>尺寸：1500mm</p>
                        </div>
                    </div>
                    <div class="c-right">
                        <div class="price">¥{{item.goods_price}}</div>
                        <div class="num">
                            <div>
                                <div class="add" @click="reduceNum(index)">-</div>
                                <div>{{item.goods_num}}</div>
                                <div class="reduce" @click="addNum(index)">+</div>
                            </div>
                        </div>
                        <div class="allprice">¥{{item.goods_fee.toFixed(2)}}</div>
                        <img src="/static/images/delete.png" class="delete" @click="deleteItem(index)" alt="">
                    </div>
                </div>
            </div>
            <div class="btns">
                <div class="d-left">
                    <div @click="deleteAll">清除购物车</div>
                    <div>查看订单</div>
                </div>
                <div class="d-right">结算</div>
            </div>
        </div>

    </div>
</template>

<script>
  import Nav from './Nav'
  import Bside from './Bside'
  export default {
    name: 'ShopCart',
    components:{
      Bside,
      Nav
    },
    data:function () {
      return {
        clist:[]
      }
    },
    mounted () {
        this.initCart()
    },
    methods:{
      initCart(){
        var that =this
        that.$axios.post('/Cart/cartList',{
          token:that.$storage.session.get('token')
        }).then(res=>{
            console.log(res)
          if(res.data.status==1){
            that.clist = res.data.data.cartList
          }
        })
      },
      deleteItem(index){
        var cart_id = [this.clist[index].id]
        this.deleteCart(cart_id)
      },
      deleteAll(){
        var cart_id = []
        for(var i=0;i<this.clist.length;i++){
          cart_id.push(this.clist[i].id)
        }
        this.deleteCart(cart_id)
      },
      deleteCart(cart_id){
        var that=this
        this.$axios.post('/Cart/delCart',{
          cart_id:cart_id,
          token:this.$storage.session.get('token')
        }).then(res=>{
          console.log(res)
          if(res.data.status==1){
            that.$layer.msg('删除成功')
            that.initCart()
          }
        })
      },
      addNum(index){
        this.clist[index].goods_num++;
        this.editNum(index)
      },
      reduceNum(index){
        if(this.clist[index].goods_num<=1){
          this.$layer.msg('最少购买一件商品')
          return false;
        }
        this.clist[index].goods_num--;
        this.editNum(index)
      },
      editNum(index){
        var that =this
        that.$axios.post('/Cart/editCart',{
          token:this.$storage.session.get('token'),
          goods_num:this.clist[index].goods_num,
          cart_id:this.clist[index].id
        }).then(res=>{
          console.log(res)
          if(res.data.status==1){
            that.clist[index].goods_fee = this.clist[index].goods_num*this.clist[index].goods_price
          }
        })
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
        width: 1170px;
        margin: 70px auto;
    }
    .cart{
        border: 1px solid #dadada;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .cart>div{
        padding: 0 42px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #dadada;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cart>div>div:first-child{
        width: 71.55%;
    }
    .cart>div>div:last-child{
        width: 28.45%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    .add,.reduce{
        width: 39px;
        color: #fff;
        cursor: pointer;
    }
    .add{
        background: #dcdcdc;
    }
    .reduce{
        background: #333;
    }
    .delete{
        cursor: pointer;
    }
    .btns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    }
    .d-left{
        width: 520px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .d-left div{
        width: 240px;
        line-height: 50px;
        text-align: center;
        color: #000;
        border: 1px solid #b8b8b8;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
        cursor: pointer;
    }
    .d-right{
        width: 240px;
        line-height: 50px;
        text-align: center;
        background: #333;
        color: white;
        border: 1px solid #b8b8b8;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
        cursor: pointer;
    }
    @media screen and (max-width: 1200px){
        .main-con{
            width: 95%;
        }
        .c-right>div.num>div{
            width: 100px;
            line-height: 30px;
        }
        .add,.reduce{
            width: 30px;
        }
    }
   </style>
