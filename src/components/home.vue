<template>
 <div>
     <search1></search1>
    <film></film>
    <hotpoints></hotpoints>
 </div>
</template>


<script scoped>
	import Vue from "vue";
	import Hotpoints from "@/components/hotpoints.vue";
	import Search from "@/components/search.vue";
	import Film from "@/components/film.vue";

	Vue.component("hotpoints",Hotpoints);
	Vue.component("search1",Search);
	Vue.component("film",Film);

	export default{
		name:"home",


	}


</script>



<script>
 export default {
   name: 'home',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>

 
</style>

