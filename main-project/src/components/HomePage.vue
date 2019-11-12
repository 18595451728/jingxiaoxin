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
            <div class="home-pro">
                <img :src="product.pic" alt="">
               <router-link tag="div" to="/Product" class="h-con">
                   <div>
                       <div class="p-name">{{product.title}}</div>
                       <div class="p-desc">{{product.describe}}</div>
                   </div>
               </router-link>
            </div>
            <div class="home-abo">
                <img :src="about.pic" alt="">
                <router-link tag="div" to="/AboutUs" class="a-con">
                    <div>
                        <div class="p-name">{{about.title}}</div>
                        <div class="p-desc">{{about.describe}}</div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="footer">
            <div class="footer-main">
                <div class="f-left">
                    <img src="/static/images/logo.png" alt="">
                    <p style="color: #ffffff;margin: 45px 0;line-height: 28px">产品技术不是证书与标签，而是您喝下那杯水的感受， 我们所有的努力，只为您手中这杯健康好水</p>
                    <p style="color: #ffffff;font-size: 20px">客服电话：400 080 5680</p>
                </div>
                <div class="f-right">
                    <div class="navs">
                        <div>
                            <p><router-link tag="a" to="">产品中心</router-link></p>
                            <p><router-link tag="a" to="">净水器</router-link></p>
                            <p><router-link tag="a" to="">净水机</router-link></p>
                            <p><router-link tag="a" to="">直饮机</router-link></p>
                            <p><router-link tag="a" to="">净饮机</router-link></p>
                            <p><router-link tag="a" to="">凉白开净饮机</router-link></p>
                            <p><router-link tag="a" to="">家用净水器</router-link></p>
                            <p><router-link tag="a" to="">商用净水器</router-link></p>
                        </div>
                        <div>
                            <p><router-link tag="a" to="">项目案例</router-link></p>
                            <p><router-link tag="a" to="">净水机代理</router-link></p>
                            <p><router-link tag="a" to="">净水器十大品牌</router-link></p>
                            <p><router-link tag="a" to="">家用净水机</router-link></p>
                            <p><router-link tag="a" to="">净水器招商</router-link></p>
                            <p><router-link tag="a" to="">净水器加盟</router-link></p>
                            <p><router-link tag="a" to="">净水器厂家</router-link></p>
                        </div>
                        <div>
                            <p><router-link tag="a" to="">新闻资讯</router-link></p>
                            <p><router-link tag="a" to="">商用净水机</router-link></p>
                            <p><router-link tag="a" to="">净水机十大品牌</router-link></p>
                            <p><router-link tag="a" to="">商务直饮机</router-link></p>
                            <p><router-link tag="a" to="">温开直饮水机</router-link></p>
                            <p><router-link tag="a" to="">净水机招商</router-link></p>
                            <p><router-link tag="a" to="">直饮水开水机</router-link></p>
                            <p><router-link tag="a" to="">直饮机厂家</router-link></p>
                            <p><router-link tag="a" to="">直饮机厂家批发</router-link></p>
                            <p><router-link tag="a" to="">家用直饮机厂家</router-link></p>
                        </div>
                        <div>
                            <p><router-link tag="a" to="">招聘城市合伙人</router-link></p>
                            <p><router-link tag="a" to="">净水器价格</router-link></p>
                            <p><router-link tag="a" to="">直饮机租赁</router-link></p>
                            <p><router-link tag="a" to="">商用直饮机租赁</router-link></p>
                            <p><router-link tag="a" to="">厂家直销净水</router-link></p>
                        </div>
                        <div>
                            <p><router-link tag="a" to="">关于我们</router-link></p>
                            <p><router-link tag="a" to="">净水器排行</router-link></p>
                            <p><router-link tag="a" to="">直饮机哪家好</router-link></p>
                            <p><router-link tag="a" to="">净水器什么牌子好</router-link></p>
                            <p><router-link tag="a" to="">净水器有用吗</router-link></p>
                            <p><router-link tag="a" to="">净水器好不好</router-link></p>
                        </div>
                    </div>
                    <div class="copyright">ICP备案号： 湘ICP备05004535号-16</div>
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
    name: 'HomePage',
    components: {
      Nav
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
      },
      prevout () {
        this.prev_is_hover = !1
        var nextswiper = document.getElementsByClassName('swiper-button-prev')[0]
        nextswiper.style.width = '130px'
        nextswiper.style.background = "rgba(165,165,165,.47)"
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
      },
      nextout () {
        this.next_is_hover = !1
        var nextswiper = document.getElementsByClassName('swiper-button-next')[0]
        nextswiper.style.width = '130px'
        nextswiper.style.background = "rgba(165,165,165,.47)"
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
    }
    .banner .swiper-slide img{
        width: 100%;
    }
    .swiper-button-next, .swiper-button-prev{
        width: 130px;
        height: 196px;
        background: rgba(165,165,165,.47);
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
        -webkit-transition: all .5s linear;
        -moz-transition: all .5s linear;
        -ms-transition: all .5s linear;
        -o-transition: all .5s linear;
        transition: all .5s linear;
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
        align-items: center;
        justify-content: space-between;
        margin: 22px auto 30px;
    }
    .home-pro{
        width: 32%;
        display: flex;
        justify-content: center;
        align-items: center;
        /*background: url("/static/images/homepro.png") no-repeat;*/
        /*background-size: 100% 100%;*/
        position: relative;
    }
    .home-pro>img{
        width: 100%;
    }
    .h-con{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 8;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-align: center;
    }

    .p-name{
        width: 100%;
        font-size: 35px;
        color: #505345;
        line-height: 85px;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        margin: 0 auto 48px;
        -webkit-border-image: url(/static/images/line.png) 30 round; /* Safari 3.1-5 */
        -o-border-image: url(/static/images/line.png) 30 round; /* Opera 11-12.1 */
        border-image: url(/static/images/line.png) 30 round;
    }
    .p-desc{
        font-size: 16px;
        color: #505345;
        width: 80%;
        margin: 0 auto;
        line-height: 28px;
    }
    .home-abo{
        width: 65%;
        /*height: 450px;*/
        position: relative;
    }
    .home-abo>img {
        width: 100%;
    }
    .a-con{
        position: absolute;
        left: 0;
        top: 0;
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
    }
    .footer{
        width: 100%;
        background: #333;
        padding-top: 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: -70px;
    }
    .footer-main{
        width: 1550px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
    .f-left{
        width: 370px;
        text-align: center;
    }
    .f-right{
        width: 57%;
    }
    .navs{
        display: flex;
        justify-content: space-between;
    }
    .navs p{
        line-height: 25px;
        font-size: 14px;
    }
    .navs p a{
        color: #8a8a8a;
    }
    .navs>div p:first-child{
        margin-bottom: 40px;
    }
    .navs>div p:first-child a{
        color: #fff;
    }
    .copyright{
        margin-top: 80px;
        line-height: 60px;
        font-size: 16px;
        color: #fff;
    }
    @media screen and (max-width: 1600px){
        .footer-main{
            width: 90%;
        }
    }
    @media screen and (max-width: 1400px){
        .p-name{
            margin: 0 auto 30px;
        }
    }
    @media screen and (max-width: 1200px){
        .p-name{
            margin: 0 auto 15px;
            line-height: 50px;
            font-size: 30px;
        }
        .p-desc{
            font-size: 14px;
        }
        .f-left{
            width: 35%;
        }
        .f-right{
            width: 60%;
        }
    }
</style>
