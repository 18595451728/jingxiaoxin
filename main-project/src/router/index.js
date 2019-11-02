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

Vue.use(Router)

export default new Router({
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
      path: '/Case',
      name: 'Case',
      component: Case
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    }
  ]
})
