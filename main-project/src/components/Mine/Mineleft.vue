<template>
    <div class="mine-left">
        <div class="mine-head">
            <img :src="user.head_img" alt="">
            <span>个人中心</span>
        </div>
        <div class="fnc-list">
            <div class="list1">
                <div @click="changeChoose(0)" :class="{active:status==0}"><span></span><p>个人信息</p></div>
                <div @click="changeChoose(1)" :class="{active:status==1}"><span></span><p>我的订单</p></div>
                <div @click="changeChoose(2)" :class="{active:status==2}"><span></span><p>收货地址</p></div>
                <div @click="changeChoose(3)" :class="{active:status==3}"><span></span><p>我的优惠券</p></div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Mineleft',
    data:function () {
      return {
        user:''
      }
    },
    props:['status'],
    mounted () {
        console.log(this.status)
      var that=this
      that.$axios.post('/User/userInfo',{
        token:that.$storage.session.get('token')
      }).then(res=>{
        console.log(res)
        if(res.data.status==1){
          that.user = res.data.data.user
        }
      })
    },
    methods:{
      changeChoose(e){
        console.log(e)
        this.is_choosed = e
        var u= ''
        switch (e) {
          case 0 :
            u='/Mine/UserMessage'
            break;
          case 1 :
            u='/Mine/Myorder'
            break;
          case 2 :
            u='/Mine/Address'
            break;
          case 3 :
            u='/Mine/Mycoupon'
            break;
        }
        this.$router.push({
          path:u,
          query:{
            mine_status:e
          }
        })
      }
    }
  }
</script>

<style scoped>
    .mine-left{
        width: 295px;
        height: 560px;
        background: #fff;
        -webkit-box-shadow: 0 0 59px rgba(0,0,0,.08);
        -moz-box-shadow:  0 0 59px rgba(0,0,0,.08);
        box-shadow: 0 0 59px rgba(0,0,0,.08);
    }
    .mine-head{
        width: 100%;
        height: 102px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #eaeaea;
    }
    .mine-head img{
        width: 61px;
        height: 61px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin-right: 30px;
    }
    .mine-head span{
        font-size: 18px;
        color: #0b0306;
    }
    .list1{
        padding: 30px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 16px;
        border-bottom: 1px solid #eaeaea;
    }
    .list1>div{
        margin-bottom: 30px;
        text-align: center;
        position: relative;
        font-size: 16px;
        color: #666666;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .list1>div:last-child{
        margin-bottom: 0;
    }
    .list1>div.active{
        color: #0099cc;
    }
    .list1>div span{
        display: block;
        content: "";
        width: 3px;
        height: 16px;
        background: #fff;
        margin-right: 95px;
    }
    .list1>div.active span{
        background: #0099cc;
    }
    @media screen and (max-width: 1400px){
        .mine-left{
            width: 250px;
        }
        .list1>div span{
            margin-right: 85px;
        }
    }
</style>
