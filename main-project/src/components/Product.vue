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
                <div class="pro_left">
                    <div class="pro_name">{{item.goods_name}}</div>
                    <div class="pro_name">{{item.goods_code}}</div>
                    <p v-for="items in item.goods_param">
                        <span>{{items.key}}：</span>
                        <span>{{items.value}}</span>
                    </p>
                </div>
                <div class="pro_right">
                    <img :src="item.goods_logo" alt="">
                    <p @click="goDetail(item.id)">查看详情</p>
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
        min-height: 460px;
        margin-bottom: 36px;
    }
    .pro_left{
        width: 295px;
        padding: 25px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #f8f8f8;
    }
    .pro_left p{
        line-height: 30px;
        display: flex;
        font-size: 15px;
        color: #a9a9a9;
    }
    .pro_left p span:first-child{
        width: 100px;
    }
    .pro_left p span:last-child{
        color: #333333;
    }
    .pro_name{
        color: #0099cc;
        font-size: 18px;
        margin-bottom: 15px;
        font-weight: bold;
    }
    .pro_name:first-child{
        margin-bottom: 0;
    }
    .pro_right {
        width: 330px;
        text-align: center;
    }

    .pro_right img {
        margin-bottom: -20px;
    }

    .pro_right p{
        width: 130px;
        margin: 0 auto;
        height: 45px;
        text-align: center;
        line-height: 39px;
        font-size: 16px;
        color: #333333;
        border: 3px solid #8d8d8d;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;
        font-family: pfb;
    }
    .pro_right p:hover{
        color: #0095c6;
        border: 3px solid #0095c6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    @media screen and (max-width: 1200px) {

    }

    @media screen and (max-width: 1100px) {

    }
</style>
