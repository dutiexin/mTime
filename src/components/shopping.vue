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

		<div class="kong">	
		</div>

<!-- 
		<ul class="xilie">
			<li v-for="(data,index) in xilieList" :key="index">
				<img :src="data.checkedImage" class="xilie_1"/>
			</li>
		</ul> -->


		 <div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide xilie" v-for="data in xilieList">
		      		<img :src="data.checkedImage" class="xilie_2"/>
		      </div>	      
		    </div>
		  </div>


		<ul class="wanju">
			<li v-for="data in wanjuList" class="aaa" :key="data.id">
<<<<<<< HEAD
				
					<p class="p_one"> {{data.name}} </p>
					<img :src="data.image" class="img_one" />
					<p >{{data.iconTitle}}</p>
				
					<ul>
						<!-- <li v-for="data1 in data.subList" :key="data1.goodsId"> -->
						<li v-for="data1 in data.subList" :key="data1.goodsId" @click="handle(data1.goodsId)"> 
							
							<img :src="data1.image" class="img_two"/>
							<p>{{data1.title}}</p>
						</li>
						<!-- </li> -->
						
					</ul>
				
			</li>
		</ul>
		

	</div>
</template>



<script>
	 

	import axios from "axios";

	import router from "@/router";

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

		methods:{
			handle(num){
				router.push(`/shoppingDetail/${num}`);
				// router.push({name:"shoppingDetail",params:{id:num}})
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

			     console.log(that.wanjuList)
			    // console.log(that.xilieList);

			})
			  .catch(function (error) {
			    console.log(error);
			  });

			  setTimeout(()=>{
			  		var swiper = new Swiper('.swiper-container', {
					      slidesPerView: 3,
					      spaceBetween: 30,
					      pagination: {
					        el: '.swiper-pagination',
					        clickable: true,
					      },
				    });

			  },800)
			  
		}

	}
</script>


<style src="@/assets/font/iconfont.css"></style>
<!-- 
<style src="@/assets/swiper/css/swiper1.css"></style>
<script src="@/assets/swiper/js/swiper1.js"></script> -->

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

	/*.xilie{display: flex;}
	.xilie_2{
		width:0.79rem;height: 0.84rem;border-radius: 50%;flex-wrap: nowrap;
		flex:1; margin-right: 0.2rem
	}*/

	.swiper-container .swiper-wrapper .xilie{display: flex;justify-content: space-between;width:0.8rem;}
	.swiper-wrapper img{
		width:0.79rem;
		height: 0.84rem;
	}
	
</style>