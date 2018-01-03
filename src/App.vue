<template>
  <div id="app">
    <header1></header1>
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "@/components/header.vue";

Vue.component("header1",Header);

export default {
  name: 'app'
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
</style>
