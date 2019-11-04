<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="main-con">
            <MineLeft :status="mine_status"></MineLeft>
            <div class="o-right">
                <div class="o-header">
                    <div v-for="(item,index) in status" @click="changeStatus(index)" :class="{active:choose==index}">{{item}}</div>
                </div>
                <div class="c-list">
                    <div class="coupon" v-for="item in 11" :class="{grey:item==3}">
                        <div class="coupon-con">
                            <div class="c-top">
                                <p>￥<span>30</span></p>
                                <div>
                                    <p>优惠券</p>
                                    <p>未使用</p>
                                </div>
                            </div>
                            <div class="c-bottom">限2019-07-23当天使用</div>
                        </div>
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
    name: 'Mycoupon',
    components :{
      Nav,
      Bside,
      MineLeft
    },
    data:function () {
      return {
        choose:0,
        status:['未使用','已使用','已过期'],
        mine_status:''
      }
    },
    mounted(){
      this.mine_status = this.$route.query.mine_status
    },
    methods:{
      changeStatus(e){
        this.choose = e
      }
    }
  }
</script>

<style scoped>
    .main-con{
        width: 72.9%;
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
    }
    .c-top>p{
        font-size: 26px;
        margin-right: 20px;
    }
    .c-top>p span{
        font-size: 74px;
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
</style>
