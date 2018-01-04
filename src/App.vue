<template>
  <div id="app">
    <header1></header1>

    
    <router-view/>
    <footernav></footernav>
    

  </div>
</template>

<script>

import Vue from "vue";
import axios from "axios";
import Header from "@/components/header.vue";
import Search from "@/components/search.vue";
import Film from "@/components/film.vue";
import Home from "@/components/home.vue";


Vue.component("header1",Header);
Vue.component("search1",Search);
Vue.component("film",Film);
Vue.component("home",Home);


import HotPoints from "@/components/hotpoints"
import Footer from "@/components/footer"
Vue.component("hotpoints",HotPoints)
Vue.component("footernav",Footer)

export default {
  name: 'app',
  mounted:function(){
    // Promise.all([axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=729&t=2018131341456208'),axios
    //   .get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018139203983516")]).then(res=>{
    //   console.log(res.data);
    //   Indicator.close();
    // })
  }
}
</script>

<style>
body{
  font-size: 16px;
}
*{
  margin:0;
  padding: 0;
}
body{
  font-size:0.16rem;
}
</style>
