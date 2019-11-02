<template>
<div>
    <Nav></Nav>
    <Bside></Bside>
    <div class="emei"><img src="/static/images/back.png" alt=""><span>新闻资讯</span></div>
    <div class="detail">
        <div class="d-name"><span>「新闻资讯」</span>更好的设计</div>
        <div class="d-time">发表于2015年6月21日| 通过管理员| 印刷中</div>
        <img src="/static/images/newsDetail.png" alt="">
        <p>大师清洗街头艺术chambray umami，keytar现成的宝丽来宝丽来尝试性小批量弹性主义者Shoreditch冷压Banksy早午餐。 Gastropub cronut绑腿，Intelligentsia苦瓜连帽衫定制的陈词滥调早午餐Odd Future正宗的冥想 iPhone胡子工匠乙烯基。布什威克手提袋豆腐复古素食Intelligentsia meh直接贸易四乐高。 Twee藜麦斜挎包cronut，semiotics牛仔裤。美观的原产地咖啡开衫自拍照，Portland banjo Kickstarter cliche滑板鱿鱼美食酒吧。开襟羊毛衫赃物，胡子lo-fi猪肚艺术派对博客Godard牧草。</p>
        <p>肖尔迪奇艺术派对地道的追梦者韦斯·安德森。饲草无麸质冥想mlkshk蓝色奶瓶，使健康的传家宝变得更加健康。 Carles Thundercats美食酒吧可持续发展，American Apparel绑腿banh mi冥想艺术派对的标签。奎奴亚藜复古Neutra柔韧性派，青年布cronut干草叉DIY艺术派对Truffaut Banksy单源咖啡病毒Tumblr美学。自拍照布鲁克林知识分子（Selfies Brooklyn Intelligentsia），被弄乱了独角鲸的corn眼标本。胡须酿酒厂从农场到餐桌的冷榨布鲁克林。 Keffiyeh冷榨Echo Park艺术派对，现成的不对称migas。</p>
        <p>Deep v dreamcatcher cronut，High Life从农场到餐桌的耶稣受难像早午餐复古Neutra Bushwick小胡子3狼月亮胡子kogi。戈达德（Godard）抢购一空后就乱扔了，拖着鱿鱼+1滑板有机哈巴狗Pitchfork Carles lo-fi在农场到餐桌上占领了原始牛仔布。 Seitan现成的追梦者定制自行车杀手。 90年代伐木的五花肉早午餐牛仔短裤。审美冷压的连帽卫士，爱奥罗尼克豆腐。素食主义者，无论媚俗弹出，+ 1牛仔短裤信托基金。滑板上的鱿鱼乌贼，戈达尔Tee无麸质可持续。</p>
        <p>Neutra Stumptown Chia格子Seitan标签慢碳水化合物，喝醋实际上是Odd Future Marfa传家宝normcore摄影棚。打字机yr Intelligentsia班卓琴时尚斧头，尝试耐用的High Life波浪号小批keffiyeh波特兰。 DIY波浪号动物标本制版布边鲜味李小龙。 Chia羊毛衫古实际上是病毒的耶稣受难像，me缝丹参YOLO哈巴狗。牧草DIY艺术派对动物标本制作，合成古物Marfa Meh。 VHS chambray Pinterest奥斯丁。素食主义者早午餐健康哥特，DIY美食酒吧normcore动作+1 chambray波特兰病毒的耶稣受难像8位藜麦。</p>
        <div class="pages">
            <div>上一篇：无</div>
            <div>上一篇：美好的发生的结果</div>
        </div>
    </div>
</div>
</template>

<script>
  import Nav from './Nav'
  import Bside from './Bside'
  export default {
    name: 'NewsDetail',
    components:{
      Bside,
      Nav
    },
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
.detail{
    width: 1400px;
    margin: 0 auto;
}
.detail::after{
    content: "";
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
}
    .d-name{
        text-align: center;
        margin: 65px 0 20px;
        font-size: 16px;
        color: #6c6c6c;
    }
    .d-name span{
        color: #252525;
    }
    .d-time{
        text-align: center;
        font-size: 14px;
        color: #999999;
        margin-bottom: 20px;
    }
    .detail p{
        font-size: 14px;
        color: #696969;
        line-height: 25px;
        margin:40px 0 50px;
    }
    .pages{
        font-size: 14px;
        color: #999;
        float: right;
        margin: 50px 0 35px;
        line-height: 25px;
    }
    .pages>div{
        cursor: pointer;
    }
</style>
