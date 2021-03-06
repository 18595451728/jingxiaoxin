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
import Code from '@/components/Code'
import CaseDetail from '@/components/CaseDetail'

Vue.use(Router)
// const HomePage = ()=>import("@/components/HomePage")
const router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: '净小新',
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
        title: '产品中心-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Advantage',
      name: 'Advantage',
      component: Advantage,
      meta: {
        title: '产品优势-净小新',
        needLogin: !1
      }
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs,
      meta: {
        title: '关于我们-净小新',
        needLogin: !1
      }
    },
    {
      path: '/News',
      name: 'News',
      component: News,
      meta: {
        title: '新闻资讯-净小新',
        needLogin: !1
      }
    },
    {
      path: '/ShopCart',
      name: 'ShopCart',
      component: ShopCart,
      meta: {
        title: '我的购物车-净小新',
        needLogin: !0
      }
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment,
      meta: {
        title: '商品购买-净小新',
        needLogin: !0
      }
    },
    {
      path: '/Afterpay',
      name: 'Afterpay',
      component: Afterpay,
      meta: {
        title: '支付成功-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Probation',
      name: 'Probation',
      component: Probation,
      meta: {
        title: '商品试用-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Case',
      name: 'Case',
      component: Case,
      meta: {
        title: '项目案例-净小新',
        needLogin: !1
      }
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail,
      meta: {
        title: '新闻详情-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Partner',
      name: 'Partner',
      component: Partner,
      meta: {
        title: '城市合伙人-净小新',
        needLogin: !1
      }
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail,
      meta: {
        title: '商品详情-净小新',
        needLogin: !1
      }
    },{
      path: '/ProductShow',
      name: 'ProductShow',
      component: ProductShow,
      meta: {
        title: '商品优势-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Mine/UserMessage',
      name: 'UserMessage',
      component: UserMessage,
      meta: {
        title: '个人信息-净小新',
        needLogin: !0
      }
    },
    {
      path: '/Mine/Myorder',
      name: 'Myorder',
      component: Myorder,
      meta: {
        title: '我的订单-净小新',
        needLogin: !0
      }
    },
    {
      path: '/Mine/Mycoupon',
      name: 'Mycoupon',
      component: Mycoupon,
      meta: {
        title: '我的优惠券-净小新',
        needLogin: !0
      }
    },
    {
      path: '/Mine/Address',
      name: 'Address',
      component: Address,
      meta: {
        title: '我的地址-净小新',
        needLogin: !0
      }
    },
    {
      path: '/Mine/Logistics',
      name: 'Logistics',
      component: Logistics,
      meta: {
        title: '我的物流-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Mine/Refund',
      name: 'Refund',
      component: Refund,
      meta: {
        title: '退款-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Mine/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Mine/OffLine',
      name: 'OffLine',
      component: OffLine,
      meta: {
        title: '线下支付-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Mine/Comment',
      name: 'Comment',
      component: Comment,
      meta: {
        title: '评论-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: '联系我们-净小新',
        needLogin: !1
      }
    },
    {
      path: '/Code',
      name: 'Code',
      component: Code,
      meta: {
        title: '状态查询-净小新',
        needLogin: !1
      }
    },
    {
      path: '/CaseDetail',
      name: 'CaseDetail',
      component: CaseDetail,
      meta: {
        title: '案例详情-净小新',
        needLogin: !1
      }
    }
  ]
})
router.beforeEach((to,from,next)=>{

  console.log(from.fullPath.indexOf('?'))
  from.fullPath.indexOf('?') && from.fullPath.split('?')[0] == '/Code'?storage.session.set('toIndex',!0):storage.session.set('toIndex',!1)
  if (to.meta.title) {
    document.title = to.meta.title
  }

  var needLogin = to.meta.needLogin
  if(needLogin){
    var token = storage.session.get('token')
    if(token){
      next();
    }else{
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
