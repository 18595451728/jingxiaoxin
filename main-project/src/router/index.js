import Vue from 'vue'
import storage from 'good-storage'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import Product from '@/components/Product'
import Advantage from '@/components/Advantage'
import AboutUs from '@/components/AboutUs'
import News from '@/components/News'
import Case from '@/components/Case'
import NewsDetail from '@/components/NewsDetail'
import Partner from '@/components/Partner'
import ProductDetail from '@/components/ProductDetail'
import ProductShow from '@/components/ProductShow'
import ShopCart from '@/components/ShopCart'
import Payment from '@/components/Payment'
import Afterpay from '@/components/Afterpay'
import Probation from '@/components/Probation'
import UserMessage from '@/components/Mine/UserMessage'
import Myorder from '@/components/Mine/Myorder'
import Mycoupon from '@/components/Mine/Mycoupon'
import Address from '@/components/Mine/Address'
import Logistics from '@/components/Mine/Logistics'
import Refund from '@/components/Mine/Refund'
import OffLine from '@/components/Mine/OffLine'
import Login from '@/components/Mine/Login'

Vue.use(Router)

const router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      // meta:{
      //   title:'首页',
      //   needLogin:!0
      // }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Advantage',
      name: 'Advantage',
      component: Advantage
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/ShopCart',
      name: 'ShopCart',
      component: ShopCart,
      meta: {
        title: '我的购物车',
        needLogin: !0
      }
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment,
      meta: {
        title: '购买',
        needLogin: !0
      }
    },
    {
      path: '/Afterpay',
      name: 'Afterpay',
      component: Afterpay
    },
    {
      path: '/Probation',
      name: 'Probation',
      component: Probation
    },
    {
      path: '/Case',
      name: 'Case',
      component: Case
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/Partner',
      name: 'Partner',
      component: Partner
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },{
      path: '/ProductShow',
      name: 'ProductShow',
      component: ProductShow
    },
    {
      path: '/Mine/UserMessage',
      name: 'UserMessage',
      component: UserMessage,
      meta:{
        title:'个人信息',
        needLogin:!0
      }
    },
    {
      path: '/Mine/Myorder',
      name: 'Myorder',
      component: Myorder,
      meta: {
        title: '我的订单',
        needLogin: !0
      }
    },
    {
      path: '/Mine/Mycoupon',
      name: 'Mycoupon',
      component: Mycoupon,
      meta: {
        title: '我的优惠券',
        needLogin: !0
      }
    },
    {
      path: '/Mine/Address',
      name: 'Address',
      component: Address,
      meta: {
        title: '我的地址',
        needLogin: !0
      }
    },
    {
      path: '/Mine/Logistics',
      name: 'Logistics',
      component: Logistics
    },
    {
      path: '/Mine/Refund',
      name: 'Refund',
      component: Refund
    },
    {
      path: '/Mine/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Mine/OffLine',
      name: 'OffLine',
      component: OffLine
    }
  ]
})
router.beforeEach((to,from,next)=>{
  var needLogin = to.meta.needLogin
  if(needLogin){
    var token = storage.session.get('token')
    console.log(token)
    if(token){
      next();
    }else{
      console.log(to.fullPath)
      storage.session.set('paths',to.fullPath)
      next({
        path:'/Mine/Login'
      })
    }
  }else{
    next();
  }
})

export default router
