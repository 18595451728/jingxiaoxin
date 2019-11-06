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
                <div class="o-list" v-for="item in 10">
                    <div class="l-top"><p>2019-10-22  订单号：4738678647926</p><p>待付款</p></div>
                    <div class="l-con">
                        <router-link tag="div" to="/Mine/Logistics" class="l-left">
                            <img src="/static/images/goodimg.png" alt="">
                            <div class="l-art">
                                <div class="a-top"><span class="goodsname">净小新净水器</span><span>颜色：高级灰</span><span>尺寸：1500mm</span></div>
                                <div class="a-bottom">￥45.05</div>
                            </div>
                        </router-link>
                        <div class="l-right">
                            <div class="b-top">
                                <div></div>
                                <div class="backmoney">退款</div>
                            </div>
                            <div class="b-bottom">
                                <div>取消订单</div>
                                <router-link tag="div" to="">付款</router-link>
                            </div>
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
    name: 'Myorder',
    components :{
      Nav,
      Bside,
      MineLeft
    },
    data:function () {
      return {
        choose:0,
        status:['全部','待发货','待收货','待评论','退款'],
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
        width: 20%;
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
    .o-list{
        padding: 30px 27px 30px 50px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 3px solid #f4f4f4;
    }
    .l-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: #000;
        margin-bottom: 25px;
    }
    .l-con{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .l-left{
        display: flex;
        /*justify-content: space-between;*/
        align-items: center;
        width: 55%;
        cursor: pointer;
    }
    .l-left>img{
        width: 86px;
        margin-right: 65px;
    }

    .a-top{
        font-size: 14px;
        color: #000;
        margin-bottom: 50px;
    }
    .a-top span{
        margin-right: 20px;
    }
    .a-top span:last-child{
        margin-right: 0;
    }
    .goodsname{
        font-size: 16px;
    }
    .a-bottom{
        font-size: 16px;
        color: #3c3c3c;
    }
    .l-right{
        width: 28%;

    }
    .b-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .b-top>div{
        width: 48%;
        line-height: 45px;
        border: 2px solid #646464;
        text-align: center;
        color: #3c3c3c;
        font-size: 14px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .b-top>div:first-child{
        border: none;
    }
    .b-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .b-bottom>div{
        width: 48%;
        line-height: 45px;
        text-align: center;
        font-size: 14px;
        color: white;
        cursor: pointer;
    }
    .b-bottom>div:first-child{
        background: #999999;
    }
    .b-bottom>div:last-child{
        background: #0099cc;
    }
    @media screen and (max-width: 1400px) {
        .l-left{
            width: 70%;
        }
        .main-con{
            width: 92%;
        }
        .l-left>img{
            margin-right: 40px;
        }
    }
</style>
