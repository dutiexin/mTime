<template>
  <div id="app">
    <header1></header1>
    <search1></search1>
    <film></film>
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
</style>
