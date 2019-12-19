<template>
    <div>
        <Nav></Nav>
        <!--<div class="bgzi">-->
            <!--<img src="/static/images/bgzi.png" alt="">-->
        <!--</div>-->
        <div class="swiper-container product">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src="introPic" class="show" alt="">
                    <div class="upDown" @click="nextSlide(1)">
                        <img src="/static/images/upDown.png" alt="">
                    </div>
                </div>
                <!--<div class="swiper-slide" v-for="(item,index) in advantage" :style="{background:'url('+item.param_pic+') center center no-repeat'}">-->
                <div class="swiper-slide" v-for="(item,index) in advantage">
                    <div class="advantage" v-if="index%2==1">
                        <div class="upDown downUp" @click="prevSlide(index)">
                            <img src="/static/images/upDown.png" alt="">
                        </div>
                        <div class="upDown" @click="nextSlide(index+2)">
                            <img src="/static/images/upDown.png" alt="">
                        </div>
                        <div class="a-con">
                            <img src="" width="49%" alt="">
                            <div class="a-right" :class="{'animated':idx==index,'bounceInRight':idx==index}">
                                <div class="tt">
                                    <div class="t-num">{{index+1}}</div>
                                    <div>
                                        <p class="t-name">{{item.param_name}}</p>
                                        <p class="t-desc">{{item.subtitle}}</p>
                                    </div>
                                </div>
                                <div class="t-intro" v-html="item.param_content"></div>
                                <div style="margin-top: 25px;display: flex;align-items: center">
                                    <div class="t-buy" @click="tobuy">点击购买</div>
                                    <div class="t-buy" @click="tryUse">申请试用</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="advantage advantage-odd" v-else>
                        <div class="upDown downUp" @click="prevSlide(index)">
                            <img src="/static/images/upDown.png" alt="">
                        </div>
                        <div class="upDown" @click="nextSlide(index+2)">
                            <img src="/static/images/upDown.png" alt="">
                        </div>
                        <div class="a-con">
                            <div class="a-right" :class="{'animated':idx==index,'bounceInLeft':idx==index}">
                                <div class="tt">
                                    <div class="t-num">{{index+1}}</div>
                                    <div>
                                        <p class="t-name">{{item.param_name}}</p>
                                        <p class="t-desc">{{item.subtitle}}</p>
                                    </div>
                                </div>
                                <div class="t-intro" v-html="item.param_content"></div>
                                <div style="margin-top: 25px;display: flex;align-items: center">
                                    <div class="t-buy" @click="tobuy">点击购买</div>
                                    <div class="t-buy" @click="tryUse">申请试用</div>
                                </div>
                            </div>
                            <img src="" width="49%"  alt="">
                        </div>
                    </div>
                    <div style="position:absolute;width:100%;height: 100%;display: flex;align-items: center;justify-content: center; left: 0;top: 0;z-index: -1"><video :src="item.param_pic" autoplay muted loop width="100%"></video></div>
                </div>
                <div class="swiper-slide">
                    <div class="upDown downUp" @click="prevSlide(7)">
                        <img src="/static/images/upDown.png" alt="">
                    </div>
                    <div class="upDown" @click="back">
                        <img src="/static/images/lastBack.png" width="35" alt="">
                    </div>
                    <img src="/static/images/last.png" class="last" alt="">
                    <div class="lxfs">
                        <p>净小新的服务</p>
                        <p>全国服务热线: 400-080-5680</p>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
  import Nav from './Nav'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: 'Advantage',
    components: {
      Nav
    },
    data:function () {
      return {
        idx:-1,
        advantage:[],
        introPic:'',
        goods_id:'',
        ns:''
      }
    },
    mounted(){
      var id = this.$route.query.id
      console.log(id)
      this.goods_id = this.$route.query.goods_id
      var that =this
      that.initData()
      this.$nextTick(function () {
        this.ns = new Swiper('.product', {
          // loop: true,
          direction: 'vertical',
          observer:true,
          mousewheelControl : true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          onSlideChangeStart:function (e) {
            console.log(e.activeIndex)
            that.idx = e.activeIndex-1
          }
        })
      })
    },
    methods:{
      tryUse(){
        this.$router.push({
          path:'/Probation',
          query:{
            id:this.goods_id
          }
        })
      },
      tobuy(){
        this.$router.push({
          path:'/ProductDetail',
          query:{
            id:this.goods_id
          }
        })
      },
      nextSlide(e){
        console.log(e)
        this.ns.slideTo(e)
      },
      prevSlide(e){
        this.ns.slideTo(e)
      },
      initData(){
        var that = this
        this.$axios.post('/Goods/goodsParam',{
          goods_id:this.goods_id
        }).then(res=>{

          if(res.data.status==1){
            that.advantage = res.data.data.goods_param
            that.introPic = res.data.data.goods.goods_big_logo
            console.log(res.data.data)
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
    .bgzi{
        position: absolute;
        left: 0;
        top: 70px;
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 0;
    }

    .product{
        position: absolute;
        left: 0;
        top: 70px;
        width: 100%;
        height: calc(100% - 70px);
        z-index: 6;
        display: flex;
        align-items: center;
    }
    .product .swiper-slide{
        width: 100%;
        height: 875px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .advantage{
        width: 1200px;
    }

    .a-con{
        width: 90%;
        margin: 30px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .a-right{
        width: 40%;
    }
    .tt{
        display: flex;
        color: #333;
        align-items: center;
    }
    .t-num{
        font-size: 60px;
        margin-right: 20px;
    }
    .t-name{
        font-family: pfb;
        font-size: 30px;
    }
    .t-desc{
        font-size: 20px;
    }
    .t-intro{
        font-size: 14px;
        color: #6e6e6f;
        line-height: 36px;
        margin-top: 10px;
        font-family: pfb;
    }
    .t-buy{
        width: 170px;
        line-height: 55px;
        text-align: center;
        background: #333;
        color: white;
        font-size: 16px;
        margin-top: 25px;
        cursor: pointer;
        margin-right: 20px;
    }
.show{
    width: 1000px;
}
.swiper-slide{
    position: relative;
}
.upDown{
    position: absolute;
    bottom: 30px;
    left: calc(50% - 50px);
    animation: myani 1s infinite;
    -webkit-transition: all 1s ease-in;
    -moz-transition: all 1s ease-in;
    -ms-transition: all 1s ease-in;
    -o-transition: all 1s ease-in;
    transition: all 1s ease-in;
    cursor: pointer;
    width: 100px;
    text-align: center;
}
    .upDown.downUp{
        bottom: auto;
        top: 30px;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
        animation: myanis 1s infinite;
        -webkit-transition: all 1s ease-in;
        -moz-transition: all 1s ease-in;
        -ms-transition: all 1s ease-in;
        -o-transition: all 1s ease-in;
        transition: all 1s ease-in;
    }
@keyframes myani {
    0%{
        bottom: 30px;
    }
    50%{
        bottom: 35px;
    }
    100%{
        bottom: 30px;
    }
}
    @keyframes myanis {
        0%{
            top: 30px;
        }
        50%{
            top: 35px;
        }
        100%{
            top: 30px;
        }
    }
.lxfs{
    position: absolute;
    left: 30%;
    top: 80px;
    color: #333333;
}
.lxfs p:first-child{
    font-size: 36px;
}
    .lxfs p:last-child{
    font-size: 24px;
}
    @media screen and (max-width: 1400px){
        .lxfs{
            left: 25%;
        }
    }
    @media screen and (max-width: 1200px){
        .t-name{
            font-size: 25px;
        }
        .t-desc{
            font-size: 16px;
        }
        .last{
            width: 90%;
        }
    }
</style>
<style>
    .swiper-container-vertical>.swiper-pagination-bullets {
        right: 100px;
    }

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: #d5d5d5;
        opacity: 1;
    }

    .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 20px 0;
    }

    .swiper-pagination-bullet-active {
        background: #333333;
    }
</style>
