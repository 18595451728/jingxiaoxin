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
import Comment from '@/components/Mine/Comment'
import Contact from '@/components/Contact'

Vue.use(Router)

const router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: '首页',
        needLogin: !1
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product,
      meta: {
        title: '产品中心',
        needLogin: !1
      }
    },
    {
      path: '/Advantage',
      name: 'Advantage',
      component: Advantage,
      meta: {
        title: '产品优势',
        needLogin: !1
      }
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs,
      meta: {
        title: '关于我们',
        needLogin: !1
      }
    },
    {
      path: '/News',
      name: 'News',
      component: News,
      meta: {
        title: '新闻资讯',
        needLogin: !1
      }
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
        title: '商品购买',
        needLogin: !0
      }
    },
    {
      path: '/Afterpay',
      name: 'Afterpay',
      component: Afterpay,
      meta: {
        title: '支付成功',
        needLogin: !1
      }
    },
    {
      path: '/Probation',
      name: 'Probation',
      component: Probation,
      meta: {
        title: '商品试用',
        needLogin: !0
      }
    },
    {
      path: '/Case',
      name: 'Case',
      component: Case,
      meta: {
        title: '项目案例',
        needLogin: !1
      }
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail,
      meta: {
        title: '新闻详情',
        needLogin: !1
      }
    },
    {
      path: '/Partner',
      name: 'Partner',
      component: Partner,
      meta: {
        title: '城市合伙人',
        needLogin: !0
      }
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail,
      meta: {
        title: '商品详情',
        needLogin: !1
      }
    },{
      path: '/ProductShow',
      name: 'ProductShow',
      component: ProductShow,
      meta: {
        title: '商品优势',
        needLogin: !1
      }
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
      component: Logistics,
      meta: {
        title: '我的物流',
        needLogin: !1
      }
    },
    {
      path: '/Mine/Refund',
      name: 'Refund',
      component: Refund,
      meta: {
        title: '退款',
        needLogin: !1
      }
    },
    {
      path: '/Mine/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录',
        needLogin: !1
      }
    },
    {
      path: '/Mine/OffLine',
      name: 'OffLine',
      component: OffLine,
      meta: {
        title: '线下支付',
        needLogin: !1
      }
    },
    {
      path: '/Mine/Comment',
      name: 'Comment',
      component: Comment,
      meta: {
        title: '评论',
        needLogin: !1
      }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: '联系我们',
        needLogin: !1
      }
    }
  ]
})
router.beforeEach((to,from,next)=>{

  if (to.meta.title) {
    document.title = to.meta.title
  }

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
