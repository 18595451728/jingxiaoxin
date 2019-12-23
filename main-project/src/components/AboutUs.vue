<template>
    <div>
        <Nav @goscroll="Navhash"></Nav>
        <div class=""><img src="/static/images/back.png" style="cursor: pointer;" @click="back" alt=""><span>关于我们</span></div>
        <div class="main-con" id="about1">
            <img :src="pic1" alt="">
            <div class="a-art">
                <img src="/static/images/a-intro.png" style="margin-bottom: 35px" alt="">
                <div class="a-title">杭州再想科技有限公司</div>
                <p>{{desc1}}</p>
            </div>
        </div>
        <div class="main-con" style="margin-top: 220px" id="about2">
            <div class="a-art b-art">
                <img src="/static/images/b-intro.png" style="margin-bottom: 44px" alt="">
                <div class="a-title">净小新.愿景：</div>
                <p>成为全球知名净饮品牌，让喝水变得简单</p>
                <div class="a-title">净小新.使命：</div>
                <p>以科技构建安全、健康、便捷的饮水生活</p>
                <div class="a-title">净小新.价值观：</div>
                <p>独立思考、科学求真、奋斗学习、精益求精、直面困难、永不放弃</p>
                <div class="a-title">净小新.社会责任：</div>
                <p>做有口碑的好产品</p>
            </div>
            <img :src="pic2" style="position: absolute;right: 0;top: -220px;" alt="" >
            <img :src="pic2" style="margin-left: 82px;opacity: 0;" alt="" >
            <img src="/static/images/b-bg.png" class="b_bg" alt="">
        </div>
        <div class="jd" id="about5">
            <div class="l-title" ><img src="/static/images/jd.png" alt=""></div>
            <p>{{product.describe}}</p>
            <div class="jd_container swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in product.multiple_pic">
                        <img :src="item.pic" alt="">
                    </div>
                </div>
                <div class="jd_btn">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <img src="/static/images/jd_bg.png" class="jd_bg" alt="">
            </div>
        </div>
        <div class="licheng" id="about3">
            <div class="l-title" ><img src="/static/images/develop.png" alt=""></div>
            <div class="swiper-container lis">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in development">
                        <p>{{item.title}}年</p>
                        <p style="height: 78px;display: flex;align-items: center;justify-content: center"><img src="/static/images/yuan.png" alt=""></p>
                        <p>{{item.describe}}</p>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="line"></div>
                <div class="focus">
                    <img src="/static/images/yuan-blue.png" alt="">
                </div>
            </div>
        </div>
        <div class="certificate" id="about4">
            <div class="c-title" ><img src="/static/images/zz.png" alt=""></div>
            <div class="cer">
                <div v-for="item in qualification">
                    <div>
                        <img :src="item.pic" alt="">
                    </div>
                    <p :title="item.title">{{item.title}}</p>
                </div>
            </div>
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
    name: 'AboutUs',
    components: {
      Nav,
      Bside
    },
    data:function () {
      return {
        about:'',
        development:'',
        qualification:'',
        pic1:'',
        pic2:'',
        desc1:'',
        product:''
      }
    },
    mounted(){


      console.log(this.$route.query.id)
      var  that =this
      that.$axios.post('/Content/about',{}).then(res=>{
        console.log(res)
        if(res.data.status==1){
          that.about = res.data.data.about
          that.pic1 = res.data.data.about[0].pic
          that.pic2 = res.data.data.about[1].pic
          that.desc1 = res.data.data.about[0].describe
          that.development = res.data.data.development
          that.qualification = res.data.data.qualification
          that.product = res.data.data.product[0]


          this.$nextTick(function () {
            var ns = new Swiper('.lis', {
              loop: true,
              slidesPerView: 3,
              spaceBetween: 40,
              prevButton: '.swiper-button-prev',
              nextButton: '.swiper-button-next',
            })
            var ss = new Swiper('.jd_container', {
              loop: true,
              slidesPerView: 3.5,
              spaceBetween: 40,
              prevButton: '.swiper-button-prev',
              nextButton: '.swiper-button-next',
            })
          })
        }
      })


    },
    methods:{
      Navhash(e){
        console.log(e)
        switch (e) {
          case 0:
            var anchorEle = document.querySelector("#about1");
            if (!!anchorEle) {
              anchorEle.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
            break;
          case 1:
            var anchorEle = document.querySelector("#about2");
            if (!!anchorEle) {
              anchorEle.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
            break;
          case 2:
            var anchorEle = document.querySelector("#about3");
            if (!!anchorEle) {
              anchorEle.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
            break;
          case 3:
            var anchorEle = document.querySelector("#about4");
            if (!!anchorEle) {
              anchorEle.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }
            break;
          case 4:

            var anchorEle = document.querySelector("#about5");
            console.log(anchorEle)
            if (!!anchorEle) {
              anchorEle.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
            break;
        }
      },
    back(){
      this.$router.go(-1)
    }
    }
  }
</script>

<style scoped>
    .certificate{
        padding: 50px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #fff;
    }
     .c-title{
        text-align: center;
        margin-bottom: 60px;
    }
    .cer{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .cer>div{
        margin-right: 101px;
        margin-bottom: 25px;
    }
    .cer>div>div{
        width: 224px;
        height: 307px;
        background: url("/static/images/certificate.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cer>div:nth-child(4n){
        margin-right: 0;
    }
    .cer>div img{
        width: 60%;
    }
    .cer>div p{
        text-align: center;
        font-size: 16px;
        color: #1d1d1d;
        margin: 20px 0;
        width: 224px;
        white-space: nowrap;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        font-family: pfb;
    }
    .lis{
        width: 1200px;
        margin: 0 auto;
        text-align: center;
    }
    .lis .swiper-slide{
        padding: 0 80px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .lis .swiper-slide p:first-child{
        font-size: 20px;
        color: #000;
        line-height: 26px;
    }
    .lis .swiper-slide p:last-child{
        font-size: 14px;
        color: #000;
        line-height: 25px;
    }
    .lis .swiper-slide img{
        margin: 28px 0;
    }
    .line{
        width: 100%;
        position: absolute;
        left: 0;
        height: 1px;
        background: #d2d2d2;
        top: 65px;
    }
    .focus{
        width: 100px;
        height: 66px;
        position: absolute;
        left: calc(50% - 50px);
        top: 32px;
        z-index: 99;
    }
    .licheng{
        background: #f5f5f5;
        padding-top: 120px;
        padding-bottom: 80px;
        margin-top: 25px;
    }
    .l-title{
        margin: 0 0 140px;
        text-align: center;
    }
    . {
        width: 100%;
        line-height: 40px;
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

    . span {
        margin-left: 43px;
    }
    . img {
        width: 10px;
    }

    .main-con {
        position: relative;
        width: 1200px;
        margin: 30px auto 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*box-shadow: 10px 10px 10px -4px rgba(130, 130, 130, .1);*/

    }
    .a-title {
        margin-bottom: 20px;
        font-size: 20px;
        color: #1d1d1d;
        font-family: pfb;
    }

    .a-art {
        width: 440px;
        margin-left: 145px;
    }

    .a-art p {
        line-height: 44px;
        font-size: 14px;
        color: #000000;
    }
    .b-art .a-title{
        margin-bottom: 0px;
    }
    .a-art.b-art p{
        margin-bottom: 20px;
    }

    #about2{
        position: relative;
        margin-bottom: 70px;
    }
    .main-con>img.b_bg{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
    }


    .jd>p{
        width: 780px;
        margin: 0 auto;
        line-height: 44px;
        font-size: 14px;
        color: #000;
        /*font-family: pfb;*/
        text-align: center;
    }
    .jd .l-title{
        margin-bottom: 55px;
    }

    .jd_container{
        width: 100%;
        margin-right: 0;
        padding-bottom: 115px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 70px;
    }
    .jd_container .swiper-slide img{
        width: 100%;
    }
    .jd_bg{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 73%;
    }
    .jd_btn{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 27%;
        height: 115px;
    }
    .jd_container .swiper-button-prev{
        left: 50px;
    }
    .jd_container .swiper-button-next{
        right: 50px;
    }
    .jd_container .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
        background-image:url("/static/images/zuo1.png");
        background-size: 100%;
        width: 20px;
        height: 30px;
        margin-top: -15px;
    }
    .jd_container .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
        background-image:url("/static/images/you1.png");
        background-size: 100%;
        width: 20px;
        height: 30px;
        margin-top: -15px;
    }
    @media screen and (max-width: 1300px){
        .main-con{
            width: 90%;
        }
        .main-con>img{
            width: 50%;
        }
        .a-art{
            width: 50%;
        }

    }

    .lis .swiper-button-next{
        background-image:url("/static/images/you .png");
        background-size: 100% 100%;
        right: 0;
    }
    .lis .swiper-button-prev{
        background-image:url("/static/images/zuo .png");
        background-size: 100% 100%;
        left: 0;
    }
    .lis .swiper-button-next, .lis .swiper-button-prev{
        width: 22px;
        height: 22px;
        top: 54px;
        margin-top: 0;
    }

</style>
