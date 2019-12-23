<template>
    <div>
        <Nav></Nav>
        <div class="no_product" v-if="nogoods">
            <div>
                <img src="/static/images/no_product.png" alt="">
                <p><img src="/static/images/nogoods.png" alt=""></p>
            </div>
        </div>
        <div class="product" v-else>
            <div class="pro" v-for="item,index in products">
                <div class="pro_right">
                    <div class="pro_name">{{item.goods_name}}</div>
                    <div class="pro_name">{{item.goods_code}}</div>
                    <img src="/static/images/products.png" alt="">
                    <p @click="goDetail(item.id)">查看详情</p>
                </div>
                <div class="pro_left">
                    <div class="g_price"><span>￥</span>{{item.cost_price}}</div>
                    <p v-for="items in item.goods_param">
                        <span>{{items.key}}：</span>
                        <span>{{items.value}}</span>
                    </p>
                    <div class="fnc">
                        <div @click="tryUse(item.id)" class="try">申请试用</div>
                        <div @click="toBuy(item.id)" class="buyNow">立即购买</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
  import Nav from './Nav'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'Product',
    components: {
      Nav
    },
    data: function () {
      return {
        products: [],
        keyword: '',
        nogoods: ''
      }
    },
    mounted () {
      this.keyword = this.$route.query.keyword
      var that = this
      console.log(this.keyword)
      this.$axios.post('/Goods/goodsList', {
        list_row: 100,
        page: 1,
        keyword: this.keyword
      }).then(res => {
        console.log(res.data.data.list)
        if (res.data.status == 1) {
          if (res.data.data.list.length == 0) {
            that.nogoods = !0
            return false
          }
          var list = res.data.data.list
          that.products = list
        }

      })

    },
    methods: {
      tryUse(e){
        this.$router.push({
          path: '/Probation',
          query: {
            id: e
          }
        })
      },
      toBuy(e){
        this.$router.push({
          path: '/ProductDetail',
          query: {
            id: e
          }
        })
      },
      toshow (e) {
        this.$router.push({
          path: '/ProductShow',
          query: {
            id: e
          }
        })
      },
      goDetail(e){
        console.log(e)

        this.$router.push({
          path:'/Advantage',
          query:{
            id:0,
            goods_id:e
          }
        })
      }
    }
  }
</script>

<style scoped>

    .no_product {
        text-align: center;
        position: absolute;
        left: 0;
        top: 70px;
        width: 100%;
        height: calc(100% - 70px);
        z-index: 8;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .no_product > div > img {
        margin-bottom: 60px;
    }


    .product {
        width: 1300px;
        margin: 80px auto 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .pro{
        display: flex;
        justify-content: space-between;
        border: 2px solid #e2e1e1;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 530px;
        margin-bottom: 36px;
    }
    .pro_left{
        width: 330px;
        min-height: 530px;
        padding: 25px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #f8f8f8;
        position: relative;
    }
    .g_price{
        font-size: 40px;
        color: #191919;
        font-family: noodle;
        margin-bottom: 10px;
        padding-left: 25px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

    }
    .g_price span{
        font-size: 22px;
    }
    .pro_left p{
        line-height: 32px;
        display: flex;
        font-size: 16px;
        color: #a9a9a9;
        font-family: pfb;
        padding-left: 25px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .pro_left p span:first-child{
        width: 100px;
    }
    .pro_left p span:last-child{
        color: #333333;
    }
    .pro_name{
        color: #0099cc;
        font-size: 20px;
        margin-bottom: 25px;
       font-family: pfb;
    }
    .pro_name:first-child{
        margin-bottom: 0;
    }
    .pro_right {
        width: 295px;
        text-align: center;
        padding-top: 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
    }

    .pro_right img {
        margin-bottom: 35px;
    }

    .pro_right p{
        position: absolute;
        width: 130px;
        margin: 0 auto;
        height: 45px;
        text-align: center;
        line-height: 39px;
        font-size: 16px;
        color: #0095c6;
        border: 2px solid #0095c6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;
        font-family: pfb;
        left: 50%;
        margin-left: -65px;
        bottom: 25px;
    }
    .fnc div:hover{
        color: #0095c6;
        border: 2px solid #0095c6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .fnc{
        position: absolute;
        bottom: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 280px;
        margin-top: 25px;
        font-family: pfb;
    }
    .fnc>div{
        cursor: pointer;
        width: 130px;
        line-height: 41px;
        text-align: center;
        border: 2px solid #333333;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 16px;
        color: #333333;
    }
    @media screen and (max-width: 1300px) {
        .product{
            width: 1200px;
        }
        .pro_left{
            width: 310px;
            padding: 25px 15px;
        }
        .pro_right{
            width: 270px;
        }
    }

    @media screen and (max-width: 1200px) {
        .product{
            width: 900px;
            margin: 36px auto;
        }
        .pro{
            width: 900px;
            margin: 0 auto 36px;
        }
        .pro_right{
            width: 50%;
        }
        .pro_left{
            width: 50%;
            padding: 25px;
        }
        .fnc{
            width: calc(100% - 50px);
            justify-content: flex-start;
        }
        .fnc>div:first-child{
            margin-right: 50px;
        }
    }
</style>
