import Vue from 'vue'
import Router from 'vue-router'
import Header1 from '@/components/header.vue'
import App from '@/components/header.vue'
import Shop from '@/components/shop.vue'
import Home from '@/components/home.vue'
import Faxian from '@/components/faxian.vue'


Vue.use(Router);


export default new Router({
  routes: [
   
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mall/index',
      name: 'shop',
      component: Shop
    },
    {
      path: '/faxian',
      name: 'faxian',
      component: Faxian
    },



    
 
  ]
})
