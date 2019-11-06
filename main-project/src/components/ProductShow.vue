<template>
    <div>
        <Nav></Nav>
        <div class="bgzi">
            <img src="/static/images/bgzi.png" alt="">
        </div>
        <div class="goods">
            <img src="/static/images/goods.png" class="animated bounceInDown" alt="">
            <img src="/static/images/a1.png" class="lines a1 animated fadeIn" alt="">
            <img src="/static/images/a2.png" class="lines a2 animated fadeIn" alt="">
            <img src="/static/images/a1.png" class="lines a3 animated fadeIn" alt="">
            <img src="/static/images/a4.png" class="lines a4 animated fadeIn" alt="">
            <img src="/static/images/a1.png" class="lines a5 animated fadeIn" alt="">
        </div>
        <div class="detail detail1 animated rotateInDownLeft">
            <div>美国进口RO滤芯</div>
            <p>净水器按过滤效果分为微滤、超滤、RO 反渗透净水器，微滤、超滤虽常见，但无法彻底滤除水垢.</p>
        </div>
        <div class="detail detail2 animated rotateInUpLeft">
            <div>真正实现龙头直饮</div>
            <p>净水器按过滤效果分为微滤、超滤、RO 反渗透净水器，微滤、超滤虽常见，但无法彻底滤除水垢.</p>
        </div>
        <div class="detail detail3 animated rotateInDownLeft">
            <div>无重严谨过滤</div>
            <p>净水器按过滤效果分为微滤、超滤、RO 反渗透净水器，微滤、超滤虽常见，但无法彻底滤除水垢.</p>
        </div>
        <div class="detail detail4 animated rotateInUpLeft">
            <div>全食品级材料制造</div>
            <p>净水器按过滤效果分为微滤、超滤、RO 反渗透净水器，微滤、超滤虽常见，但无法彻底滤除水垢.</p>
        </div>
        <div class="detail detail5 animated rotateInDownLeft">
            <div>0.0001微米过滤</div>
            <p>净水器按过滤效果分为微滤、超滤、RO 反渗透净水器，微滤、超滤虽常见，但无法彻底滤除水垢.</p>
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

      }
    },
    mounted () {

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
    .goods{
        position: absolute;
        left: 0;
        top: 80px;
        width: 100%;
        height: calc(100% - 80px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
    .goods img:first-child{
        width: 384px;
    }
    .lines{
        width: 22%;
        position: absolute;
        -webkit-animation-delay: 1s;//延迟
        animation-delay: 1s;
    }
    .a1{
        right: 51%;
        top: 137px;
    }
    .a2{
        left: 50.5%;
        top: 290px;
    }
    .a3{
        right: 51%;
        top: 465px;
    }
    .lines.a4{
        left: 54.5%;
        top: 455px;
        width: 18%;
    }
    .a5{
        right: 51%;
        top: 620px;

    }
    .detail{
        position: fixed;
        width: 17%;
        z-index: 3;
        -webkit-animation-delay: 2s;//延迟
        animation-delay: 2s;
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
        left: 14%;
        top: 200px;
    }
    .detail2{
        right: 8%;
        top: 360px;
    }
    .detail3{
        left: 14%;
        top: 550px;
    }
    .detail4{
        right: 8%;
        top: 530px;
    }
    .detail5{
        left: 14%;
        top:700px;
    }
</style>
