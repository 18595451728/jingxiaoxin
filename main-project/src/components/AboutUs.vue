<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" @click="back" alt=""><span>关于我们</span></div>
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
                <img src="/static/images/a-intro.png" style="margin-bottom: 44px" alt="">
                <div class="a-title">杭州再想科技有限公司</div>
                <p>净小新是杭州再想科技旗下高端净饮机品牌，是一家集研发、生产、销售、服务为一体的高科技型企业，注重创新和用户体验，专注净水及饮水产品研发十余年致力于以科技 构建安全 健康  便捷的饮水生活。自主创新凉白开净饮机系列倡导过滤+烧开杀菌+保鲜三重防护的饮水理念，目前已荣获国家多项专利技术 杭州再想科技已荣获“杭州市高新技术企业”，“浙江省科技型中小企业”，通过了国家CCC认证，饮用水卫生安全产品卫生许可批件，中国家用电器检测等多项权威认证机构的检测</p>
            </div>
            <img src="/static/images/a-pic.png" style="margin-left: 75px" alt="">
        </div>

    </div>
</template>

<script>
  import Nav from './Nav'
  import Bside from './Bside'

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
    },
    methods:{
    back(){
      this.$router.go(-1)
    }
    }
  }
</script>

<style scoped>
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
</style>
