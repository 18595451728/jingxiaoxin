<template>
    <div>
        <Nav></Nav>
        <Bside></Bside>
        <div class="emei"><img src="/static/images/back.png" @click="back" alt=""><span>联系我们</span></div>
        <div class="partner">
            <div class="partner_main">
                <div class="partner_left">
                    <div class="partner_title">联系我们</div>
                    <img src="/static/images/maps.png" alt="">
                </div>
                <div class="partner_right">
                    <div class="partner_right_main">
                        <img src="/static/images/logo_black.png" alt="">
                        <div class="name">杭州再想科技有限公司</div>
                        <p>公司地址：浙江省杭州市拱墅区登云路518号3号楼12楼</p>
                        <p>公司座机：0571-87562008</p>
                        <p>客服电话：400-080-5680</p>
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
    name: 'Contact',
    components: {
      Bside,
      Nav
    },
    data: function () {
      return {
        user_name:'',
        email:'',
        tel:'',
        detail_address:'',
        focus: '',
        confirmName: !1,
        confirmEmail: !1,
        confirmTel: !1,
        confirmAddress: !1,
        showAddress:!1,
        provinceList:[],
        provinceId:'',
        cityId:'',
        areaId:'',
        content:'',
        level:'',
        suggest:''
      }
    },
    mounted () {
    },
    methods: {
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
    .each_mes div.chooseAddress{
        position: absolute;
        width: calc(100% + 4px);
        height: 390px;
        overflow-y: scroll;
        -ms-overflow-style:none;
        overflow:-moz-scrollbars-none;
        left: -2px;
        top: calc(100% + 2px);
        background: #ececec;
        display: block;
        z-index: 11;
    }
    .each_mes div.chooseAddress::-webkit-scrollbar{width:0px}
    .each_mes div.chooseAddress p{
        line-height: 55px;
        border-bottom: 1px solid #cfcfcf;
        padding: 0 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;
    }
    .emei {
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

    .emei span {
        margin-left: 43px;
    }

    .partner {
        width: 100%;
        height: calc(100% - 220px);
        position: absolute;
        left: 0;
        top: 150px;
    }

    .partner_main {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .partner_left {
        width: 50%;
        text-align: center;
    }

    .partner_title {
        font-size: 30px;
        color: #8f8f8f;
        line-height: 60px;
        margin: 125px 0 10px;
    }

    .partner_left img {
        width: 100%;
    }

    .partner_right {
        width: 57.5%;
        margin-left: -7.5%;
        height: 66%;
        margin-top: 120px;
        background: #fff;
        -webkit-box-shadow: 3px 3px 40px rgba(130, 130, 130, .34);
        -moz-box-shadow: 3px 3px 40px rgba(130, 130, 130, .34);
        box-shadow: 3px 3px 40px rgba(130, 130, 130, .34);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .partner_right_main {
        width: 78.7%;
    }
    .name{
        font-size: 25px;
        color: #1d1d1d;
        margin: 65px 0 50px;
    }
    .partner_right_main p{
        font-size: 20px;
        color: #383838;
        margin-top: 30px;
    }

    @media screen and (max-width: 1300px) {
        .partner_main {
            width: 95%;
        }

        .partner_title {
            font-size: 24px;
        }

        .each_mes div {
            padding: 0 10px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
    }

    @media screen and (max-width: 1200px) {
        .partner_right {
            height: 83%;
        }
    }

    @media screen and (max-width: 1100px) {
        .partner_right {
            height: 76%;
        }

        .partner_list {
            margin-bottom: 10px;
        }

        .partner_btn {
            margin: 20px 0 10px;
        }
    }
</style>
