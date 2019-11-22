<template>
    <div>
        <Nav></Nav>
        <!--<div class="bgzi">-->
            <!--<img src="/static/images/bgzi.png" alt="">-->
        <!--</div>-->
        <div class="swiper-container product">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in advantage" :style="{background:'url('+item.pic+') center center no-repeat'}">
                    <div class="advantage" v-if="index%2==1">
                        <div class="a-con">
                            <img src="" width="49%" alt="">
                            <div class="a-right" :class="{'animated':idx==index,'bounceInRight':idx==index}">
                                <div class="tt">
                                    <div class="t-num">{{index+1}}</div>
                                    <div>
                                        <p class="t-name">{{item.title}}</p>
                                        <p class="t-desc">{{item.subtitle}}</p>
                                    </div>
                                </div>
                                <div class="t-intro">净水器按过滤效果分为微滤、超滤、RO 反渗透净水器，微滤、超滤虽常见，但无法彻底滤除水垢、重金属及有害有机物。净小新净水器采用过滤等级最高的 RO 反渗透技术，它能拦截大于 0.0001 微米的物质是超滤净水器精度的 100 倍。</div>
                                <div class="t-buy" @click="tobuy">点击购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="advantage advantage-odd" v-else>
                        <div class="a-con">
                            <div class="a-right" :class="{'animated':idx==index,'bounceInLeft':idx==index}">
                                <div class="tt">
                                    <div class="t-num">{{index+1}}</div>
                                    <div>
                                        <p class="t-name">{{item.title}}</p>
                                        <p class="t-desc">{{item.subtitle}}</p>
                                    </div>
                                </div>
                                <div class="t-intro">净水器按过滤效果分为微滤、超滤、RO 反渗透净水器，微滤、超滤虽常见，但无法彻底滤除水垢、重金属及有害有机物。净小新净水器采用过滤等级最高的 RO 反渗透技术，它能拦截大于 0.0001 微米的物质是超滤净水器精度的 100 倍。</div>
                                <div class="t-buy" @click="tobuy">点击购买</div>
                            </div>
                            <img src="" width="49%"  alt="">
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
    name: 'Advantage',
    components: {
      Nav
    },
    data:function () {
      return {
        idx:0,
        advantage:[
          {
            title:'7寸液晶显示屏',
            subtitle: '净小新的水质实时监控TDS值监控+滤芯更换提醒',
            pic:'http://shop.jingxiaoxin.com/static/vue/images/1-2.gif'
          },{
            title:'步进式加热系统',
            subtitle: '全自动智能控制，每次加热一层水 冷热水分层不混合 快速沸腾  大开水量 连续出开水不会越接越凉',
            pic:'http://shop.jingxiaoxin.com/static/vue/images/2-2.gif'
          },{
            title:'净小新采用UV抑菌',
            subtitle: '净小新采用UV抑菌+光源保鲜技术 水经过高温灭菌后再由UV冷光源抑菌保鲜，保证每一滴鲜活好水',
            pic:'http://shop.jingxiaoxin.com/static/vue/images/3-2.gif'
          },{
            title:'净小新三代卡接滤芯',
            subtitle: '净小新三代卡接滤芯，轻轻一转即可实现轻松换芯，无需专业人员上门更换，维护成本大大降低',
            pic:'http://shop.jingxiaoxin.com/static/vue/images/7-2.gif'
          },{
            title:'热交换系统',
            subtitle: '烧开后再降温，时刻饮用凉白开 水烧开后不仅能有效灭菌，且白开水更加温和有益于保护肠胃',
            pic:'http://shop.jingxiaoxin.com/static/vue/images/5-2.gif'
          },{
            title:'0.0001微米过滤',
            subtitle: '过滤是制出好水的第一步，净小新采用0.0001微米高精度反渗透过滤，原装进口陶氏RO膜片（参考图册过滤技术作动效）',
            pic:'http://shop.jingxiaoxin.com/static/vue/images/6-2.gif'
          },{
            title:'净小新采用UV抑菌',
            subtitle: '净小新采用UV抑菌+光源保鲜技术 水经过高温灭菌后再由UV冷光源抑菌保鲜，保证每一滴鲜活好水',
            pic:'http://shop.jingxiaoxin.com/static/vue/images/4-2.gif'

          },
        ],
        goods_id:''
      }
    },
    mounted(){
      var id = this.$route.query.id
      console.log(id)
      this.goods_id = this.$route.query.goods_id
      var that =this
      this.$nextTick(function () {
        var ns = new Swiper('.product', {
          // loop: true,
          direction: 'vertical',
          mousewheelControl : true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          onSlideChangeStart:function (e) {
            console.log(e.activeIndex)
            that.idx = e.activeIndex
          }
        })
        ns.slideTo(id,0)
        this.idx = id
      })
    },
    methods:{
      tobuy(){
        this.$router.push({
          path:'/ProductDetail',
          query:{
            id:this.goods_id
          }
        })
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
        z-index: 999;
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

    }

    .a-con{
        width: 73%;
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
    }
    .t-num{
        font-size: 80px;
        margin-right: 20px;
    }
    .t-name{
        font-size: 30px;
    }
    .t-desc{
        font-size: 20px;
    }
    .t-intro{
        font-size: 14px;
        color: #6e6e6f;
        line-height: 36px;
        margin-top: 30px;
    }
    .t-buy{
        width: 286px;
        line-height: 55px;
        text-align: center;
        background: #333;
        color: white;
        font-size: 16px;
        margin-top: 25px;
        cursor: pointer;
    }

    @media screen and (max-width: 1200px){
        .t-name{
            font-size: 25px;
        }
        .t-desc{
            font-size: 16px;
        }
    }
</style>
<style>
    .swiper-container-vertical>.swiper-pagination-bullets {
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
