<template>
    <div>
        <Nav></Nav>
        <div class="bgzi">
            <img src="/static/images/bgzi.png" alt="">
        </div>
        <div class="goods">
            <img :src="pic" width="100%" class="" alt="">
            <img src="/static/images/lines.png" class="lines a1 animated" width="300" height="2" :class="[ani?'fadeOut':'fadeIn']" alt="">
            <img src="/static/images/lines.png" class="lines a2 animated" width="250" height="2"  :class="[ani?'fadeOut':'fadeIn']" alt="">
            <img src="/static/images/lines.png" class="lines a3 animated" width="284" height="2"  :class="[ani?'fadeOut':'fadeIn']" alt="">
            <img src="/static/images/lines.png" class="lines a4 animated" width="384" height="2"  :class="[ani?'fadeOut':'fadeIn']" alt="">
            <img src="/static/images/lines.png" class="lines a5 animated" width="300" height="2"  :class="[ani?'fadeOut':'fadeIn']" alt="">
            <img src="/static/images/lines.png" class="lines a6 animated" width="250" height="2"  :class="[ani?'fadeOut':'fadeIn']" alt="">
            <img src="/static/images/lines.png" class="lines a7 animated" width="350" height="2"  :class="[ani?'fadeOut':'fadeIn']" alt="">
        </div>
        <div class="detail detail1 animated" :class="[ani?'rotateOutDownLeft':'rotateInDownLeft']" @click="startani(0)">
            <div>7寸液晶显示屏</div>
            <p>净小新的水质实时监控 <br>TDS值监控+滤芯更换提醒</p>
        </div>
        <div class="detail detail2 animated" :class="[ani?'rotateOutDownLeft':'rotateInDownLeft']" @click="startani(1)">
            <div>步进式加热系统</div>
            <p>全自动智能控制，每次加热一层水 冷热水分层不混合 快速沸腾  大开水量 连续出开水不会越接越凉</p>
        </div>
        <div class="detail detail3 animated" :class="[ani?'rotateOutDownLeft':'rotateInDownLeft']" @click="startani(2)">
            <div>净小新采用UV抑菌</div>
            <p>净小新采用UV抑菌+光源保鲜技术
                水经过高温灭菌后再由UV冷光源抑菌保鲜，保证每一滴鲜活好水</p>
        </div>
        <div class="detail detail4 animated" :class="[ani?'rotateOutDownLeft':'rotateInDownLeft']" @click="startani(6)">
            <div>净小新采用UV抑菌</div>
            <p>净小新采用UV抑菌+光源保鲜技术
                水经过高温灭菌后再由UV冷光源抑菌保鲜，保证每一滴鲜活好水</p>
        </div>
        <div class="detail detail5 animated" :class="[ani?'rotateOutDownLeft':'rotateInDownLeft']" @click="startani(4)">
            <div>热交换系统</div>
            <p>烧开后再降温，时刻饮用凉白开
                水烧开后不仅能有效灭菌，且白开水更加温和有益于保护肠胃</p>
        </div>
        <div class="detail detail6 animated" :class="[ani?'rotateOutDownLeft':'rotateInDownLeft']" @click="startani(5)">
            <div>0.0001微米过滤</div>
            <p>过滤是制出好水的第一步，净小新采用0.0001微米高精度反渗透过滤，原装进口陶氏RO膜片（参考图册过滤技术作动效）</p>
        </div>
        <div class="detail detail7 animated" :class="[ani?'rotateOutDownLeft':'rotateInDownLeft']" @click="startani(3)">
            <div>净小新三代卡接滤芯</div>
            <p>净小新三代卡接滤芯，轻轻一转即可实现轻松换芯，无需专业人员上门更换，维护成本大大降低</p>
        </div>
    </div>
</template>

<script>
  import Nav from './Nav'
  export default {
    name: 'ProductShow',
    components: {
      Nav
    },
    data:function () {
      return {
        pic:'/static/images/goodss.png',
        ani:!1,
        goods_id:''
      }
    },
    mounted () {
        this.goods_id = this.$route.query.id
    },
    methods:{
      startani(e){
        this.ani = !0
        var that =this,videotime=0
        setTimeout(function () {
          switch (e) {
            case 0:
              that.pic = '/static/images/1-1.gif'
              videotime = 1500
              break;
            case 1:
              that.pic = '/static/images/2-1.gif'
              videotime = 1800
              break;
            case 2:
              that.pic = '/static/images/3-1.gif'
              videotime = 1700
              break;
            case 3:
              that.pic = '/static/images/7-1.gif'
              videotime = 1680
              break;
            case 4:
              that.pic = '/static/images/5-1.gif'
              videotime = 1750
              break;
            case 5:
              that.pic = '/static/images/6-1.gif'
              videotime = 1700
              break;
            case 6:
              that.pic = '/static/images/4-1.gif'
              videotime = 1650
              break;
          }
          setTimeout(function () {
            that.$router.push({
              path:'/Advantage',
              query:{
                id:e,
                goods_id:that.goods_id
              }
            })
          },videotime)
        },1500)
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
    }
    .goods{
        position: absolute;
        left: 0;
        top: 70px;
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
    /*.goods img:first-child{*/
        /*width: 384px;*/
    /*}*/
    .lines{
        position: absolute;
        -webkit-animation-delay: 1s;//延迟
        animation-delay: 1s;
    }
    .a1{
        right: 53%;
        top: 137px;
    }
    .a2{
        left: 55%;
        top: 180px;
    }
    .a3{
        right: 54%;
        top: 315px;
    }
    .lines.a4{
        left: 50%;
        top: 355px;
        width: 18%;
    }
    .a5{
        right: 52%;
        top: 550px;

    }
    .a6{
        left: 55%;
        top: 500px;

    }
    .a7{
        left: 49%;
        top: 650px;

    }
    .detail{
        position: fixed;
        width: 200px;
        z-index: 3;
        -webkit-animation-delay: 1s;//延迟
        animation-delay: 1s;
        cursor: pointer;
    }
    .detail>div{
        font-size: 20px;
        color: #888888;
        margin-bottom: 15px;
    }
    .detail>p{
        font-size: 14px;
        color: #6e6e6f;
    }
    .detail1{
        left: 20%;
        top: 180px;
    }
    .detail2{
        right:18%;
        top: 210px;
    }
    .detail3{
        left: 20%;
        top: 360px;
    }
    .detail4{
        right: 18%;
        top: 390px;
    }
    .detail5{
        left: 20%;
        top:590px;
    }
    .detail6{
        right: 18%;
        top: 530px;
    }
    .detail7{
        right: 18%;
        top: 700px;
    }
</style>
