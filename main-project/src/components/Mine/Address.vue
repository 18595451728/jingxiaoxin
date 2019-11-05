<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="main-con">
            <MineLeft :status="mine_status"></MineLeft>
            <div class="a-right">
                <table>
                    <thead>
                    <tr>
                        <td>收货人</td>
                        <td class="address">收货地址</td>
                        <td class="tel">联系电话</td>
                        <td class="fnc">操作</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in 2">
                        <td>净小新</td>
                        <td class="address">黑龙江省牡丹江市爱民区等哈就很快恢复手机壳112室</td>
                        <td class="tel">18042429444</td>
                        <td class="fnc"><span>修改</span>|<span>删除</span></td>
                        <td class="moren"><span>默认地址</span></td>
                    </tr>
                    </tbody>
                </table>
                <div class="addAddress">+新增收货地址</div>
            </div>
        </div>

    </div>
</template>

<script>
  import Nav from '../Nav'
  import Bside from '../Bside'
  import MineLeft from './MineLeft'
  export default {
    name: 'Address',
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
    .a-right{
        width: 70%;
    }
    table{
        width: 100%;
        font-size: 14px;
        color: #000000;
        border-collapse: collapse;
        border: 1px solid #ccc;
    }
    table tr{
        line-height: 50px;
        border-bottom: 1px solid #cccccc;
    }
    table tbody{
        font-size: 16px;
    }
    table tbody tr td{
        padding: 15px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    table tr td:first-child{
        padding-left: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .tel,.fnc,.moren{
        text-align: center;
    }
    table tbody .fnc{
        color: #bbbbbb;
    }
    .fnc span{
        margin: 0 5px;
        vertical-align: middle;
        cursor: pointer;
    }

    .moren span{
        display: block;
        padding: 7.5px 15px;
        border: 1px solid #0099cc;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 25px;
        color: #0099cc;
        width: 70%;
        cursor: pointer;
    }
    .address{
        width: 23.5%;
    }
    .addAddress{
        float: right;
        margin-top: 33px;
        margin-right: 10px;
        font-size: 16px;
        color: #0099cc;
        cursor: pointer;
    }
</style>
