<template>
	<div>
		<div class="all">
			<img :src="datalist.image" class="img_1" style="margin-right:0.16rem" />
			<span class="span2" style="fontSize:20px;display:block">{{datalist.titleCn}}</span>
			<span class="span3">{{datalist.titleEn}}</span>
			<span class="span4" style="float:right;display:block;width:0.34rem;height:0.34rem;
			background:#659d0e;text-align:center;line-height:0.34rem;">{{datalist.rating}}</span>
			<span class="span5">{{datalist.runTime}}</span>
			<span v-for="data in datalist.type" class="span6">
				{{data}}/
			</span>
			
			<p style="float:left;">2017年12月29日中国上映</p>
			<div class="div_1">
				<span>我想看</span>
				<span>我要评分</span>
			</div>
			<div style="clear:both"></div>
			<span style="display:block;color:#feaa47;height:0.4rem;width:100%;text-align:center;
			line-height:0.4rem">{{datalist.commonSpecial}}</span>
			<p class="p_1">查影讯/购票</p>
			<div class="kong">	
			</div>

			<div class="content">{{datalist.content}}</div>

		</div>
	</div>
</template>



<script>
	import axios from "axios";
	export default{
		name:'detail',
		data(){
			return{
				datalist:""
			}
		},
		mounted:function(){
			axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}&locationId=729&t=20181517581436963`).then((res)=>{
				this.datalist=res.data;
				console.log(this.datalist);
			})
		},


	}
</script>



<style scoped>
	.all{width:100%;padding:0.2rem 0.2rem;box-sizing: border-box;}
	.img_1{width:1.26rem;height: 1.89rem;float:left;}
	.span3{ width: 1.92rem;
        overflow:hidden;
        text-overflow:ellipsis; 
        background: goldenrod;margin-bottom:0.1rem;
        white-space: nowrap ;float: right; margin-top: 0.1rem;}
    .span5{width:1.5rem;float: left;}
    .span6{display: block;float: left;}
    .div_1{display: block;float: left;}
    .div_1 span {width:0.8rem;height: 0.4rem;border-radius:20%;display: block;float: left;border: 1px solid #9fc168;line-height: 0.4rem;text-align: center;margin:0.1rem 0;margin-left:0.1rem;}
    .p_1{width:3rem;height: 0.4rem;background: #ff8600;border-radius: 2%;font-size: 20px;color: #fff;margin: 0 auto;line-height: 0.4rem;text-align: center;}
    .kong{
		width:100%;
		height:0.14rem;
		background:#f6f6f6 ;
		margin-top:0.1rem;

	}
	.content{margin: 0.2rem 0}
	.pl{
        width: 200px;
        overflow:hidden;
        text-overflow:ellipsis; 
        background: goldenrod;
        white-space: nowrap;/*加宽度width属来兼容部分浏览*/
    }

</style>