<template>
	<div>
		<ul>
			<li><img src="../assets/logo_mtime.png" width="67" height="21"></li>
			<li>首页</li>
			<li>购票</li>
			<li>
				<router-link to="/mall/index">商城</router-link>			
			</li>

			<li><router-link to="/faxian">发现</router-link></li>
			<li><i class="iconfont icon-wode"></i></li>
		</ul>
	</div>
</template>


<script>
	export default {
	  name: 'home',

	}

</script>

<style src="@/assets/font/iconfont.css"></style>
<style scoped>
	
	*{
		margin:0;
		padding:0;
	}

	ul{
		width:100%;
		height:0.6rem;
		background: #000;
		display: flex;
		justify-content: space-around;
		color:#fff;
		list-style: none;
		align-items: center;
	}
	li{
		font-size: 16px;
	}
	.icon-wode{
		color:#fff;
		font-weight: bold;
		
	}
	em{
		display: block;
		position: -20px;
	}
	a{
		color:#fff;
		text-decoration: none;
	}
</style>