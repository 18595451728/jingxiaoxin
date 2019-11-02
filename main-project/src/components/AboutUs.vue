<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" alt=""><span>关于我们</span></div>
        <div class="main-con">
            <div class="slogen">
                <p>喝水不用小心</p>
                <p>就用净小新</p>
            </div>
            <img src="/static/images/a-pic.png" alt="">
            <div class="a-art">
                <div class="a-title">杭州再想科技有限公司</div>
                <p>净水器的功能就是过滤水中的漂浮物、重金属、细菌、病毒、余氯、泥沙、铁锈、微生物等都去除掉，它具备精度高的过滤技术，家庭使用的净水器五级过滤技术第一级为滤芯又称PP棉滤芯（PPF），第二级颗粒活性碳（UDF）滤芯，第三级为精密压缩活性炭（CTO）滤芯。</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from './Nav'
    import Bside from './Bside'
  export default {
    name: 'AboutUs',
    components:{
      Nav,
      Bside
    }
  }
</script>

<style scoped>
.emei{
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
    .emei span{
        margin-left: 43px;
    }
    .main-con{
        position: fixed;
        width: 1200px;
        height: 630px;
        left: calc(50% - 600px);
        top: calc(50% - 270px);
        display: flex;
        align-items: center;
        box-shadow:10px 10px 10px -4px rgba(130,130,130,.1);

    }
    .slogen{
        position: absolute;
        top: -20px;
        right: 10px;
        font-size: 40px;
        color: #8f8f8f;
        width: 300px;
    }
    .slogen p:last-child{
        text-align: right;
    }
    .a-title{
        margin-bottom: 30px;
        font-size: 20px;
        color: #1d1d1d;
    }
.a-art{
    width: 440px;
    margin-left: 75px;
}
    .a-art p{
        line-height: 44px;
        font-size: 14px;
        color: #000000;
    }
</style>
