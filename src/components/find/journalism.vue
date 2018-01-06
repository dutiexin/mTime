<!-- 新闻 -->
<template>
 <div>
     <div class="box" v-if="dataList">
		<img class="bg" :src="dataList.news.imageUrl"/>
		<span class="bgText">{{dataList.news.title}}</span>
     </div>

     <div v-if="data2Lists" class="update">
	     <ul>
			<li v-for="data2List in data2Lists.newsList">
				<dl class="ofh dif">
					<dt class="imgBox">
						<img class="img" :src="data2List.image">
					</dt>
					<dd class="flex-1">
						<p>{{data2List.title}}</p>
						<span class="time" ></span>
						<h4 class="comment">评论{{data2List.commentCount}}</h4>
					</dd>
				</dl>
			</li>
	     </ul>
     </div>
 </div>
</template>

<script>
import axios from "axios";
 export default {
   name: '',
   data () {
     return {
     	dataList: null,
     	data2Lists: null,
     	time:null
     }
   },
   components: {

   },
   mounted () {
   	axios.get("Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018141058429583").then(res=>{
   			
   			this.dataList = res.data;
   		}),
   	axios.get("Service/callback.mi/News/NewsList.api?t=20181413363346079&pageIndex=1").then(res=>{
   			this.data2Lists = res.data;
   		})
   },
   computed:{
   	
   }
 }
</script>

<style lang='scss' scoped>
.imgBox{
	width: 1rem;
	height: 1rem;
	padding: 0.1rem;
	box-sizing: border-box;
}
.ofh {
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
	display: block;
}
.img{
		width: 100%;
		height: 100%;
	}
.comment{
	padding:0.3rem 0rem 0rem 2rem;

}
.dif {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flex-1 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.1rem;
}
.box{
	width: 100%;
	height: 2.1rem;
	overflow: hidden;
	position: relative;
	.bg{
		width: 100%;
	}
	.bgText{
		width: 100%;
		height: 0.5rem;
		background: rgba(0,0,0,0.5);
		position: absolute;
		left: 0;
		bottom: 0;
		color: #fff;
		text-align: center;
		line-height: 0.5rem;
		font-weight: bold;
		font-size: 0.19rem;
	}
}
.update{
	width: 100%;
	height: 100%;
	display: block;
}
</style>