<template>
 <div>
 	<ul>
		<router-link to="/find/journalism" activeClass="font" tag="li">新闻</router-link>
		<router-link to="/find/prevue" activeClass="font" tag="li" >预告片</router-link>
		<router-link to="/find/rankingList" activeClass="font" tag="li" >排行榜</router-link>
		<router-link to="/find/filmReview" activeClass="font" tag="li" >影评</router-link>
 	</ul>
    <router-view/>
 </div>
</template>

<script>
	// import axios from "axios";
 export default {
   name: '',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
ul{
	text-align: center;
	.font{
		color: #1e7dd7;
		font-weight:bold;
	}
	li{
		width: 25%;
		box-sizing: border-box;
		display: block;
		float: left;
		height: 0.48rem;
		line-height: 0.48rem;
	}
}
</style>
