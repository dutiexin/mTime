<template>
	<div>
		

	</div>
</template>



<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=	TZOGYa7F8pbhG3qlZPRu16RqsjvuxvVI"></script>
	
<script>
	function myFun(result){
		var cityName = result.name;
		map.setCenter(cityName);
		alert("当前定位城市:"+cityName);
	}
	var myCity = new BMap.LocalCity();
	myCity.get(myFun);
</script>



<style>
</style>