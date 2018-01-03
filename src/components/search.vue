<template>
	<div>
		<span class="span_location">
			{{location}}{{aaa}}
			<i class="iconfont icon-xia"></i>
		</span>
		
		
		<span class="span_search"><i class="iconfont icon-fangdajing"></i>影片/影院/影人，任你搜</span>
	</div>
</template>



	
<script >
	
	export default{
		name:"search",
		data(){
			return{
				aaa:""
			}
		},
		methods:{
			myFun:function(result){
				var cityName = result.name;
				// alert("当前定位城市:"+cityName);
				// return result.name.substring(0,2);
				this.aaa=cityName.substring(0,2);
			}
		},
		computed:{             
			location:function(){			
				var myCity = new BMap.LocalCity();
				myCity.get(this.myFun);
			}
			
		}

	}
	
</script>

<style src="@/assets/font/iconfont.css"></style>
<style scoped>
	div{
		width:100%;
		height: 0.5rem;
		background: #f6f6f6;
		font-size:16px;
		padding-top: 0.1rem;
	}
	.span_search{
		width:2.6rem;
		height:0.4rem;
		display: inline-block;
		background: #fff;
		line-height: 0.4rem;
		border-radius: 0.1rem;
		font-size: 18px;
		padding-left: 0.1rem;
		color:#dddddd;
	}
	.span_location{
		margin-left:0.15rem;
		margin-right: 0.1rem;
		font-size: 18px;
	}
	
</style>