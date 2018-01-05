import Vue from 'vue'
import Router from 'vue-router'

import App from '@/components/header.vue'


import Home from '@/components/home'
import Tickets from '@/components/tickets'
import Shopping from '@/components/shopping'
import Find from '@/components/find'
import Information from '@/components/information'

// find 子路由 >>>>>>
import Journalism from '@/components/find/journalism'
import Prevue from '@/components/find/prevue'
import RankingList from '@/components/find/rankingList'
import FilmReview from '@/components/find/filmReview'
// find 子路由 <<<<<<




Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/tickets',
      component:Tickets
    },
    {
      path:'/shopping',
      component:Shopping
    },
    {
      path:'/find',
      component:Find,
      children:[{
        path:'journalism',
        // 新闻
        component:Journalism
      },
      {
        path:'prevue',
        // 预告
        component:Prevue
      },
      {
        path:'rankingList',
        // 排行
        component:RankingList
      },
      {
        path:'filmReview',
        // 影评
        component:FilmReview
      },
      {
        path:'/',
        // 影评
        redirect:'/find/journalism'
      },]
    },
    {
      path:'/information',
      component:Information
    }
  ]
})
