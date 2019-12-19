<template>
    <div>
        <Nav></Nav>
        <div class="emei"><img src="/static/images/back.png" style="cursor: pointer;" @click="back" alt=""><span>加入城市合伙人</span></div>
        <div class="partner">
            <div class="partner_main">
                <div class="partner_left">
                    <div class="partner_title">加入城市合伙人</div>
                    <img src="/static/images/partner.png" alt="">
                </div>
                <div class="partner_right">
                    <div class="partner_right_main">
                        <div class="partner_list">
                            <div class="each_mes">
                                <p>姓名*</p>
                                <div :class="{active:focus=='user_name'}"><input type="text"
                                                                                 @focus="changeFocus('user_name')"
                                                                                 @blur="nameBlur()" v-model="user_name"><img
                                        src="/static/images/sure.png" v-if="confirmName" alt=""></div>
                            </div>
                            <div class="each_mes">
                                <p>邮箱*</p>
                                <div :class="{active:focus=='email'}"><input type="text" @focus="changeFocus('email')"
                                                                             @blur="emailBlur()" v-model="email"><img
                                        src="/static/images/sure.png" v-if="confirmEmail" alt=""></div>
                            </div>
                        </div>
                        <div class="partner_list">
                            <div class="each_mes">
                                <p>电话*</p>
                                <div :class="{active:focus=='tel'}"><input type="text" @focus="changeFocus('tel')"
                                                                           @blur="telBlur()" v-model="tel"><img
                                        src="/static/images/sure.png" v-if="confirmTel" alt=""></div>
                            </div>
                        </div>
                        <div class="partner_list">
                            <div class="each_mes">
                                <p>地址*</p>
                                <div :class="{active:focus=='address'}" @click="getProvince(0)" style="position:relative;">
                                    <input type="text" readonly v-model="content">
                                    <img src="/static/images/arrow-bottom.png" alt="">
                                    <div class="chooseAddress" v-if="showAddress">
                                        <p v-for="item in provinceList" @click.stop="getMessage(item.id,item.name)">{{item.name}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="each_mes">
                                <p>详细地址*</p>
                                <div :class="{active:focus=='detail_address'}"><input type="text" @blur="addressBlur()"
                                                                                      @focus="changeFocus('detail_address')"
                                                                                      v-model="detail_address"><img
                                        src="/static/images/sure.png" v-if="confirmAddress" alt=""></div>
                            </div>
                        </div>
                        <div class="partner_list">
                            <div class="leave_message">
                                <p>简介留言*</p>
                                <textarea name="leave_message" v-model="suggest" id="leave_message"></textarea>
                            </div>
                        </div>
                        <div class="partner_btn" @click="send">
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

  export default {
    name: 'Partner',
    components: {
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
    created(){
      let toIndex = this.$storage.session.get('toIndex')
      toIndex?this.$router.push('/'):''
    },
    mounted () {
    },
    methods: {


      getProvince(e){
        this.showAddress = !this.showAddress
        if(this.showAddress){
          this.focus = 'address'
          this.getMessage(e)
        }else{
          this.focus = ''
          this.provinceId = ''
          this.cityId = ''
          this.areaId = ''
          this.content = ''
          this.level = 0
        }
      },
      getMessage(e,name){
        console.log(name,this.level)
        this.level++;
        switch (this.level) {
          case 2 :
            this.provinceId = e
            this.province = name
            break;
          case 3 :
            this.cityId=e
            this.city=name
            break;
          case 4 :
            this.areaId = e
            this.area = name
            break;
        }
        if(this.level >= 4){
          this.showAddress = !1
          this.level = 0
          this.content = this.province+' '+this.city+' '+this.area
          this.focus = ''
          return false;
        }
        var that =this
        this.$axios.post('/Index/getRegion', {
          parent_id: e
        }).then(res => {
          console.log(res)
          if(res.data.status==1){
            that.provinceList = res.data.data
          }
        })
      },
      changeFocus: function (e) {
        console.log(e)
        this.focus = e
      },
      nameBlur: function () {
        var name = this.user_name
        console.log(name)
        if (name && name.replace(/(^\s*)|(\s*$)/g, '') && name.replace(/(^\s*)|(\s*$)/g, '') != '') {
          this.confirmName = !0
        } else {
          this.$layer.msg('姓名不能为空')
          this.confirmName = !1
        }
      },
      emailBlur: function () {
        var email = this.email
        console.log(email)
        if (email && email != '') {
          var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
          if (reg.test(email)) {
            this.confirmEmail = !0
          } else {
            this.$layer.msg('邮箱格式错误')
          }
        } else {
          this.$layer.msg('邮箱不能为空')
          this.confirmEmail = !1
        }
      },
      telBlur: function () {
        var tel = this.tel
        console.log(tel)
        if (tel && tel != '') {
          var reg = /^1[3456789]\d{9}$/
          if (reg.test(tel)) {
            this.confirmTel = !0
          } else {
            this.$layer.msg('手机号格式错误')
          }
        } else {
          this.$layer.msg('手机号不能为空')
          this.confirmTel = !1
        }
      },
      addressBlur: function () {
        var detail_address = this.detail_address
        console.log(detail_address)
        if (detail_address && detail_address.replace(/(^\s*)|(\s*$)/g, '') && detail_address.replace(/(^\s*)|(\s*$)/g, '') != '') {
          this.confirmAddress = !0
        } else {
          this.$layer.msg('详细地址不能为空')
          this.confirmAddress = !1
        }
      },
      send () {
        var that = this
        // if(!this.$storage.session.get('token')){
        //   this.$router.push('/Mine/Login')
        //   return false;
        // }
        that.$axios.post('/Partner/apply', {
          // token:that.$storage.session.get('token'),
          name:this.user_name,
          tel:this.tel,
          email:this.email,
          address:this.content,
          suggest:this.suggest,
          province_id:this.provinceId,
          city_id:this.cityId,
          district_id:this.areaId,
        }).then(res => {
          console.log(res)
          if(res.data.status==1){
            // that.$layer.msg('提交成功，请等待审核')
            // setTimeout(()=>{
              that.$router.push({
                path:'/Code',
                query:{
                  status:1
                }
              })
            // },1000)
          }else{
            that.$layer.msg(res.data.msg)
          }
        })
      },
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
        line-height: 60px;
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

    .emei img {
        width: 10px;
    }

    .partner {
        width: 100%;
        height: calc(100% - 130px);
        position: absolute;
        left: 0;
        top: 130px;
    }

    .partner_main {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        font-family: pfb;
    }

    .partner_left {
        width: 50%;
        text-align: center;
    }

    .partner_title {
        font-size: 30px;
        color: #8f8f8f;
        line-height: 60px;
        margin: 35px 0 10px;
    }

    .partner_left img {
        width: 100%;
    }

    .partner_right {
        width: 57.5%;
        margin-left: -7.5%;
        height: 88%;
        margin-top: 30px;
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

    .partner_list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .each_mes {
        width: 47.2%;
    }

    .each_mes p {
        font-size: 14px;
        color: #000000;
        line-height: 35px;
    }

    .each_mes div {
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

    .each_mes div.active {
        border: 2px solid #333333;
    }

    .each_mes div input {
        height: 45px;
    }

    .leave_message {
        width: 100%;
    }

    .leave_message p {
        font-size: 14px;
        color: #000000;
        line-height: 35px;
    }

    .leave_message textarea {
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

    .partner_btn {
        width: 46.44%;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        color: white;
        background: #333333;
        margin: 55px 0 20px;
        cursor: pointer;
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
