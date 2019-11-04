<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="main-con">
            <MineLeft :status="mine_status"></MineLeft>
            <div class="m-right">
                <div>
                    <div class="user_top">
                        <div class="t-header">个人信息</div>
                        <div class="t-con">
                            <div class="t-left">
                                <img src="/static/images/head_img.png" alt="">
                                <p><img src="/static/images/upload.png" alt=""><span>上传头像</span></p>
                            </div>
                            <div class="t-right">
                                <div class="t-phone">
                                    <p>手机号码</p>
                                    <p><input type="number" placeholder="18012345678"></p>
                                </div>
                                <div class="t-email">
                                    <p>邮箱</p>
                                    <p><input type="number" placeholder="amlk86@gmail.com"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="user_bottom">
                        <router-link tag="div" to="">退出</router-link>
                        <router-link tag="div" to="">保存</router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Nav from '../Nav'
    import Bside from '../Bside'
    import MineLeft from './MineLeft'
  export default {
    name: 'UserMessage',
    components :{
      Nav,
      Bside,
      MineLeft
    },
    data:function () {
      return {
        mine_status:''
      }
    },
    mounted(){
      this.mine_status = this.$route.query.mine_status
    }
  }
</script>

<style scoped>
    .main-con{
        width: 72.4%;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .m-right{
        width: 78.57%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .m-right>div{
        width: 60%;
    }
    .user_top{
        width: 100%;
        padding: 28px 50px 120px;
        -webkit-box-shadow: 0 0 59px rgba(0,0,0,.08);
        -moz-box-shadow: 0 0 59px rgba(0,0,0,.08);
        box-shadow: 0 0 59px rgba(0,0,0,.08);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .t-header{
        text-align: center;
        font-size: 16px;
        color: #000;
        margin-bottom: 45px;
    }
    .t-con{
        display: flex;
        justify-content: space-between;
    }
    .t-left{
        width: 24.18%;
    }
    .t-left>img{
        width: 100%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .t-left>p{
        font-size: 14px;
        color: #999999;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }
    .t-left>p img{
        margin-right: 10px;
    }
    .t-right{
        width: 69%;
    }
    .t-right>div{
        margin-bottom: 30px;
    }
    .t-right>div p{
        color: #000000;
        font-size: 15px;
    }
    .t-right>div p:first-child{
        margin-bottom: 10px;

    }
    .t-right>div p:last-child{
        background: #ececec;
        line-height: 47px;
        padding: 0 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .user_bottom{
        margin-top: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .user_bottom>div{
        width: 21.53%;
        line-height: 50px;
        text-align: center;
        color: white;
        font-size: 14px;
        cursor: pointer;
    }
    .user_bottom>div:first-child{
        background: #999999;
    }
    .user_bottom>div:last-child{
        background: #0099cc;
        margin-left: 28px;
    }
</style>
