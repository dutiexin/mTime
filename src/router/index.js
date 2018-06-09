import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Detail from '@/components/detail'
import Tickets from '@/components/tickets'
import ShoppingDetail from '@/components/shoppingDetail'
import Shopping from '@/components/shopping'
import Find from '@/components/find'
import Information from '@/components/information'
import Regist from '@/components/regist'
import Test from '@/components/test'
import NowPlaying from '@/components/nowplaying'
import ComingSoon from '@/components/comingsoon'

// find 子路由 >>>>>>
import Journalism from '@/components/find/journalism'
import Prevue from '@/components/find/prevue'
import RankingList from '@/components/find/rankingList'
import FilmReview from '@/components/find/filmReview'
// find 子路由 <<<<<<

Vue.use(Router);

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/nowplaying',
      component: NowPlaying
    },
    {
      path: '/comingsoon',
      component: ComingSoon
    },
    {
      name:"detail",
      path:'/detail/:id', 
      component:Detail
    },
    {
      path:'/tickets',
      component:Tickets
    },
    {

      name:"detail",
      path:'/detail/:id', 
      component:Detail
    },
    {
      path:'/shopping',
      component:Shopping
    },

        {
          path:'/shoppingDetail/:id',
          name:"shoppingDetail",
          component:ShoppingDetail
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
    },
    {
      path:'/regist',
      component:Regist
    },
    {
      path:'/test',
      component:Test
    }
  ]
})
