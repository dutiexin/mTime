
<template>
	<div>
		<ul>
			<li><img src="../assets/logo_mtime.png" width="67" height="21"></li>

			<li><router-link to="/">首页</router-link></li>
			<li><router-link to="/tickets">购票</router-link></li>
			<li><router-link to="/shopping">商城</router-link></li>
			<li><router-link to="/find">发现</router-link></li>
			<li><router-link to="/information">
					<i >{{setUsername}}</i>
				<i class="iconfont icon-wode" v-if="this.$store.state.username?false:true"></i>
			</router-link></li>

		</ul>
	</div>
</template>


<script>
	

	export default {
	  name: 'home',
	  data:function(){
	  	return{
	  		user:"",
	  		isShow:false,
	  		isShow1:true,
	  	}
	  },
	  mounted:function(){
	  	// if(sessionStorage.getItem("username")){
	  	// 	this.user=sessionStorage.getItem("username");
	  	// 	this.isShow=true;
	  	// 	this.isShow1=false;
	  	// }
	  
	  },
	  computed:{
	  	setUsername:function(){
	  		return this.$store.state.username;
		},
	  	
	  }

	}

</script>

<style src="@/assets/font/iconfont.css"></style>
<style scoped>
	
	*{
		margin:0;
		padding:0;
	}
	a{
		text-decoration: none;
		color:#fff;
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