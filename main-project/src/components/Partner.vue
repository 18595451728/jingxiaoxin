<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" alt=""><span>招聘城市合伙人</span></div>
        <div class="partner">
            <div class="partner_main">
                <div class="partner_left">
                    <div class="partner_title">招聘城市合伙人</div>
                    <img src="/static/images/partner.png" alt="">
                </div>
                <div class="partner_right">
                    <div class="partner_right_main">
                        <div class="partner_list">
                            <div class="each_mes">
                                <p>姓名*</p>
                                <div :class="{active:focus=='user_name'}"><input type="text" @focus="changeFocus('user_name')" ref="user_name"><img src="/static/images/sure.png" alt=""></div>
                            </div>
                            <div class="each_mes">
                                <p>邮箱</p>
                                <div :class="{active:focus=='email'}"><input type="text" @focus="changeFocus('email')" ref="email"><img src="/static/images/sure.png" alt=""></div>
                            </div>
                        </div>
                        <div class="partner_list">
                            <div class="each_mes">
                                <p>电话*</p>
                                <div :class="{active:focus=='tel'}"><input type="text" @focus="changeFocus('tel')" ref="tel"><img src="/static/images/sure.png" alt=""></div>
                            </div>
                        </div>
                        <div class="partner_list">
                            <div class="each_mes">
                                <p>地址*</p>
                                <div :class="{active:focus=='address'}"><input type="text" @focus="changeFocus('address')" ref="address"><img src="/static/images/arrow-bottom.png" alt=""></div>
                            </div>
                            <div class="each_mes">
                                <p>详细地址*</p>
                                <div :class="{active:focus=='detail_address'}"><input type="text" @focus="changeFocus('detail_address')" ref="detail_address"><img src="/static/images/sure.png" alt=""></div>
                            </div>
                        </div>
                        <div class="partner_list">
                            <div class="leave_message">
                                <p>简介留言*</p>
                                <textarea name="leave_message" id="leave_message"></textarea>
                            </div>
                        </div>
                        <div class="partner_btn">
                            提交审核
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Nav from './Nav'
  import Bside from './Bside'
  export default {
    name: 'Partner',
    components:{
      Bside,
      Nav
    },
    data:function () {
      return {
        focus:''
      }
    },
    mounted () {
    },
    methods:{
      changeFocus:function (e) {
        console.log(e)
        this.focus = e
      }
    }
  }
</script>

<style scoped>
    .emei{
        width: 100%;
        line-height: 70px;
        padding: 0 115px 0 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #8f8f8f;
        color: white;
        display: flex;
        align-items: center;
        font-size: 16px;
    }
    .emei span{
        margin-left: 43px;
    }
    .partner{
        width: 100%;
        height: calc(100% - 220px);
        position: absolute;
        left: 0;
        top: 150px;
    }
    .partner_main{
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .partner_left{
        width: 50%;
        text-align: center;
    }
    .partner_title{
        font-size: 30px;
        color: #8f8f8f;
        line-height: 60px;
        margin: 35px 0 10px;
    }
    .partner_left img{
        width: 100%;
    }
    .partner_right{
        width: 57.5%;
        margin-left: -7.5%;
        height: 91.3%;
        margin-top: 30px;
        background: #fff;
        -webkit-box-shadow: 3px 3px 40px rgba(130,130,130,.34);
        -moz-box-shadow: 3px 3px 40px rgba(130,130,130,.34);
        box-shadow: 3px 3px 40px rgba(130,130,130,.34);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .partner_right_main{
        width: 78.7%;
    }
    .partner_list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    .each_mes{
        width: 47.2%;
    }
    .each_mes p{
        font-size: 14px;
        color: #000000;
        line-height: 35px;
    }
    .each_mes div{
        width: 100%;
        height: 45px;
        line-height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ececec;
        padding: 0 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 2px solid #ececec;
    }
    .each_mes div.active{
        border: 2px solid #333333;
    }
    .each_mes div input{
        height: 45px;
    }
    .leave_message {
        width: 100%;
    }
    .leave_message p{
        font-size: 14px;
        color: #000000;
        line-height: 35px;
    }
    .leave_message textarea{
        resize: none;
        width: 100%;
        height: 104px;
        background: #ececec;
        padding: 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    .partner_btn{
        width: 46.44%;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        color: white;
        background: #333333;
        margin: 55px 0 20px;
    }
</style>
