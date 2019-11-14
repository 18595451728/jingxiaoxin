<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" style="cursor: pointer;" @click="back" alt=""><span>关于我们</span></div>
        <div class="main-con">
            <img src="/static/images/a-pic.png" alt="">
            <div class="a-art">
                <img src="/static/images/a-intro.png" style="margin-bottom: 44px" alt="">
                <div class="a-title">杭州再想科技有限公司</div>
                <p>净小新是杭州再想科技旗下高端净饮机品牌，是一家集研发、生产、销售、服务为一体的高科技型企业，注重创新和用户体验，专注净水及饮水产品研发十余年致力于以科技 构建安全 健康  便捷的饮水生活。自主创新凉白开净饮机系列倡导过滤+烧开杀菌+保鲜三重防护的饮水理念，目前已荣获国家多项专利技术 杭州再想科技已荣获“杭州市高新技术企业”，“浙江省科技型中小企业”，通过了国家CCC认证，饮用水卫生安全产品卫生许可批件，中国家用电器检测等多项权威认证机构的检测</p>
            </div>
        </div>
        <div class="main-con" style="margin-top: 0">
            <div class="a-art b-art">
                <img src="/static/images/b-intro.png" style="margin-bottom: 44px" alt="">
                <div class="a-title">净小新.愿景：</div>
                <p>成为全球知名净饮品牌  让喝水变得简单</p>
                <div class="a-title">净小新.使命：</div>
                <p>以科技 构建安全 健康  便捷的饮水生活</p>
                <div class="a-title">净小新.价值观：</div>
                <p>独立思考科学求真   奋斗学习精益求精    直面困难永不放弃</p>
                <div class="a-title">净小新.社会责任：</div>
                <p>做有口碑的好产品</p>
            </div>
            <img src="/static/images/b-pic.png" style="margin-left: 82px" alt="">
        </div>
        <div class="licheng">
            <div class="l-title"><img src="/static/images/develop.png" alt=""></div>.
            <div class="swiper-container lis">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <p>2011年</p>
                        <p><img src="/static/images/yuan.png" alt=""></p>
                        <p>进入净水行业，从事家用和商用净水产品的销售与服务并建立调研体系</p>
                    </div>
                    <div class="swiper-slide">
                        <p>2012年</p>
                        <p><img src="/static/images/yuan.png" alt=""></p>
                        <p>开始建立自主的售后体系，并和多家净水品牌厂商建立售后合作</p>
                    </div>
                    <div class="swiper-slide">
                        <p>2013年</p>
                        <p><img src="/static/images/yuan.png" alt=""></p>
                        <p>品牌孵化：依据5年客户跟踪数据，针对市场痛点进行净小新系列产品立项研发，并确立以科技构建安全、健康、便捷的饮水生活为发展方向。</p>
                    </div>
                    <div class="swiper-slide">
                        <p>2014年</p>
                        <p><img src="/static/images/yuan.png" alt=""></p>
                        <p>进入净水行业，从事家用和商用净水产品的销售与服务并建立调研体系</p>
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
        <div class="certificate">
            <div class="swiper-container cer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in 5">
                        <img src="/static/images/cer.png" alt="">
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
    name: 'AboutUs',
    components: {
      Nav,
      Bside
    },
    data:function () {
      return {
        content:''
      }
    },
    mounted(){
      var  that =this
      that.$axios.post('/Content/about',{}).then(res=>{
        console.log(res)
        if(res.data.status==1){
          that.content = res.data.data
        }
      })
        this.$nextTick(function () {
            var ns = new Swiper('.lis', {
              loop: true,
              slidesPerView: 3,
              spaceBetween: 40,
              prevButton: '.swiper-button-prev',
              nextButton: '.swiper-button-next',
            })
          var nss = new Swiper('.cer', {
              loop: true,
              slidesPerView: 4,
                spaceBetween: 100
            })
        })

    },
    methods:{
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
        background: #333333;
        border-bottom: 1px solid #fff;
    }
    .cer{
        width: 1200px;
        margin: 0 auto;
    }
    .cer .swiper-slide{
        height: 307px;
        background: url("/static/images/certificate.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .lis{
        width: 1200px;
        margin: 0 auto 125px;
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
    .l-title{
        margin: 120px 0 140px;
        text-align: center;
    }
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

    .main-con {
        position: relative;
        width: 1200px;
        margin: 70px auto 0;
        display: flex;
        align-items: center;
        box-shadow: 10px 10px 10px -4px rgba(130, 130, 130, .1);

    }
    .main-con>img{
        width: 50%;
    }
    .a-title {
        margin-bottom: 30px;
        font-size: 20px;
        color: #1d1d1d;
    }

    .a-art {
        width: 440px;
        margin-left: 75px;
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

    .swiper-button-next{
        background-image:url("/static/images/you .png");
        background-size: 100% 100%;
        right: 0;
    }
    .swiper-button-prev{
        background-image:url("/static/images/zuo .png");
        background-size: 100% 100%;
        left: 0;
    }
    .swiper-button-next, .swiper-button-prev{
        width: 22px;
        height: 22px;
        top: 54px;
        margin-top: 0;
    }

</style>
