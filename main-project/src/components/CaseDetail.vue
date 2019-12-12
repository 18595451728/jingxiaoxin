<template>
    <div>
        <Nav></Nav>
        <div class="contain">
            <div v-for="item in chooseImgs" @click="previewImg()">
                <img :src="item.pic" alt="">
            </div>
        </div>
        <div class="detais" v-if="showDetail">
            <img src="/static/images/close_white.png" @click="cancle" class="close_white" alt="">
            <div class="bgm" @click="cancle"></div>
            <div class="main">
                <div class="swiper-container imgs">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in chooseImgs">
                            <img width="100%" :src="item.pic" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-container thumb_imgs">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in chooseImgs">
                            <img width="100%" :src="item.pic" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from './Nav'
  export default {
    name: 'CaseDetail',
    components:{
      Nav
    },
    data(){
      return {
        chooseImgs:[],
        showDetail:!1,
      }
    },
    mounted(){
      let chooseImgs=  JSON.parse(this.$route.query.choosedImgs)
      console.log(chooseImgs)
      this.chooseImgs = chooseImgs
    },
    methods:{
      cancle(){
        this.showDetail = !1
      },
      previewImg(){
          this.showDetail = !0
          this.$nextTick(()=>{

            var sss = new Swiper('.thumb_imgs', {
              direction:'vertical',
              spaceBetween: 10,
              centeredSlides: true,
              slidesPerView: 4,
              touchRatio: 0.2,
              slideToClickedSlide: true,
              mousewheelControl : true,
            })

            var ss = new Swiper('.imgs', {
                direction:'vertical',
              mousewheelControl : true,
            })
            sss.params.control = ss;
            ss.params.control = sss;
          })
      },
    }
  }
</script>

<style scoped>
    .contain{
        width: 1200px;
        margin: 50px auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .contain>div{
        width: 262.5px;
        height: 262.5px;
        margin-right: 50px;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
    }
    .contain>div:nth-child(4n){
        margin-right: 0;
    }
    .contain img{
        width: 100%;
    }




    .detais{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
    }
    .bgm{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.9);
        z-index: 10;
    }
    .close_white{
        width: 18px;
        height: 18px;
        position: absolute;
        right: 110px;
        top: 75px;
        z-index: 11;
        cursor: pointer;
    }
    .main{
        width: 900px;
        height: 800px;
        position: absolute;
        left: calc(50% - 450px);
        top: calc(50% - 400px);
        z-index: 11;
        display: flex;
    }
    .imgs{
        width: 600px;
        height: 800px;
        background: #fff;
    }
    .imgs .swiper-slide{
        text-align: center;
    }
    .imgs .swiper-slide img{
        /*width: 300px;*/
        width: auto;
        height: 100%;
    }
    .thumb_imgs{
        width: 120px;
        height: 600px;
        margin-left: 50px;
        margin-top: 100px;
    }
    .thumb_imgs img{
        width: 100%;
    }

    .thumb_imgs .swiper-slide {
        width: 100%;
        height: 100%;
        opacity: 0.4;
        overflow: hidden;
    }
    .thumb_imgs .swiper-slide-active {
        opacity: 1;
    }
</style>
