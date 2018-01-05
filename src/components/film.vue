<template>
	<div>
		<h2>
			<span>正在热映（31部）</span>
			<i class="iconfont icon-you"></i>
		</h2>

		<div class="clear"></div>

		<ul>
			<li v-for="(data,index) in dataList" :key="data.id" v-if="index>7?false:true" @click="handle(data.id)">
				<img :src="data.img" />
				<span>{{data.r}}</span>
				<p>{{data.t}}</p>
			</li>
		</ul>

		<h2>
			<span>即将热映（57部）</span>
			<i class="iconfont icon-you"></i>
		</h2>
		
		<div class="clear"></div>
		<div class="kong">	
		</div>
	</div>
</template>



	
<script >
import Vue from "vue";
import axios from "axios";
import MintUI from 'mint-ui';
import { Indicator } from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from "@/router";
Vue.use(MintUI);



	export default{
		name:"film",
		data(){
			return{
				dataList:[],
			}
		},
		methods:{
			handle:function(num){
				console.log(132);
				router.push(`/detail/${num}`);
				// router.push({name:"detail",params:{id:num}})
			}
		},
		mounted:function(){
			var that=this;
			Indicator.open();
			axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=729&t=2018131341456208')
			  .then(function (response) {
			    that.dataList=response.data.ms;
			    console.log(111)
			    console.log(that.dataList);
			    Indicator.close();
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		}

	}
	
</script>


<style scoped>
	
	hr{
		color:#f00;
	}

	h2{
		margin-top: 0.1rem;
		margin-left: 0.08rem;
	}

	h2 span{
		float: left;
	}

	h2 i{
		float: right;
		margin-top: 0.08rem;
		margin-right:0.08rem;
	}

	.clear{
		clear: both;
	}

	li{
		width:0.8rem;
		height:1.65rem;
		margin-bottom: 0.1rem;
		position: relative;
	}

	li span{
		width:0.24rem;
		height:0.2rem;
		display: block;
		background: #659d0e;
		color:#fff;
		text-align: center;
		position: absolute;
		top:0;
		right:0.02rem;
	}

	img{
		width:0.78rem;
		height:1.16rem;
	}

	ul{
		margin-top: 0.1rem;
		list-style: none;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		border-bottom: 1px solid #ddd;
	}

	li p{
		text-align: center;
		font-size:14px;
	}
	
	.kong{
		width:100%;
		height:0.14rem;
		background:#f6f6f6 ;
		margin-top:0.1rem;
	}
</style>
