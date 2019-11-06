<template>
    <div class="all">
        <div class="main-con">
            <div class="l-head">
                <div :class="{active:is_login}" @click="changeLogin(0)">登录</div>
                <div :class="{active:!is_login}" @click="changeLogin(1)">注册</div>
            </div>
            <div class="l-body">
                <div class="login-div" v-if="is_login">
                    <div class="username"><span :class="{active:focus=='username'}">账号</span><input @focus="changeFocus('username')" @blur="changeFocus()" type="text" placeholder="123456"></div>
                    <div class="password"><span :class="{active:focus=='password'}">密码</span><input @focus="changeFocus('password')" @blur="changeFocus()" type="text" placeholder=""></div>
                    <div class="changeword">
                        <div class="remember" @click="rememberword">
                            <p><img src="/static/images/remember.png" alt="" v-show="remember"></p>
                            <p>记住密码</p>
                        </div>
                        <router-link tag="div" to="" class="forget">忘记密码?</router-link>
                    </div>
                    <div class="login" @click="tologin()">登录</div>
                </div>
                <div class="reg-div login-div" v-else>
                    <div class="telephone"><span :class="{active:focus=='telephone'}">账号</span><input @focus="changeFocus('telephone')" @blur="changeFocus()" type="text" placeholder=""></div>
                    <div class="password"><input type="text" placeholder="验证码"></div>
                    <div class="getCode"><div>发送验证码</div></div>
                    <div class="login" @click="toReg()">注册</div>
                </div>
            </div>
        </div>
        <div class="close"><span>关闭</span><img src="/static/images/close.png" @click="closeLogin" alt=""></div>
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
      },
      rememberword(){
        this.remember = !this.remember
      },
      tologin(){},
      closeLogin(){
        this.$emit('closeLogin',!1)
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
        background: #252525;
        color: #fff;
    }
    .login-div::after{
        height: 0;
        content: "";
        visibility: hidden;
        display: block;
        clear: both;
    }
    .login-div>div{
        margin-top: 24px;
        width: 100%;
        height: 54px;
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
        line-height: 54px;
    }
    .login-div>div.changeword{
        display: flex;
        background: none;
        border: none;
        line-height: 100%;
    }
    .changeword>div{
        flex: 1;
        font-size: 14px;
    }
    .remember{
        display: flex;
        align-items: center;
        color: #999999;
        cursor: pointer;
    }

    .remember p:first-child{
        width: 16px;
        height: 16px;
        border: 1px solid #999999;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        position: relative;
        margin-right: 12px;

    }
    .remember img{
        position: absolute;
    }
    .forget{
        color: #0099cc;
        cursor: pointer;
    }
    .login-div>div.login{
        display: block;
        cursor: pointer;
        background: #252525;
        color: white;
        font-size: 14px;
        text-align: center;
    }
    .login-div>div.getCode{
        display: block;
        height: 54px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }
    .getCode div{
        width: 156px;
        line-height: 54px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        background: #0099cc;
        float: right;
    }
    .password input{
        margin-left: 0;
    }
</style>
