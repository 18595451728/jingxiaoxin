<template>
    <div class="all">
        <div class="main-con">
            <div class="l-head">
                <div :class="{active:is_login}" @click="changeLogin(0)">登入</div>
                <div :class="{active:!is_login}" @click="changeLogin(1)">注册</div>
            </div>
            <div class="l-body">
                <div class="login-div" v-if="is_login">
                    <div class="username"><span :class="{active:focus=='username'}">账号</span><input @focus="changeFocus('username')" @blur="changeFocus()" type="text" placeholder="18595451728"></div>
                    <div class="password"><span :class="{active:focus=='password'}">密码</span><input @focus="changeFocus('password')" @blur="changeFocus()" type="text" placeholder="18595451728"></div>
                    <div class="changeword">
                        <div class="remember">
                            <p><img src="/static/images/remember.png" alt=""></p><p>记住密码</p>
                        </div>
                        <div class="forget">忘记密码?</div>
                    </div>
                </div>
                <div class="reg-div" v-else>22</div>
            </div>
        </div>
        <div class="close"><span>关闭</span><img src="/static/images/close.png" alt=""></div>
    </div>
</template>

<script>
  export default {
    name: 'Login',
    data:function () {
      return {
        remember:!0,
        is_login:!0,
        focus:''
      }
    },
    methods:{
      changeLogin(e){
        if(e){
          this.is_login = !1
        }else{
          this.is_login = !0
        }
      },
      changeFocus(e){
        this.focus =e
      }
    }
  }
</script>

<style scoped>
    .all{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,.9);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .close{
        position: absolute;
        right: 125px;
        top: 125px;
        display: flex;
        align-items: center;
        font-size: 30px;
        color: #333333;
    }
    .close img{
        margin-left: 23px;
        cursor: pointer;
    }
    .main-con{
        width: 370px;
    }
    .l-head{
        width: 100%;
        display: flex;
        line-height: 52px;
        background: #e6e6e6;
        color: #9d9d9d;
    }
    .l-head>div{
        width: 50%;
        text-align: center;
        cursor: pointer;
    }
    .l-head>div.active{
        background: #333;
        color: #fff;
    }
    .login-div>div{
        margin-top: 24px;
        width: 100%;
        line-height: 54px;
        border: 1px solid #e6e6e6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
        padding: 0 13px;
        display: flex;
        align-items: center;
    }
    .login-div>div span{
        font-size: 14px;
        color: #999999;
    }
    .login-div>div span.active{
        color: #000;
    }
    .login-div input{
        width: 80%;
        margin-left: 10px;
    }
    .changeword{
        display: flex;
    }
    .changeword>div{
        flex: 1;
        font-size: 14px;
    }
    .remember{
        display: flex;
    }
    .remember img{
        margin-left: 12px;
    }
</style>
