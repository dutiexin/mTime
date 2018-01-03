<template>
  <div id="app">
    <header1></header1>
    <hotpoints></hotpoints>
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "@/components/header.vue";
import HotPoints from "@/components/hotpoints"

Vue.component("header1",Header);
Vue.component("hotpoints",HotPoints)

export default {
  name: 'app'
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
body{
  font-size:0.16rem;
}
</style>
