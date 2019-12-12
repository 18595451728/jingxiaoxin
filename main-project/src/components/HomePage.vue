<template>
    <div>
        <Nav></Nav>
        <div class="banner swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in banners">
                    <img :src="item.banner_pic" alt="">
                </div>
            </div>
            <div class="swiper-button-next" @mouseover="nextover" @mouseout="nextout">
                <div>
                    <img src="/static/images/arrow-right.png" alt="">
                    <p>OF WA</p>
                </div>
            </div>
            <div class="swiper-button-prev" @mouseover="prevover" @mouseout="prevout">
                <div>
                    <img src="/static/images/arrow-left.png" alt="">
                    <p>OF WA</p>
                </div>
            </div>
        </div>
        <div class="home-con">
            <img :src="about.pic" @click="aj" alt="">
            <img :src="product.pic" @click="tj" alt="">
        </div>
        <Bside></Bside>
    </div>
</template>

<script>
  import Nav from './Nav'
  import Bside from './Bside'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'HomePage',
    components: {
      Nav,
      Bside
    },
    data: function () {
      return {
        banners: ['/static/images/banner1.jpg', '/static/images/banner2.jpg', '/static/images/banner3.jpg','/static/images/banner4.jpg'],
        product:'',
        about:'',
        bannerIndex: 0,
        next_is_hover:!1,
        prev_is_hover:!1,
      }
    },
    mounted () {


      var that = this


      this.$axios.post('/Index/homePage', {}).then(function (res) {
        console.log(res.data.data)
        var data =res.data.data
        that.banners=data.banner
        that.about=data.about
        that.product=data.product

        that.$nextTick(function () {
          var ns = new Swiper('.banner', {
            loop: true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            onSlideChangeStart:function (e) {
              console.log(e.activeIndex,that.banners.length)
              that.bannerIndex = e.activeIndex % that.banners.length
              console.log(that.bannerIndex)
              if(that.prev_is_hover){
                that.prevover()
              }
              if(that.next_is_hover){
                that.nextover()
              }
            }
            // on: {
            //   slideChange: function () {
            //     that.bannerIndex = this.activeIndex % 4
            //     console.log(that.bannerIndex)
            //     if(that.prev_is_hover){
            //       that.prevover()
            //     }
            //     if(that.next_is_hover){
            //       that.nextover()
            //     }
            //   }
            // }
          })
        })

      })




    },
    methods: {
      aj(){
        this.$router.push('/AboutUs')
      },
      tj(){
        this.$router.push('/Product')
      },
      prevover () {
        this.prev_is_hover = !0
        if(this.bannerIndex-2<0){
          this.bannerIndex = this.bannerIndex+this.banners.length
        }
        console.log(this.bannerIndex)
        var nextswiper = document.getElementsByClassName('swiper-button-prev')[0]
        nextswiper.style.width = '265px'
        nextswiper.style.background = "url('"+this.banners[this.bannerIndex-2].banner_pic+"') no-repeat"
        nextswiper.style.backgroundSize = '100% 100%'
        nextswiper.style.opacity = '.8'
      },
      prevout () {
        this.prev_is_hover = !1
        var nextswiper = document.getElementsByClassName('swiper-button-prev')[0]
        nextswiper.style.width = '130px'
        nextswiper.style.background = "rgba(165,165,165,.3)"
      },
      nextover () {
        this.next_is_hover = !0
        if(this.bannerIndex == this.banners.length){
          this.bannerIndex = 0
        }
        console.log(this.bannerIndex)
        var nextswiper = document.getElementsByClassName('swiper-button-next')[0]
        nextswiper.style.width = '265px'
        nextswiper.style.background = "url('"+this.banners[this.bannerIndex % this.banners.length].banner_pic+"') no-repeat"
        nextswiper.style.backgroundSize = '100% 100%'
        nextswiper.style.opacity = '.8'
      },
      nextout () {
        this.next_is_hover = !1
        var nextswiper = document.getElementsByClassName('swiper-button-next')[0]
        nextswiper.style.width = '130px'
        nextswiper.style.background = "rgba(165,165,165,.3)"
      }
    }

  }
</script>

<style scoped>
    body{
        padding-bottom: 0!important;
    }
    .banner {
        width: 100%;
        /*height: 1000px;*/
        background: #333;
        -webkit-box-shadow: 0 0 10px rgba(0,0,0,.1);
        -moz-box-shadow: 0 0 10px rgba(0,0,0,.1);
        box-shadow: 0 0 10px rgba(0,0,0,.1);
    }
    .banner .swiper-slide img{
        width: 100%;
        float: left;
    }
    .swiper-button-next, .swiper-button-prev{
        width: 130px;
        height: 196px;
        background: rgba(165,165,165,.3);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        padding-left: 23px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: -98px;
    }
    .swiper-button-prev{
        left: 100px;
    }
    .swiper-button-next{
        justify-content: flex-end;
        padding-right: 23px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        right: 100px;
    }
    .swiper-button-next:hover,.swiper-button-prev:hover{
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear;
        -ms-transition: all .3s linear;
        -o-transition: all .3s linear;
        transition: all .3s linear;
    }
    .swiper-button-next>div, .swiper-button-prev>div{
        color: white;
    }
    .swiper-button-next>div{
        text-align: right;
    }
    .swiper-button-next>div img, .swiper-button-prev>div img{
        margin-bottom: 65px;
    }

    .home-con{
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        margin: 22px auto 30px;
    }
    .home-con img:first-child{
        width: 32%;
        cursor: pointer;
    }
    .home-con img:last-child{
        width: 66%;
        cursor: pointer;
    }


</style>
