<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" alt=""><span>新闻资讯</span></div>
        <div class="bgzi">
            <img src="/static/images/bgzi.png" alt="">
        </div>
        <div class="product swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="s-con">
                        <div class="p-list">
                            <div class="p-white">
                                <img src="/static/images/shanhai.png" alt="">
                                <div class="p-con">
                                    <p class="n-name"><span>「新闻资讯」</span>更好的设计</p>
                                    <p class="n-detail">这一季在延续MASTER系列一贯以来的中西合璧设计理念，在服装工艺和廓形结构上革新了更多细节设计，对于中国文化元素的化用也不再仅局限于意象挪用与符号堆砌，从而呈现出中式传统图腾与美式嘻哈廓形更为紧密相融的设计。</p>
                                    <router-link to="/NewsDetail" tag="div" class="lookmore">查看详情</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="p-list">
                            <div class="p-white">
                                <img src="/static/images/shanhai.png" alt="">
                                <div class="p-con">
                                    <p class="n-name"><span>「新闻资讯」</span>更好的设计</p>
                                    <p class="n-detail">这一季在延续MASTER系列一贯以来的中西合璧设计理念，在服装工艺和廓形结构上革新了更多细节设计，对于中国文化元素的化用也不再仅局限于意象挪用与符号堆砌，从而呈现出中式传统图腾与美式嘻哈廓形更为紧密相融的设计。</p>
                                    <router-link to="/NewsDetail" tag="div" class="lookmore">查看详情</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="s-con">
                        <div class="p-list">
                            <div class="p-white">
                                <img src="/static/images/shanhai.png" alt="">
                                <div class="p-con">
                                    <p class="n-name"><span>「新闻资讯」</span>更好的设计</p>
                                    <p class="n-detail">这一季在延续MASTER系列一贯以来的中西合璧设计理念，在服装工艺和廓形结构上革新了更多细节设计，对于中国文化元素的化用也不再仅局限于意象挪用与符号堆砌，从而呈现出中式传统图腾与美式嘻哈廓形更为紧密相融的设计。</p>
                                    <router-link to="/NewsDetail" tag="div" class="lookmore">查看详情</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="p-list">
                            <div class="p-white">
                                <img src="/static/images/shanhai.png" alt="">
                                <div class="p-con">
                                    <p class="n-name"><span>「新闻资讯」</span>更好的设计</p>
                                    <p class="n-detail">这一季在延续MASTER系列一贯以来的中西合璧设计理念，在服装工艺和廓形结构上革新了更多细节设计，对于中国文化元素的化用也不再仅局限于意象挪用与符号堆砌，从而呈现出中式传统图腾与美式嘻哈廓形更为紧密相融的设计。</p>
                                    <router-link to="/NewsDetail" tag="div" class="lookmore">查看详情</router-link>
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
    import Bside from './Bside'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
  export default {
    name: 'News',
    components:{
      Bside,
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
        width: 1400px;
        height: 816px;
        position: absolute;
        left: calc(50% - 700px);
        top: calc(50% - 408px);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .p-list{
        width: 575px;
        height: 625px;
        background: #e7e7e7;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .p-white{
        width: 498px;
        height: 690px;
        background: #f3f3f3;
        position: relative;
    }
    .p-white>img{
        width: 100%;
        height: 384px;
    }
    .p-con{
        padding: 0 42px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

    }
    .n-name{
        font-size: 16px;
        color: #6c6c6c;
        margin: 35px 0 15px;
    }
    .n-name span{
        color: #252525;
    }
    .n-detail{
        font-size: 14px;
        color: #696969;
        line-height: 23px;
    }
    .lookmore{
        background: #333333;
        color: white;
        text-align: center;
        font-size: 16px;
        width: 217px;
        line-height: 55px;
        float: right;
        margin-top: 45px;
        cursor: pointer;
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
