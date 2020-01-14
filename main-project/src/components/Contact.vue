<template>
    <div>
        <Nav></Nav>
        <div class="emei"><img src="/static/images/back.png" @click="back" style="cursor: pointer;" alt=""><span>联系我们</span></div>
        <div class="partner">
            <div class="partner_main">
                <div class="partner_left">
                    <div class="partner_title">联系我们</div>
                    <div id="baiduMap" style="height: 520px;">
                        <img src="/static/images/maps.png" alt="">
                    </div>
                </div>
                <div class="partner_right">
                    <div class="partner_right_main">
                        <img src="/static/images/logo_black.png" alt="">
                        <div class="name">{{mes.title}}</div>
                        <p><span>公司地址：</span>{{mes.sub_title}}</p>
                        <p><span>生产基地：</span>{{mes.scjd}}</p>
                        <!--<p><span>公司座机：</span>{{mes.describe}}</p>-->
                        <!--<p><span>客服电话：</span>{{mes.kf}}</p>-->
                        <p><span>全国服务热线：</span>{{mes.kf}} <i>{{mes.describe}}</i></p>
                    </div>
                </div>
            </div>
        </div>
        <Bside></Bside>
    </div>
</template>

<script>
  import Nav from './Nav'
  import Bside from './Bside'

  export default {
    name: 'Contact',
    components: {
      Nav,
      Bside
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
        suggest:'',
        mes:'',
        CityInfo: {
          longitude: 120.1241,
          latitude: 30.3033
        },
      }
    },
    mounted () {
      var that =this
      that.$axios.post('/Content/contact',{}).then(res=>{
        console.log(res)
        if(res.data.status==1){
          res.data.data.contact[0].kf = res.data.data.contact[0].link
          res.data.data.contact[0].scjd = '浙江省慈溪市周巷镇'
          that.mes = res.data.data.contact[0]
        }
      })

      this.initBaiduMap()
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      initBaiduMap() {
        let that = this
        let script = document.createElement("script")
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=kqqFs4t7NNk639q5Iv0WSyQK9Upa1QmM&callback=createMap"
        document.head.appendChild(script)
        window.createMap = () => {
          //创建Map实例
          var map = new BMap.Map("baiduMap"); // 创建Map实例
          map.centerAndZoom(new BMap.Point(this.CityInfo.longitude, this.CityInfo.latitude), 11); // 创建点坐标,初始化地图,设置中心点坐标和地图级别
          map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
          map.addControl(new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
          }));
          map.addControl(new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT
          }));
          map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
          map.enableInertialDragging(); //两秒后开启惯性拖拽

          var point = new BMap.Point(this.CityInfo.longitude, this.CityInfo.latitude);
          var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25));
          var marker2 = new BMap.Marker(point, {icon: myIcon});
          map.addOverlay(marker2);
          var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>浙江省杭州市拱墅区登云路518号3号楼12楼</p>");  //弹出窗口
          marker2.addEventListener("click", function(){
            this.openInfoWindow(infoWindow);
          });
        }
      },

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
        line-height:40px;
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
        z-index: 0;
    }

    .partner_right_main {
        width: 78.7%;
    }
    .name{
        font-size: 23px;
        color: #1d1d1d;
        margin: 65px 0 50px;
    }
    .partner_right_main p{
        font-size: 16px;
        color: #383838;
        margin-top: 30px;
    }
    .partner_right_main p span{
        /*font-weight: bold;*/
        font-family: pfb;
    }
    .partner_right_main p i{
        font-style: normal;
        margin-left: 10px;
    }
    .footer{
        position: absolute;
        top: 100%;
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
