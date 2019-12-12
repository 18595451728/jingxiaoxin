<template>
    <div>
        <Nav></Nav>
        <div class="main-con">
            <MineLeft :status="mine_status"></MineLeft>
            <div class="o-right">
                <div class="o-header">
                    <div v-for="(item,index) in status" @click="changeStatus(index)" :class="{active:choose==index}">{{item}}</div>
                </div>
                <div class="no_order" v-if="no_order">
                    <img src="/static/images/no_coupon.png" style="margin-bottom: 55px" alt="">
                    <p><img src="/static/images/zwyhq.png" alt=""></p>
                </div>
                <div class="c-list">
                    <div class="coupon" v-for="item in couponlist" :class="{grey:choose==1}">
                        <div class="coupon-con">
                            <div class="c-top">
                                <p>￥<span>{{item.deduct}}</span></p>
                                <div>
                                    <p>优惠券</p>
                                    <p>{{choose==0?'未使用':choose==1?'已使用':'已过期'}}</p>
                                </div>
                            </div>
                            <div class="c-bottom">限{{item.starttime}}-{{item.endtime}}使用</div>
                        </div>
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
    name: 'Mycoupon',
    components :{
      Nav,
      MineLeft
    },
    data:function () {
      return {
        choose:0,
        status:['未使用','已使用','已过期'],
        mine_status:'',
        couponlist:[],
        no_order:''
      }
    },
    mounted(){
      this.mine_status = this.$route.query.mine_status
      this.initData(0)
    },
    methods:{
      changeStatus(e){
        this.choose = e
        this.initData(e)
      },
      initData(e){
        var that =this
        that.$axios.post('/User/couponList',{
          token:that.$storage.session.get('token'),
          coupon_type:e
        }).then(res=>{
          console.log(res)
          if(res.data.status==1){
            that.couponlist = res.data.data.list
            if(that.couponlist.length==0){
              that.no_order = !0
            }else{
              that.no_order = !1
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
    .no_order{
        width: 100%;
        padding-top: 140px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
    }
    .main-con{
        width: 1350px;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
    }
    .o-right{
        width: 70%;
        height: 700px;
        overflow-y: scroll;
        -webkit-box-shadow: 0 0 59px rgba(0,0,0,.08);
        -moz-box-shadow: 0 0 59px rgba(0,0,0,.08);
        box-shadow: 0 0 59px rgba(0,0,0,.08);
        /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
        -ms-overflow-style:none;
        /*火狐下隐藏滚动条*/
        overflow:-moz-scrollbars-none;
    }
    .o-right::-webkit-scrollbar{width:0px}
    .o-header{
        width: 100%;
        line-height: 48px;
        display: flex;
    }
    .o-header>div{
        width: 33.33%;
        background: #333;
        color: white;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
    }
    .o-header>div.active{
        line-height: 44px;
        border-top: 4px solid #fff;
        background: #0099cc;
    }
    .c-list{
        padding: 45px 20px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .coupon{
        width: 32%;
        margin-right: 2%;
        height: 135px;
        background: url("/static/images/couponbg.png") no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .coupon:nth-child(3n){
        margin-right: 0;
    }
    .c-top{
        display: flex;
        align-items: center;
        padding: 0 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c-top>p{
        font-size: 26px;
        margin-right: 20px;
    }
    .c-top>p span{
        font-size: 60px;
    }
    .c-top>div p:first-child{
        color: #3c3c3c;
        font-size: 30px;
        text-align: center;
        margin-bottom: 10px;
    }
    .c-top>div p:last-child{
        width: 100px;
        line-height: 24px;
        text-align: center;
        color: white;
        font-size: 14px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        background: #0099cc;
    }
    .c-bottom{
        font-size: 12px;
        color: #2c2c2c;
        text-align: center;
    }
    .coupon.grey{
        color: #a2a2a2;
    }
    .coupon.grey .c-top>div p:first-child{
        color: #a2a2a2;
    }
    .coupon.grey .c-top>div p:last-child{
        background: #a2a2a2;
    }
    .coupon.grey .c-bottom{
        color: #a2a2a2;
    }
    @media screen and (max-width: 1400px) {
        .main-con{
            width: 90%;
        }
        .coupon{
            width: 49%;
        }
        .coupon:nth-child(3n){
            margin-right: 2%;
        }
        .coupon:nth-child(2n){
            margin-right: 0;
        }
    }
</style>
