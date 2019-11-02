<template>
    <div>
        <Nav></Nav>
        <div class="bgzi">
            <img src="/static/images/bgzi.png" alt="">
        </div>
        <div class="advantage">
            <div class="a-con">
                <img src="/static/images/advantage.png" alt="">
                <div class="a-right">
                    <div class="tt">
                        <div class="t-num">1</div>
                        <div>
                            <p class="t-name">净小新的人性化设计</p>
                            <p class="t-desc">连续出开水，满足不同饮水需求</p>
                        </div>
                    </div>
                    <div class="t-intro">净水器按过滤效果分为微滤、超滤、RO 反渗透净水器，微滤、超滤虽常见，但无法彻底滤除水垢、重金属及有害有机物。净小新净水器采用过滤等级最高的 RO 反渗透技术，它能拦截大于 0.0001 微米的物质是超滤净水器精度的 100 倍。</div>
                    <router-link to="" tag="div" class="t-buy">点击购买</router-link>
                </div>
            </div>
        </div>
        <Bside></Bside>
    </div>
</template>

<script>
  import Nav from './Nav'
  import Bside from './Bside'
  export default {
    name: 'Advantage',
    components: {
      Bside,
      Nav
    },
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
        padding: 30px 0;
    }
    .advantage{
        position: absolute;
        left: 0;
        top: 80px;
        width: 100%;
        height: calc(100% - 80px);
        z-index: 999;
    }

    .a-con{
        width: 1400px;
        margin: 30px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .a-right{
        width: 520px;
    }
    .tt{
        display: flex;
        align-items: center;
        color: #333;
    }
    .t-num{
        font-size: 120px;
    }
    .t-name{
        font-size: 40px;
    }
    .t-desc{
        font-size: 30px;
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
</style>
