<template>
    <div class="all" v-if="needLogin">
        <div class="main-con">
            <div class="l-head">
                <div :class="{active:is_login}" @click="changeLogin(0)">登录</div>
                <div :class="{active:!is_login}" @click="changeLogin(1)">注册</div>
            </div>
            <div class="l-body">
                <div class="login-div" v-if="is_login">
                    <div class="username"><span :class="{active:focus=='username'}">账号</span><input
                            @focus="changeFocus('username')" @blur="changeFocus()" v-model="login_phone" type="text" placeholder="">
                    </div>
                    <div class="password"><span :class="{active:focus=='password'}">密码</span><input
                            @focus="changeFocus('password')" @blur="changeFocus()" v-model="login_password" type="password" placeholder=""></div>
                    <div class="changeword">
                        <div class="remember" @click="rememberword">
                            <p><img src="/static/images/remember.png" alt="" v-show="remember"></p>
                            <p>记住密码</p>
                        </div>
                        <!--<router-link tag="div" to="" class="forget">忘记密码?</router-link>-->
                    </div>
                    <div class="login" @click="tologin()">登录</div>
                </div>
                <div class="reg-div login-div" v-else>
                    <div class="telephone"><span :class="{active:focus=='telephone'}">手机号</span><input
                            @focus="changeFocus('telephone')" @blur="changeFocus()" v-model="reg_phone" type="number"
                            placeholder=""></div>
                    <div class="password"><span :class="{active:focus=='password'}">密码</span><input
                            @focus="changeFocus('password')" @blur="changeFocus()" v-model="password" type="password"
                            placeholder=""></div>
                    <div class="codes"><input type="text" v-model="codes" placeholder="验证码">
                        <div class="getCode">
                            <div v-if="!code" @click="getcode()" style="cursor: pointer;">发送验证码</div>
                            <div v-else>{{timeDown}}后重新发送</div>
                        </div>
                    </div>

                    <div class="login" @click="toReg()">注册</div>
                </div>
            </div>
        </div>
        <!--<div class="close"><span>关闭</span><img src="/static/images/close.png" @click="closeLogin" alt=""></div>-->
    </div>
</template>

<script>
  export default {
    name: 'Login',
    data: function () {
      return {
        remember: !1,
        is_login: !0,
        focus: '',
        code: '',
        timeDown: 60,
        needLogin:!0,
        login_phone:'',
        login_password:'',
        reg_phone:'',
        password:'',
        codes: ''
      }
    },
    mounted(){
      var paths = this.$storage.session.get('paths')
      var password = this.$storage.session.get('password')
      var username = this.$storage.session.get('username')
      var remember = this.$storage.session.get('remember')
      this.paths = paths
      this.login_phone = username
      this.login_password = password
      if(!remember){
        this.remember = !1
      }else{
        this.remember = !0
      }

      console.log(this.remember)
    },
    methods: {
      openLogin(){
        console.log(111)
        this.needLogin = !0
      },
        closeLogin () {
        this.needLogin = !1
      },
      changeLogin (e) {
        if (e) {
          this.is_login = !1
        } else {
          this.is_login = !0
        }
      },
      changeFocus (e) {
        this.focus = e
      },
      rememberword () {
        this.remember = !this.remember
      },
      tologin () {
        var that =this
        var phone = that.login_phone,password=that.login_password,myreg = /^[1][3,4,5,7,8|9][0-9]{9}$/

        if (phone) {
          if (!myreg.test(phone)) {
            that.$layer.msg('手机号格式错误')
            return false;
          }
        } else {
          that.$layer.msg('手机号不能为空')
          return false;
        }

        that.$axios.post('/Login/login',{
          telephone:phone,
          password:password,
          source:2
        }).then(res=>{
            console.log(res)
          if(res.data.status==1){
            var token = res.data.data.token
            that.$layer.msg('登录成功')
            that.$storage.session.set('token',token)
            that.$storage.session.set('remember',that.remember)
            if(that.remember){
              that.$storage.session.set('username',phone)
              that.$storage.session.set('password',password)
            }else{
              that.$storage.session.remove('password')
            }
            setTimeout(()=>{
              that.$router.push({path: that.paths})
            },1000)

          }else{
            that.$layer.msg(res.data.msg)
          }
        })
      },

      getcode () {
        var reg_phone = this.reg_phone, myreg = /^[1][3,4,5,7,8|9][0-9]{9}$/, that = this
        console.log(reg_phone)
        if (reg_phone) {
          console.log(1111)
          if (myreg.test(reg_phone)) {
            that.$axios.post('/Login/sendMessage', {
              telephone: reg_phone,
              codetype: 1
            }).then(res => {
              console.log(res)
              if (res.data.status == 1) {
                that.$layer.msg(res.data.msg)
                that.code = !0
                that.downTime()
              }else{
                that.$layer.msg(res.data.msg)
              }
            })
          } else {
            console.log(333)
            this.$layer.msg('手机号格式错误')
          }
        } else {
          this.$layer.msg('手机号不能为空')
        }

      },
      toReg(){
        var that = this
        var telephone = that.reg_phone,password = that.password,codes = that.codes,type=2
        if(!telephone){
          that.$layer.msg('手机号不能为空')
          return false;
        }
        if(!(/^[1][3,4,5,7,8|9][0-9]{9}$/).test(telephone)){
          that.$layer.msg('手机号格式错误')
          return false;
        }
        if(password.length<8){
          that.$layer.msg('密码长度不能少于8位')
          return false;
        }
        var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
        if(!reg.test(reg)) {
          that.$layer.msg('密码至少包含一个字母和一个数字')
          return false;
        }
        if(!codes){
          that.$layer.msg('验证码不能为空')
          return false;
        }
        that.$axios.post('/Login/register',{
          telephone:telephone,
          password:password,
          code:codes,
          type:type
        }).then(res=>{
          if(res.data.status ==1){
            console.log(res.data.data)
            var token = res.data.data.token
            if(token){
              that.$storage.session.set('token',token)
              that.$layer.msg('注册成功')
              setTimeout(()=>{
                that.$router.push({path: that.paths})
              },1000)
            }

          }else{
            that.$layer.msg(res.data.msg)
          }
        })

      },
      downTime () {
        var that = this
        var tt = setInterval(() => {
          that.timeDown--
          console.log(that.timeDown)
          if (that.timeDown <= 0) {
            that.code = ''
            that.timeDown = 5
            clearInterval(tt)
          }
        }, 1000)
      }
    }
  }
</script>

<style scoped>
    .all {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, .9);
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .close {
        position: absolute;
        right: 125px;
        top: 125px;
        display: flex;
        align-items: center;
        font-size: 30px;
        color: #333333;
    }

    .close img {
        margin-left: 23px;
        cursor: pointer;
    }

    .main-con {
        width: 370px;
    }

    .l-head {
        width: 100%;
        display: flex;
        line-height: 52px;
        background: #e6e6e6;
        color: #9d9d9d;
    }

    .l-head > div {
        width: 50%;
        text-align: center;
        cursor: pointer;
    }

    .l-head > div.active {
        background: #252525;
        color: #fff;
    }

    .login-div::after {
        height: 0;
        content: "";
        visibility: hidden;
        display: block;
        clear: both;
    }

    .login-div > div {
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

    .login-div > div span {
        font-size: 14px;
        color: #999999;
    }

    .login-div > div span.active {
        color: #000;
    }

    .login-div input {
        width: 80%;
        margin-left: 10px;
        line-height: 54px;
    }

    .login-div > div.changeword {
        display: flex;
        background: none;
        border: none;
        line-height: 100%;
    }

    .changeword > div {
        flex: 1;
        font-size: 14px;
    }

    .remember {
        display: flex;
        align-items: center;
        color: #999999;
        cursor: pointer;
    }

    .remember p:first-child {
        width: 16px;
        height: 16px;
        border: 1px solid #999999;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        position: relative;
        margin-right: 12px;

    }

    .remember img {
        position: absolute;
    }

    .forget {
        color: #0099cc;
        cursor: pointer;
    }

    .login-div > div.login {
        display: block;
        cursor: pointer;
        background: #252525;
        color: white;
        font-size: 14px;
        text-align: center;
    }

    .login-div > div.getCode {
        display: block;
        height: 54px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .getCode div {
        width: 156px;
        line-height: 54px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        background: #0099cc;
        float: right;
    }

    .login-div > div.codes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0;
    }

    .codes input {
        margin-left: 0;
        width: 50%;
    }
</style>
