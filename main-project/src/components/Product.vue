<template>
    <div>
        <Nav></Nav>
        <div class="bgzi">
            <img src="/static/images/bgzi.png" alt="">
        </div>
        <div class="product swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="s-con">
                        <div class="p-list">
                            <div class="p-white">
                                <img src="/static/images/bgzi.png" width="100%" alt="">
                                <div class="white-con">
                                    <p><span>THE</span>[净小新家用净水器]</p>
                                    <img src="/static/images/product.png" alt="">
                                    <div class="fnc">
                                        <router-link to="/ProductDetail" tag="div" class="tryuse">申请试用</router-link>
                                        <router-link to="/ProductDetail" tag="div" class="toBuy">点击购买</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-list">
                            <div class="p-white">
                                <img src="/static/images/bgzi.png" width="100%" alt="">
                                <div class="white-con">
                                    <p><span>THE</span>[净小新家用净水器]</p>
                                    <img src="/static/images/product.png" alt="">
                                    <div class="fnc">
                                        <router-link to="/ProductDetail" tag="div" class="tryuse">申请试用</router-link>
                                        <router-link to="/ProductDetail" tag="div" class="toBuy">点击购买</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="s-con">
                        <div class="p-list">
                            <div class="p-white">
                                <img src="/static/images/bgzi.png" width="100%" alt="">
                                <div class="white-con">
                                    <p><span>THE</span>[净小新家用净水器]</p>
                                    <img src="/static/images/product.png" alt="">
                                    <div class="fnc">
                                        <router-link to="/ProductDetail" tag="div" class="tryuse">申请试用</router-link>
                                        <router-link to="/ProductDetail" tag="div" class="toBuy">点击购买</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-list">
                            <div class="p-white">
                                <img src="/static/images/bgzi.png" width="100%" alt="">
                                <div class="white-con">
                                    <p><span>THE</span>[净小新家用净水器]</p>
                                    <img src="/static/images/product.png" alt="">
                                    <div class="fnc">
                                        <router-link to="/ProductDetail" tag="div" class="tryuse">申请试用</router-link>
                                        <router-link to="/ProductDetail" tag="div" class="toBuy">点击购买</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    name: 'Product',
    components: {
      Nav
    },
    data:function () {
      return {

      }
    },
    mounted () {
      var ns = new Swiper('.product', {
        // loop: true,
        direction :'vertical',
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    methods:{

    }
  }
</script>

<style scoped>
    .bgzi{
        position: absolute;
        left: 0;
        top: 80px;
        width: 100%;
        height: calc(100% - 80px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product{
        position: absolute;
        left: 0;
        top: 80px;
        width: 100%;
        height: calc(100% - 80px);
        z-index: 999;
    }
    .s-con{
        width: 80%;
        height: 766px;
        position: absolute;
        left: 10%;
        top: calc(50% - 384px);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .p-list{
        width: 41%;
        height: 766px;
        background: #e7e7e7;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .p-white{
        width: 86.6%;
        height: 850px;
        background: #f3f3f3;
        position: relative;
    }
    .p-white>img{
        position: absolute;
        width: 100%;
        left: 0;
        top: calc(50% - 104px);
    }
    .white-con{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 45px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .white-con p{
        font-size: 30px;
        color: #505345;
    }
    .white-con p span{
        font-size: 40px;
        color: #989898;
        vertical-align: middle;
    }
    .white-con img{
        margin-left: -77px;
    }
    .fnc{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .fnc>div{
        width: 49%;
        line-height: 55px;
        color: white;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
    }
    .fnc>div:first-child{
        background: #8f8f8f;
    }
    .fnc>div:last-child{
        background: #333;
    }
    @media screen and (max-width: 1200px){
        .white-con p{
            font-size: 25px;
        }
        .white-con p span{
            font-size: 35px;
        }
        .fnc>div{
            line-height: 40px;
        }
    }
    @media screen and (max-width: 1100px){
        .white-con p{
            font-size: 22px;
        }
        .white-con p span{
            font-size: 32px;
        }
    }
</style>
<style>
    .swiper-container-vertical>.swiper-pagination-bullets{
        right: 100px;
    }
    .swiper-pagination-bullet{
        width: 16px;
        height: 16px;
        background: #d5d5d5;
        opacity: 1;
    }
    .swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{
        margin: 34px 0;
    }
    .swiper-pagination-bullet-active{
        background: #333333;
    }
</style>
