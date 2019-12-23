<template>
    <div>
        <Nav></Nav>
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
                    <tr v-for="(item,index) in alist">
                        <td>{{item.consignee}}</td>
                        <td class="address">{{item.province}}{{item.city}}{{item.district}}{{item.address}}</td>
                        <td class="tel">{{item.telephone}}</td>
                        <td class="fnc"><span @click="edit(item)">修改</span>|<span @click="deleteAddress(index)">删除</span></td>
                        <td class="moren"><span @click="chooseMoren(index)" :class="{grey:item.is_default==0}">默认地址</span></td>
                    </tr>
                    </tbody>
                </table>
                <div class="addAddress" @click="add">+新增收货地址</div>
            </div>
        </div>
        <div class="changeAddress" v-show="editAddress">
            <div class="main">
                <div class="c-title">
                    <p>添加收货地址</p>
                    <img src="/static/images/close.png" @click="exit" alt="">
                </div>
                <div class="c-con">
                    <div class="name">
                        <p><span>*</span>收货人</p>
                        <div class="contain">
                            <input type="text" v-model="username" placeholder="请输入收货人姓名">
                        </div>
                    </div>
                    <div class="name">
                        <p><span>*</span>收货地址</p>
                        <div class="contain" @click="getProvince(0)">
                            <input type="text" v-model="content" readonly style="cursor: pointer;" placeholder="请输入收货地址">
                            <img src="/static/images/arrow-bottom.png" alt="">
                            <div class="addresslist" v-if="showaddress">
                                <p v-for="item in provinceList" @click.stop="getMessage(item.id,item.name)">{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="name">
                        <p><span>*</span>详细地址</p>
                        <div class="contain">
                            <input type="text" v-model="details" placeholder="请输入详细地址">
                        </div>
                    </div>
                    <div class="name">
                        <p><span>*</span>手机号码</p>
                        <div class="contain">
                            <input type="text" v-model="telephone" placeholder="请输入手机号">
                        </div>
                    </div>
                    <div class="sure" @click="sure">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Nav from '../Nav'
  import MineLeft from './MineLeft'
  export default {
    name: 'Address',
    components :{
      Nav,
      MineLeft
    },
    data:function () {
      return {
        editAddress:!1,
        mine_status:'',
        alist:'',
        showaddress:!1,
        provinceList:[],
        details:'',
        provinceId:'',
        cityId:'',
        areaId:'',
        province:'',
        city:'',
        area:'',
        level:0,
        content:'',
        username:'',
        telephone:'',
        chooseId:'',
        isEdit:!1,
        choosedAdress:''
      }
    },
    mounted(){
      this.mine_status = this.$route.query.mine_status
      this.initAddress()
    },
    methods:{
      getProvince(e){
        this.showaddress = !this.showaddress
        if(this.showaddress){
          this.getMessage(e)
        }else{
          this.provinceId = ''
          this.province = ''
          this.cityId=''
          this.city=''
          this.areaId = ''
          this.area = ''
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
          this.showaddress = !1
          this.level = 0
          this.content = this.province+' '+this.city+' '+this.area
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
      sure(){
        var username =this.username,content=this.content,details=this.details,telephone=this.telephone,reg = /^1[3456789]\d{9}$/
        if(!username){
          this.$layer.msg('姓名不能为空')
          return false;
        }
        if(!details){
          this.$layer.msg('详细地址不能为空')
          return false;
        }
        if(!content){
          this.$layer.msg('地址不能为空')
          return false;
        }
        if(!telephone){
          this.$layer.msg('手机号不能为空')
          return false;
        }
        if(!reg.test(telephone)){
          this.$layer.msg('手机号格式错误')
          return false;
        }
        var that =this
        var data ={
          token:this.$storage.session.get('token'),
          consignee:username,
          telephone:telephone,
          address:details,
          is_default:0,
          province_id:this.provinceId,
          city_id:this.cityId,
          district_id:this.areaId
        }
        if(this.isEdit){
          data.address_id = this.chooseId
        }
        this.$axios.post('/User/addAddress',data).then(res=>{
          console.log(res)
          that.$layer.msg(res.data.msg)
          that.editAddress = !1
          that.initAddress()
        })
      },
      add(){
        this.editAddress = !0
        this.isEdit = !1
        this.chooseId = ''
        this.choosedAdress = ''
        this.username = ''
        this.details = ''
        this.telephone = ''
        this.provinceId = ''
        this.cityId = ''
        this.areaId = ''
        this.content = ''
      },
      exit(){
        this.editAddress = !1
      },
      edit(e){
        console.log(e)
        this.editAddress = !0
        this.isEdit = !0
        this.chooseId = e.id
        this.choosedAdress = e
        this.username = e.consignee
        this.details = e.address
        this.telephone = e.telephone
        this.provinceId = e.province_id
        this.cityId = e.city_id
        this.areaId = e.district_id
        this.content = e.province+e.city+e.district
      },
      initAddress(){
        var that =this
        this.$axios.post('/User/addressList',{
          token:this.$storage.session.get('token')
        }).then(res=>{
          console.log(res)
          if(res.data.status==1){
            that.alist = res.data.data.list
          }
        })
      },
      changeStatus(e){
        this.choose = e
      },
      chooseMoren(i){
        var that=this
        this.$axios.post('/User/defaultAddress',{
          token:this.$storage.session.get('token'),
          address_id:this.alist[i].id
        }).then(res=>{
            console.log(res)
          that.$layer.msg(res.data.msg)
          if(res.data.status==1){
            that.initAddress()
          }
        })
      },
      deleteAddress(i){
        var that=this
        this.$axios.post('/User/addressDel',{
          token:this.$storage.session.get('token'),
          address_id:this.alist[i].id
        }).then(res=>{
          console.log(res)
          that.$layer.msg(res.data.msg)
          if(res.data.status==1){
            that.initAddress()
          }
        })
      }
    }
  }
</script>

<style scoped>
    .addresslist{
        position: absolute;
        width: 100%;
        height: 390px;
        overflow-y: scroll;
        -ms-overflow-style:none;
        overflow:-moz-scrollbars-none;
        left: -1px;
        top: 100%;
        background: white;
        border: 1px solid #cfcfcf;
        z-index: 9;
    }
    .addresslist::-webkit-scrollbar{width:0px}
    .addresslist p{
        line-height: 55px;
        border-bottom: 1px solid #cfcfcf;
        padding: 0 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;
    }
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
        margin: 0 auto;
        cursor: pointer;
    }
    .moren span.grey{
        color: #bbb;
        border-color: #bbb;
    }
    .address{
        width: 23.5%;
        line-height: 30px;
    }
    .addAddress{
        float: right;
        margin-top: 33px;
        margin-right: 10px;
        font-size: 16px;
        color: #0099cc;
        cursor: pointer;
    }
    .changeAddress{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.21);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }
    .main{
        width: 810px;
        height: 710px;
        background: #fff;
    }
    .c-title{
        line-height: 70px;
        padding: 0 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        color: #221815;
    }
    .c-title img{
        width: 20px;
        cursor: pointer;
    }
    .c-con{
        padding: 15px 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c-con>div{
        margin-top: 30px;
        font-size: 16px;
        color: #9fa0a0;
    }
    .c-con>div.sure{
        width: 215px;
        line-height: 50px;
        text-align: center;
        background: #0099cc;
        color: white;
        font-size: 16px;
        margin: 30px auto 0;
        cursor: pointer;
    }
    .c-con>div>p span{
        color: #e60012;
        font-size: 18px;
    }
    .contain{
        margin-top: 20px;
        height: 50px;
        border: 1px solid #dddddd;
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        position: relative;
    }
    .contain input{
        line-height: 48px;
        height: 48px;
        width: 100%;
        padding-right: 50px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    @media screen and (max-width: 1400px) {
        .main-con{
            width: 85%;
        }
        table tbody{
            font-size: 14px;
        }
        .address{
            line-height: 25px;
        }
    }
</style>
