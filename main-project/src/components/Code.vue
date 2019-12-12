<template>
    <div class="contain">
        <div class="title">提交成功</div>
        <div class="wrp_code">
            <img src="/static/images/qrcode.jpg" width="280" alt="">
        </div>
        <div class="js">
            <p>{{wenan}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Code',
    data(){
      return {
        wenan:''
      }
    },
    mounted () {
      let status = this.$route.query.status
      status==0?this.wenan='扫码进入小程序查看试用审核结果':this.wenan='扫码进入净小新商城查看详情'
    }
  }
</script>

<style scoped>
    .contain{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgb(51,51,51);
        left: 0;
        top: 0;
        padding: 50px;
    }
    .title{
        text-align: center;
        font-size: 20px;
        line-height: 1.6;
        color: white;
    }
    .wrp_code{
        text-align: center;
        margin-top: 15px;
    }
    .js{
        width: 280px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        margin: 15px auto 0;
        text-align: center;
        padding: 7px 14px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: white;
        font-size: 13px;
        font-weight: 400;
        line-height: 1.6;
        background: #232323;
        -webkit-box-shadow: inset 0 5px 10px -5px #191919, 0 1px 0 0 #444;
        -moz-box-shadow: inset 0 5px 10px -5px #191919, 0 1px 0 0 #444;
        box-shadow: inset 0 5px 10px -5px #191919, 0 1px 0 0 #444;
    }
</style>
