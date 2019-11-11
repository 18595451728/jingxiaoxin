<template>
    <div class="main-con">
        <Nav></Nav>
        <Bside></Bside>
        <div class="detail">
            <div class="d-left">
                <div class="d-grey">
                    <div class="d-white">
                        <div class="detail-swiper swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="item in list.goods_big_banner">
                                    <img :src="item.pic" width="100%" alt="">
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
            .
            <div class="d-right">
                <div class="r-con">
                    <div class="goodsname">{{list.goods_name}}</div>
                    <div class="goodsprice">¥{{list.price}}</div>
                    <div class="goodsdesc">
                        {{list.goods_desc}}
                    </div>
                    <div class="fnc">
                        <div class="goodsnum">
                            <p>数量*</p>
                            <div class="count">
                                <input type="number" placeholder="" :value="count">
                                <div class="changenum">
                                    <img src="/static/images/addNum.png" alt="" @click="plus">
                                    <img src="/static/images/reduceNum.png" alt="" @click="reduce">
                                </div>
                            </div>
                        </div>
                        <div class="goodscolor">
                            <p>过滤系统*</p>
                            <div class="yanse">
                                <div class="y-content" @click="chooseSystem"><p>{{isSystem}}</p><img src="/static/images/reduceNum.png" alt=""></div>
                                <div class="changeColor" v-if="showSystem">
                                    <p @click="is_system(1)">是</p>
                                    <p @click="is_system(0)">否</p>
                                </div>
                            </div>
                        </div>
                        <div class="goodscolor">
                            <p>压缩机制冷*</p>
                            <div class="yanse">
                                <div class="y-content" @click="chooseCold"><p>{{isCold}}</p><img src="/static/images/reduceNum.png" alt=""></div>
                                <div class="changeColor"  v-if="showCold">
                                    <p @click="is_cold(1)">是</p>
                                    <p @click="is_cold(0)">否</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="buy-btn">
                        <router-link tag="div" to="/Probation">申请试用</router-link>
                        <div @click="buynow()">立即购买</div>
                    </div>
                    <div class="comment">
                        <p class="c-title">用户评论</p>
                        <div class="c-series">
                            <div class="all-comment" :class="{chooseComments:cs==0}" @click="choose(0)">
                                <div class="choose-comment"></div>
                                <span>全部</span>
                            </div>
                            <div class="all-comment" :class="{chooseComments:cs==1}" @click="choose(1)">
                                <div class="choose-comment"></div>
                                <span>好评({{commentStatistics.rate0}})</span>
                            </div>
                            <div class="all-comment" :class="{chooseComments:cs==2}" @click="choose(2)">
                                <div class="choose-comment"></div>
                                <span>中评({{commentStatistics.rate1}})</span>
                            </div>
                            <div class="all-comment" :class="{chooseComments:cs==3}" @click="choose(3)">
                                <div class="choose-comment"></div>
                                <span>差评({{commentStatistics.rate2}})</span>
                            </div>
                        </div>
                        <div class="comment-list">
                            <div class="each-com" v-for="item in goods_comment">
                                <div class="usermes">
                                    <img :src="item.user_logo" alt="">
                                    <p>{{item.user_name}}</p>
                                </div>
                                <div class="user_comment">
                                    <p>{{item.content}}</p>
                                    <div class="comment_mes">
                                        <p>2019年06月12日 09:08</p>
                                        <p>颜色分类：黑色</p>
                                        <p>尺寸：580*340*1900H</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Nav from './Nav'
  import Bside from './Bside'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'ProductDetail',
    components: {
      Bside,
      Nav
    },
    data: function () {
      return {
        goodsid:'',
        cs: 0,
        count: 1,
        list: '',
        commentStatistics: 0,
        goods_comment:'',
        showSystem:!1,
        showCold:!1,
        isSystem:'是',
        isCold:'是',
      }
    },
    mounted () {
      this.goodsid = this.$route.query.id
      var that = this
      this.$axios.post('/Goods/goodsDetail', {
        goods_id: this.goodsid,
        token: ''
      }).then(res => {
        if (res.data.status == 1) {
          var data = res.data.data
          that.list = data.list
          that.commentStatistics = data.commentStatistics
          that.getComment(that.goods_id,0)
          that.$nextTick(function () {
            var ns = new Swiper('.detail-swiper', {
              // loop: true,
              pagination: {
                el: '.swiper-pagination',
              },
              prevButton: '.swiper-button-prev',
              nextButton: '.swiper-button-next'
            })
          })
        }
      })

    },
    methods: {
      buynow(){
        var that =this
        that.$axios.post('/Cart/addCart',{
          goods_id:this.goodsid,
          goods_num:this.count,
          cart_type:1,
          token:this.$storage.session.get('token')
        }).then(res=>{
          console.log(res)
          if(res.data.status==1){
            that.$router.push({path: '/Payment', query: {type: 1}})
          }else{
            this.$layer.msg(res.data.msg)
          }
        })

      },
      choose (e) {
        this.cs = e
        this.getComment(this.goods_id,e)
      },
      plus () {
        this.count++;
      },
      reduce () {
        if(this.count>1){
          this.count--;
        }else{
          this.$layer.msg('最少选择一件商品')
        }

      },
      getComment: function (id, rate) {
        var that =this
        this.$axios.post('/Goods/goodsComment', {
          list_row:10,
          page:1,
          is_pic:0,
          goods_id:id,
          rate:rate
        }).then(res => {
          if(res.data.status==1){
            var data = res.data.data
            console.log(data)
            that.goods_comment = data.list
          }
        })
      },
      chooseSystem(){
        this.showSystem = !this.showSystem
       },
      chooseCold(){
        this.showCold = !this.showCold
      },
      is_system(e){
        this.chooseSystem()
        this.isSystem = e==0?'否':'是'
      },
      is_cold(e){
        this.chooseCold()
        this.isCold = e==0?'否':'是'
      }
    }
  }
</script>

<style scoped>
    .main-con {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .detail {
        position: absolute;
        width: 85%;
        height: calc(100% - 150px);
        left: 7.5%;
        top: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .d-left {
        width: 43.5%;
        height: 100%;
    }

    .d-grey {
        width: 100%;
        height: 73.26%;
        background: #e7e7e7;
        margin-top: 19.53%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .d-white {
        width: 78.87%;
        height: 111.66%;
        background: #f3f3f3;
    }

    .detail-swiper, .swiper-wrapper, .swiper-slide {
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
    }

    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        background-image: url("/static/images/detail_arrow_right.png");
        background-size: 100% 100%;
    }

    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        background-image: url("/static/images/detail_arrow_left.png");
        background-size: 100% 100%;
    }

    .swiper-button-next, .swiper-button-prev {
        width: 66px;
        height: 20px;
        margin-top: -10px;
    }

    .d-right {
        width: 51.2%;
        background: #f8f8f8;
        padding-top: 150px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        overflow-y: scroll;
        /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
        -ms-overflow-style: none;
        /*火狐下隐藏滚动条*/
        overflow: -moz-scrollbars-none;
    }

    .d-right::-webkit-scrollbar {
        width: 0px
    }

    .r-con {
        width: 73.73%;
        margin-left: 8%;
    }

    .goodsname {
        font-size: 40px;
        color: #333333;
        margin-bottom: 40px;
    }

    .goodsprice {
        font-size: 36px;
        color: #505345;
        margin-bottom: 30px;
    }

    .goodsdesc {
        font-size: 14px;
        color: #969696;
        line-height: 25px;
        margin-bottom: 25px;
    }

    .fnc {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .fnc > div > p {
        font-size: 12px;
        color: #969696;
        margin-bottom: 12px;
    }

    .fnc > div.goodsnum {
        width: 15.55%;
    }

    .fnc > div.goodscolor {
        width: 37.32%;
    }

    .fnc > div.goodsspec {
        width: 37.32%;
    }

    .fnc > div > div {
        height: 70px;
        border: 1px solid #dddddd;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .fnc > div > div.count {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .fnc > div > div.count input {
        line-height: 28px;
        height: 28px;
        text-align: center;
        font-size: 18px;
        color: #6d6d6d;
        width: 60%;
    }

    .changenum {
        width: 40%;
    }

    .changenum img {
        display: block;
        margin: 14px 0;
        cursor: pointer;
    }

    .fnc > div > div.yanse {
        width: 100%;
        position: relative;
    }
    .changeColor{
        position: absolute;
        left: -1px;
        top:100%;
        width: calc(100% + 2px);
        line-height: 50px;
        background: #fff;
        border: 1px solid #ddd;
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .changeColor p{
        cursor: pointer;
        color: #969696;
        font-size: 14px;
    }

    .y-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 68px;
        color: #969696;
        font-size: 14px;
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;
    }


    .big {
        text-align: center;
        line-height: 68px;
        color: #969696;
        font-size: 14px;
    }

    .buy-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 45px;
    }

    .buy-btn > div {
        width: 46.65%;
        font-size: 14px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
    }

    .buy-btn > div:first-child {
        border: 1px solid #dddddd;
        color: #969696;
        line-height: 68px;
    }

    .buy-btn > div:last-child {
        border: 2px solid #040707;
        color: #040707;
        line-height: 66px;
    }

    .comment {
        margin-top: 85px;
    }

    .c-title {
        margin-bottom: 45px;
        font-size: 16px;
        color: #333333;
    }

    .c-series {
        margin-bottom: 23px;
        display: flex;
        align-items: center;
    }

    .c-series > div {
        display: flex;
        align-items: center;
        margin-right: 35px;
        cursor: pointer;
    }

    .c-series > div span {
        color: #9c9c9c;
        margin-left: 5px;
        font-size: 14px;
    }

    .c-series > div.chooseComments span {
        color: #333;
    }

    .choose-comment {
        width: 14px;
        height: 14px;
        background: #dcdcdc;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        position: relative;
    }

    .all-comment.chooseComments > div {
        color: #333333;
    }

    .all-comment.chooseComments > div::after {
        display: block;
        content: "";
        width: 8px;
        height: 8px;
        background: #333333;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        position: absolute;
        left: 3px;
        top: 3px;
    }

    .comment-list {

    }

    .each-com {
        padding: 17px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #ececec;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .usermes {
        width: 48px;
    }

    .usermes > img {
        width: 100%;
    }

    .usermes p {
        font-size: 12px;
        color: #333;
        text-align: center;
        margin-top: 5px;
    }

    .user_comment {
        width: 85%;
    }

    .user_comment > p {
        color: #686565;
        font-size: 14px;
    }

    .comment_mes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }

    .comment_mes {
        font-size: 12px;
        color: #9d9d9d;
    }

    @media screen and (max-width: 1400px) {
        .detail {
            width: 90%;
            left: 5%;
        }
    }

    @media screen and (max-width: 1200px) {
        .d-left {
            width: 38.5%;
        }

        .d-right {
            width: 57%;
        }

        .detail {
            width: 90%;
            left: 5%;
        }
    }

    @media screen and (max-width: 1100px) {
        .r-con {
            width: 85%;
        }
    }
</style>
