import Vue from 'vue'
import Router from 'vue-router'

import App from '@/components/header.vue'


import Home from '@/components/home'
import Tickets from '@/components/tickets'
import Shopping from '@/components/shopping'
import Find from '@/components/find'
import Information from '@/components/information'


Vue.use(Router);


export default new Router({
  routes: [

   
    {
      path: '/',
      name: 'home',
      component: Home
    },

  

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
      component:Find
    },
    {
      path:'/information',
      component:Information
    }

 
  ]
})
