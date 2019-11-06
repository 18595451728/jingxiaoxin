import Vue from 'vue'
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

Vue.use(Router)
export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
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
      component: ShopCart
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
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
      component: UserMessage
    },
    {
      path: '/Mine/Myorder',
      name: 'Myorder',
      component: Myorder
    },
    {
      path: '/Mine/Mycoupon',
      name: 'Mycoupon',
      component: Mycoupon
    },
    {
      path: '/Mine/Address',
      name: 'Address',
      component: Address
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
      path: '/Mine/OffLine',
      name: 'OffLine',
      component: OffLine
    }
  ]
})
