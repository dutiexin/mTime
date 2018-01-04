<template>
	<div>
	
		<div class="search">
			<span class="span_search">
				<i class="iconfont icon-fangdajing"></i>搜索正版电影周边
			</span>
			<span class="gouwu">
				<i class="iconfont icon-gouwuche asdf" style="color:#5da6d7;fontSize:30px"></i>
			</span>
		</div>
		
		<mt-swipe :auto="3000" style="height:250px;" class="lunbo">
		  <mt-swipe-item v-for="data in lunboList" :key="data.id">
		  	<img :src="data.image" />
		  </mt-swipe-item>
		  
		</mt-swipe>

		<ul class="jiaju">
			<li v-for="data in jiajuList" :key="data.id">

				<img :src="data.image" />
				<p>{{data.iconTitle}}</p>
			</li>
		</ul>

		<ul class="xilie">
			<li v-for="(data,index) in lunboList" :key="index">
				<img :src="data.checkedImage" />
			</li>

		</ul>


		<ul class="wanju">
			<li v-for="data in wanjuList" class="aaa" :key="data.id">
				<p  class="p_one">{{data.name}}</p>
				<img :src="data.image" class="img_one" />
				<p>{{data.iconTitle}}</p>

				<ul>
					<li v-for="data1 in data.subList" :key="data1.id"> 
						<img :src="data1.image" class="img_two"/>
						<p>{{data1.title}}</p>
					<!-- 	<div class="kong">	
					</div> -->
					</li>
					
				</ul>
			</li>
		</ul>

	</div>
</template>


<script>
	import axios from "axios";
	import { Swipe, SwipeItem } from 'mint-ui';
	import Vue from 'vue';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default{
		name:"shop",
		data(){
			return{
				jiajuList:[],
				wanjuList:[],
				lunboList:[],
				xilieList:[]
			}
			
		},
		mounted:function(){
			var that=this;
			axios.get('Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=20181321115112921')
			  .then(function (response) {
			    console.log(response.data);
			    that.jiajuList=response.data.navigatorIcon;
			    that.lunboList=response.data.scrollImg;
			     that.xilieList=response.data.topic;
			     that.wanjuList=response.data.category;
			    console.log(that.xilieList);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		}

	}
</script>

<style src="@/assets/font/iconfont.css"></style>
<style scoped>
	ul,li{
		list-style:none;
	}
	.span_search{
		width:3rem;
		height:0.4rem;
		display: inline-block;
		background: #fff;
		line-height: 0.4rem;
		border-radius: 0.1rem;
		font-size: 18px;
		padding-left: 0.1rem;
		color:#dddddd;
		margin-top: 0.06rem;
		margin-left:0.14rem;
	}
	.gouwu{
		margin-left: 0.04rem;
	}
	.search{
		width:100%;
		height:0.54rem;
		background: #f6f6f6;
	}

	.search .span_search .adsf{
		font-size: 20px;
		color:#f00;
	}

	.jiaju{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.jiaju li{
		width:25%;
		margin-top:0.2rem;
		text-align: center
	}
	.jiaju img{
		width:0.48rem;height: 0.48rem;
	}

	.kong{
		width:100%;
		height:0.14rem;
		background:#f6f6f6 ;
		margin-top:0.1rem;

	}

	body{
		background:#f6f6f6 ;
	}
	.wanju .img_one{
		width:3.6rem;
		height: 1.69rem;
		border-bottom: 1px solid #ccc;
		
	}
	.wanju .aaa{
		padding:0 0.1rem;
		margin-top: 0.16rem;

	}
	.wanju .img_two{
		width:1.02rem;
		height: 1.02rem;
	}
	
	.wanju .p_one{
		background: #f6f6f6
	}

	.wanju ul{
		display: flex;justify-content: space-around;}
	.wanju ul li{
		font-size: 14px;
		width:30%;
	}

	.lunbo img{
		width:100%;
		height:2.4rem;
	}

</style>