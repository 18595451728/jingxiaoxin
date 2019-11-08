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
                <div class="swiper-slide" v-for="item in cases">
                    <div class="s-con">
                        <div class="p-list" v-for="items in item">
                            <div class="p-white">
                                <img :src="items.pic" alt="">
                                <div class="p-con">
                                    <p class="n-name"><span>「新闻资讯」</span>{{items.title}}</p>
                                    <p class="n-detail">{{items.describe}}</p>
                                    <router-link to="" tag="div" class="lookmore">查看详情</router-link>
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
    name: 'Case',
    components: {
      Bside,
      Nav
    },
    data: function () {
      return {
        cases:[]
      }
    },
    mounted () {
      var that = this
      this.$axios.post('/Content/cases', {
        page: 1,
        list_row: 10
      }).then(res => {
        console.log(res)
        if(res.data.status==1){
          var list = res.data.data.news, len = Math.ceil(list.length / 2)
          var newArray = []
          for (var i = 0; i < len; i++) { //每组两个数据  总共 len 组
            var arr = []
            for (var j = 0; j < 2; j++) {
              if(i*2+j != list.length){
                arr[j] = list[i*2+j]
              }
            }
            newArray.push(arr)
          }
          console.log(newArray)

          that.cases = newArray

          that.$nextTick(function () {
            var ns = new Swiper('.product', {
              // loop: true,
              direction: 'vertical',
              pagination: {
                el: '.swiper-pagination',
              },
            })
          })
        }
      })
    },
    methods: {}
  }
</script>

<style scoped>
    .emei {
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

    .emei span {
        margin-left: 43px;
    }

    .bgzi {
        position: absolute;
        left: 0;
        top: 80px;
        width: 100%;
        height: calc(100% - 80px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .product {
        position: absolute;
        left: 0;
        top: 150px;
        width: 100%;
        height: calc(100% - 220px);
        z-index: 999;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .s-con {
        width: 73%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .p-list {
        width: 41%;
        height: 83.4%;
        background: #e7e7e7;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-white {
        width: 86.66%;
        height: 110%;
        background: #f3f3f3;
        position: relative;
    }

    .p-white > img {
        width: 100%;
    }

    .p-con {
        padding: 0 42px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

    }

    .p-con::after {
        content: "";
        height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }

    .n-name {
        font-size: 16px;
        color: #6c6c6c;
        margin: 35px 0 15px;
    }

    .n-name span {
        color: #252525;
    }

    .n-detail {
        font-size: 14px;
        color: #696969;
        line-height: 23px;
    }

    .lookmore {
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

    @media screen and (max-width: 1400px) {
        .lookmore {
            width: 180px;
            line-height: 50px;
        }

        .p-list {
            height: 73.5%;
        }
    }

    @media screen and (max-width: 1200px) {
        .lookmore {
            width: 180px;
            line-height: 50px;
        }
    }

    @media screen and (max-width: 1100px) {
        .lookmore {
            width: 140px;
            line-height: 40px;
            margin-top: 35px;
        }
    }
</style>
<style>
    .swiper-container-vertical > .swiper-pagination-bullets {
        right: 100px;
    }

    .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
        background: #d5d5d5;
        opacity: 1;
    }

    .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 34px 0;
    }

    .swiper-pagination-bullet-active {
        background: #333333;
    }
</style>
