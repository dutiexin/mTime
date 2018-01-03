<template>
  <div id="app">
    <header1></header1>

    <search1></search1>
    <film></film>
    <hotpoints></hotpoints>
    <footernav></footernav>
    
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "@/components/header.vue";

import Search from "@/components/search.vue";
import Film from "@/components/film.vue";

Vue.component("header1",Header);
Vue.component("search1",Search);
Vue.component("film",Film);

import HotPoints from "@/components/hotpoints"
import Footer from "@/components/footer"
Vue.component("hotpoints",HotPoints)
Vue.component("footernav",Footer)

export default {
  name: 'app'
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
