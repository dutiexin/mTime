<template>
	<div v-if="datalist">
		<img :src="datalist.data.productDetail.goods.image"/>
		<p class="p1">{{datalist.data.productDetail.goods.jingle}}</p>
		<p class="p2">{{datalist.data.productDetail.goods.longGoodsName}}</p>
		<p class="p3">{{datalist.data.productDetail.goods.postAgeText}}</p>
		<p class="p5">￥{{datalist.data.productDetail.goods.memberDiscountInfo.discounts[0].price}}</p>
		<p class="p4">加入购物车</p>
	</div>
</template>



<script>
	import axios from "axios";
	export default{
		name:'detail',
		data(){
			return{
				datalist:[],
				goodslist:"",
			}
		},
		mounted:function(){
			axios.get(`/Service/callback-mall.mi/product/detail.api?goodsId=${this.$route.params.id}&locationId=290&t=2018169511896275`).then((res)=>{
				this.datalist=res.data;
				console.log(this.datalist);
			});
			axios.get(`/Service/callback.mi/ECommerce/GoodsImageTextInfo.api?t=2018169551799876&goodsId=${this.$route.params.id}&pageIndex=1`).then((res)=>{
				this.goodslist=res.data;
				console.log(this.goodslist);
			})
		}


	}
</script>



<style scoped>
	img{width:3rem;height:3rem;display: block;margin: 0 auto;}
	div{width:100%;padding: 0.1rem;box-sizing: border-box;}
	.p1{color:#0f0;font-size: 20px;margin-bottom:0 0.2rem;}
	.p2{color:#f60;margin-bottom: 0.1rem;}
	.p3{color:#f00;}
	.p4{width:2.2rem;height: 0.4rem;background: #ff8600;display: block;margin: 0 auto;text-align: center;
		line-height:0.4rem;font-size: 24px;color: #fff;margin-top: 0.1rem;border-radius: 4%;margin-bottom:0.2rem;}
	.p5{
		font-size: 24px;font-weight: bold;color: #f00;margin-top: 0.1rem;
	}
</style>