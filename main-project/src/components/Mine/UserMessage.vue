<template>
    <div>
        <Nav></Nav>
        <div class="main-con">
            <MineLeft :status="mine_status"></MineLeft>
            <div class="m-right">
                <div>
                    <div class="user_top">
                        <div class="t-header">个人信息</div>
                        <div class="t-con">
                            <div class="t-left">
                                <img :src="user.head_img" alt="">
                                <p><img src="/static/images/upload.png" alt=""><span>上传头像</span><input type="file" @change="uploadHeadImg"></p>
                            </div>
                            <div class="t-right">
                                <div class="t-phone">
                                    <p>手机号码</p>
                                    <p><input type="number" placeholder="18012345678" readonly v-model="user.telephone"></p>
                                </div>
                                <div class="t-email">
                                    <p>邮箱</p>
                                    <p><input type="text" placeholder="amlk86@gmail.com" v-model="user.email"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="user_bottom">
                        <div @click="exit">退出</div>
                        <div @click="save">保存</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Nav from '../Nav'
    import MineLeft from './MineLeft'
  export default {
    name: 'UserMessage',
    components :{
      Nav,
      MineLeft
    },
    data:function () {
      return {
        mine_status:'',
        pic:'',
        user:''
      }
    },
    mounted(){
      this.mine_status = this.$route.query.mine_status
      var that=this
      that.$axios.post('/User/userInfo',{
        token:that.$storage.session.get('token')
      }).then(res=>{
        console.log(res)
        if(res.data.status==1){
          that.user = res.data.data.user
        }else{
          if(res.data.status==-1){
            this.$layer.msg('登录失效，请重新登录')
            that.$storage.session.set('paths',that.$route.fullPath)
            setTimeout(function () {
              that.$router.push('/Mine/Login')
            },1500)
          }else{
            this.$layer.msg(res.data.msg)
          }
        }
      })
    },
    methods:{
      uploadHeadImg(e){
        var that =this
        console.log(e.target.files[0])
        var file = e.target.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
          that.$axios.post('/Index/uploadImg',{
            img_str:reader.result,
            path:'headimg'
          }).then(res=>{
            if(res.data.status==1){
              that.user.head_img = reader.result
              that.pic = res.data.data.pic
            }
          })
        }
      },
      save(){
        var that=this
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
        if(!reg.test(that.user.email)){
          that.$layer.msg('邮箱格式不正确')
          return false;
        }
        that.$axios.post('/User/setInfo',{
          token:that.$storage.session.get('token'),
          email:that.user.email,
          head_img:that.pic
        }).then(res=>{
          if(res.data.status==1){
            that.$layer.msg(res.data.msg)
          }else{
            that.$layer.msg(res.data.msg)
          }
        })
      },
      exit(){
        this.$storage.session.remove('token')
        this.$router.push({
          path:'/'
        })
      }
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
        width: 663px;
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
        width: 131px;
    }
    .t-left>img{
        width: 131px;
        height: 131px;
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
        position: relative;
    }
    .t-left>p input{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9;
        opacity: 0;
        cursor: pointer;
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
        width: 140px;
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
    @media screen and (max-width: 1400px){
        .m-right>div{
            width: 90%;
        }
    }
    @media screen and (max-width: 1200px){
        .t-left{
            width: 100px;
        }
        .t-left>img{
            width: 100px;
            height: 100px;
        }
    }

</style>
