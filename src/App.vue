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
import Chosecity from "@/components/chosecity"


// import axios from "axiox";

Vue.component("header1",Header);
Vue.component("search1",Search);
Vue.component("film",Film);
Vue.component("home",Home);
Vue.component("chosecity",Chosecity);

import HotPoints from "@/components/hotpoints"
import Footer from "@/components/footer"
Vue.component("hotpoints",HotPoints)
Vue.component("footernav",Footer)

export default {
  name: 'app',
  mounted:function(){

  },
 
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
