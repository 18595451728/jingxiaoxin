<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" @click="back" alt=""><span>关于我们</span></div>
        <div class="main-con">
            <div class="slogen">
                <p>{{content.title}}</p>
                <p>{{content.sub_title}}</p>
            </div>
            <img src="/static/images/a-pic.png" alt="">
            <div class="a-art">
                <div class="a-title">{{content.name}}</div>
                <p>{{content.describe}}</p>
            </div>
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

    .slogen {
        position: absolute;
        top: -20px;
        right: 10px;
        font-size: 40px;
        color: #8f8f8f;
        width: 300px;
    }

    .slogen p:last-child {
        text-align: right;
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
            width: 360px;
        }
        .slogen{
            width: 275px;
            font-size: 35px;
        }
    }
</style>
