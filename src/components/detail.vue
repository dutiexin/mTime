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
				<span>
					<a>我想看</a>
				</span>
				<span>
					<a>我要评分</a>
				</span>

			</div>
			<div style="clear:both"></div>
			<span style="display:block;color:#feaa47;height:0.4rem;width:100%;text-align:center;
			line-height:0.4rem">{{datalist.commonSpecial}}</span>
			<p class="p_1">查影讯/购票</p>


			<div class="kong">	
			</div>

			<div class="content">{{datalist.content}}</div>


			<div class="kong">
			</div>

			<div class="content" :class="{text_overflow:isshow1}">
				<a @click="showAllA">{{datalist.content}}</a>
				</div>
			<div class="kong">
			</div>
			<div class="talking_good">
				<h3>精选影评({{hotlongs.totalCount}})</h3>
				<h3>{{hotlongs.comments[0].title}}</h3>
				<p :class="{text_overflow:isshow2}">
					<a @click="showAllB">{{hotlongs.comments[0].content}}</a>
				</p>
				<div class="person">
					<img :src="hotlongs.comments[0].headurl" class="pic">
					<div class="inforamtion">
						<p>{{hotlongs.comments[0].nickname}}</p>
						<span class="score">{{hotlongs.comments[0].rating}}</span>
					</div>

				</div>
			</div>
			<div class="talking_short">
				<h3>网友短评(829)</h3>
				<template v-for="data in hotpoints_short" class="hotpoints_short">

					<div :key="data.tweetId" class="talks">
						<div id="picture">
							<img :src="data.caimg">
						</div>
						<div class="inforamtion">
							<p>{{data.ca}}</p>
							<span class="score2">{{data.cr}}</span>
							<p>{{data.ce}}</p>
						</div>
					</div>
				</template>
			</div>


		</div>
	</div>
</template>



<script>

import { Indicator } from "mint-ui";
import axios from "axios";
export default {
  name: "detail",
  data() {
    return {
      datalist: [],
      hotlongs: [],
	  hotpoints_short: null,
	  isshow1:true,
	  isshow2:true
    }
  },
  mounted: function() {
    Indicator.open("加载中...");
    axios
      .get(
        `/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params
          .id}&locationId=729&t=20181517581436963`
      )
      .then(res => {
        this.datalist = res.data;
        console.log(this.datalist);
      });
    axios
      .get(
        `/Service/callback.mi/Movie/HotLongComments.api?movieId=${this.$route
          .params.id}&pageIndex=1&t=201816982662783`
      )
      .then(res => {
        this.hotlongs = res.data;
        console.log(this.hotlongs);
      });
    axios
      .get(
        `/Service/callback.mi/Showtime/MovieComments.api?movieId=${this.$route
          .params.id}&pageIndex=1&t=2018169544215423`
      )
      .then(res => {
        this.hotpoints_short = res.data.cts;
        console.log(this.hotpoints_short);

        Indicator.close();
      });
  },
  methods:{
	  showAllA(){
		  this.isshow1=!this.isshow1;
	  },
	  showAllB(){
		  this.isshow2=!this.isshow2;
	  }
  }
};
</script>



<style scoped>

.all {
  width: 100%;
  padding: 0.2rem 0.2rem;
  box-sizing: border-box;
}
.img_1 {
  width: 1.26rem;
  height: 1.89rem;
  float: left;
}
.span3 {
  width: 1.92rem;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #ffffff;
  margin-bottom: 0.1rem;
  white-space: nowrap;
  float: right;
  margin-top: 0.1rem;
}
.span5 {
  width: 1.5rem;
  float: left;
}
.span6 {
  display: block;
  float: left;
}
.div_1 {
  display: block;
  float: left;
}
.div_1 a:hover {
  color: #659d0e;
}
.div_1 span {
  width: 0.8rem;
  height: 0.4rem;
  border-radius: 3em;
  display: block;
  float: left;
  border: 1px solid #9fc168;
  line-height: 0.4rem;
  text-align: center;
  margin: 0.1rem 0;
  margin-left: 0.1rem;
}
.p_1 {
  width: 3rem;
  height: 0.4rem;
  background: #ff8600;
  border-radius: 5em;
  font-size: 20px;
  color: #fff;
  margin: 0 auto;
  line-height: 0.4rem;
  text-align: center;
}
.kong {
  width: 100%;
  height: 0.14rem;

  margin-top: 0.1rem;
}
.content {
  margin: 0.2rem 0;
  background: #f6f6f6;
}
.talking_good {
  background: #f6f6f6;
}
.talking_good h3 {
  line-height: 1.5em;
  margin: 0.5em 0;
}

.talking_good > p {
  text-indent: 2em;
  line-height: 1.5em;
}
.person {
  display: flex;
  position: relative;
}
.pic {
  display: block;
  width: 4em;
  height: 4em;
  border-radius: 50%;
}
.score {
  position: absolute;
  text-align: center;
  width: 1.5em;
  height: 1.2em;
  display: block;
  background: #659d0e;
  right: 0;
  top: 0.1em;
}
#picture {
  float: left;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  overflow: hidden;
}
#picture img {
  width: 100%;
  height: 100%;
}
.information {
  float: left;
}
.talks {
  overflow: hidden;
  position: relative;
  margin-top: 1em;
  background: #ffffff;
}
.talks p {
  width: 1.92rem;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #ffffff;
  margin-bottom: 0.1rem;
  white-space: nowrap;
  margin-top: 0.1rem;
}
.score2 {
  position: absolute;
  text-align: center;
  width: 1.5em;
  height: 1.2em;
  display: block;
  overflow: hidden;
  background: #659d0e;
  right: 0;
  top: 0.7em;
}
.talking_short {
  margin-top: 1em;
}
.hotpoints_short {
  background: #f6f6f6;
}
.text_overflow {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}



</style>