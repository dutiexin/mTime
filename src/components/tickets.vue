<template>
    <div>
        <div id="search_theater">
            <div class="search">
                <div>
                  <chosecity></chosecity>
                </div>
                <input type="search" placeholder="筛选影院" autofocus>
                <button id="sousuo">搜索</button>
            </div>
            <div id="list">
                <ul>
                    <li>
                        <a @click="changeactiveL">离我最近</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a @click="changeactiveM">全程</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a @click="changeactiveR">影厅特效</a>
                    </li>
                </ul>
                
            </div>
            <hr>
            <div class="near" v-show="isshowL">
              <ul>
                <li><a>离我最近</a></li>
                <li class="line"></li>
                <li><a>价格最低</a></li>
                 <li class="line"></li>
              </ul>
            </div>
            <div class="special_effect" v-show="isshowR">
              <dl>
                <dt>
                  <a><span>不限</span></a>
                  <a><span>3D</span></a>
                  <a><span>IMAX</span></a>
                  <a><span>VIP</span></a>
                </dt>
                <dd>
                  <a><span>4D</span></a>
                  <a><span>巨幕</span></a>
                  <a><span>4K</span></a>
                  <a><span>杜比</span></a>
                </dd>
                <dd class="lovers">
                  <a><span>情侣座</span></a>
                </dd>
              </dl>
              
                
            </div>
            <div class="wholecity" v-show="isshowM">
                <wholecity></wholecity>
            </div>

        </div>
        <div class="lunbo" v-show="changeactiveM_isshow">
            <mt-swipe :auto="2000" :showIndicators="false" style="height:1rem;width:100%;overflow:hidden;">
                <mt-swipe-item><img src="../assets/banner1.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="../assets/banner2.jpg"></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="missing" v-show="changeactiveM_isshow">
            <p><img src="../assets/404_location_3x_4eee0d46.png" alt=""></p>
            <p>位置信息获取失败，请开启定位功能</p>
            <p>
                <button>刷新</button>
            </p>
        </div>
        <div class="datalist">
            <dl v-for="data in datalist" :key="data.cinemaId">
                <dt>
                    <h3>{{'影城:'+data.cinameName}}</h3>
                    <span>{{data.minPrice/100+'元起'}}</span>
                </dt>
                <dd>
                    <span>{{'地址:'+data.address}}</span>
                </dd>
                
                <dd class="typelist">
                    <span v-show="(data.feature.has3D==1)?true:false">3D</span>
                    <span v-show="(data.feature.hasFeature4D==1)?true:false">4D</span>
                    <span v-show="(data.feature.hasFeature4K==1)?true:false">4K</span>
                    <span v-show="(data.feature.hasFeatureDolby==1)?true:false">杜比</span>
                    <span v-show="(data.feature.hasIMAX==1)?true:false">IMAX</span>
                    <span v-show="(data.feature.hasVIP==1)?true:false">VIP</span>
                    <span v-show="(data.feature.hasLoveseat==1)?true:false">情侣座</span>
                    <span v-show="(data.feature.hasFeatureHuge==1)?true:false">巨幕</span> 
                </dd>
                <dd></dd>
            </dl>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import axios from "axios";
import { Indicator } from 'mint-ui';
export default {
  name: "tickets",
  data() {
    return {
      datalist: [],
      index:[],
      // has3D:true,
      // has4D:true,
      // hasIMAX:true,
      // hasVIP:true,
      isshowL:false,
      isshowR:false,
      isshowM:false,
      changeactiveM_isshow:true
    }
  },
  components: {},
  mounted() {
    Indicator.open('加载中...');
    axios
      .get(
        "/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=729&_=1515045871712"
      )
      .then(res => {
        // console.log(res.data);
        this.datalist=res.data;
        // this.datalist.forEach((el,index)=>{
        //       console.log(this.datalist[index].feature.has3D)
        // })
        Indicator.close();
      })
      .catch(err => {
        console.log(err);
      });
      //下拉菜单唯一性判断
      // if(this.isshowL=this.isshowR){
      //   return this.isshowL=!this.isshowR;
      // }
  },
   methods:{
      changeactiveL(){
        this.isshowL=!this.isshowL;
        this.isshowR=false;
        this.isshowM=false;
        this.changeactiveM_isshow=true;
      },
      changeactiveR(){
        this.isshowR=!this.isshowR;
        this.isshowL=false;
        this.isshowM=false;
        this.changeactiveM_isshow=true;
      },
      changeactiveM(){
        this.isshowM=!this.isshowM;
        this.isshowR=false;
        this.isshowL=false;
        this.changeactiveM_isshow=!this.changeactiveM_isshow;
      }
    }
};
</script>



<style lang='scss' scoped>
img {
  display: block;
}
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  color: #f97d3f;
}
ul,
li {
  list-style: none;
}
input {
  outline: none;
}
#search_theater {
  height: 100%;
  background: #f6f6f6;
  padding: 1em 1em;
}
.search {
  height: 3em;
  display: flex;
  justify-content: space-around;
  div {
    line-height: 1em;
  }
  input {
    height:3em;
    border: 1px solid #ccc;
    border-radius: 0.5em;
    margin-top:0.5em;
    
    padding-left: 2em;
    background: url("../assets/下载.png") no-repeat 0.5em 0.6em;
    background-size: 1.5em 1.5em;
  }
}
#sousuo {
  margin-top:0.5em;
  height:3em;
  width: 6em;
  outline: none;
  border: 1px solid #fff;
  border-radius: 1em;
 
  
}
#list {
  height: 1.5em;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      background: url("../assets/箭头下.png") no-repeat 5.5em;
      background-size: 0.5em 0.5em;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    li:hover {
      background: url("../assets/箭头上.png") no-repeat 5.5em;
      background-size: 0.5em 0.5em;
    }
  }
}
.near{
  ul{
    width:100%;
    height:100%;
   a{
     display: block;
     margin:0.2em 0;
   }
    .line{
      width:100%;
      height: 1px;
      background:#ccc;
    }
  }
}
.special_effect{
  span{
    text-align: center;
    margin:0.25em .5em;
    display: inline-block;
    border:1px solid #000;
    width:4em;
  }
  .lovers{
    text-align:center;
  }
 
}
// 轮播图
.lunbo {
  img {
    width: 100%;
    height: 100%;
  }
}
.missing {
  text-align: center;
  p {
    color: #dddddd;
    font-weight: bold;
  }
  img {
    display: inline-block;
    width: 50%;
    height: auto;
  }
  button {
    margin-top: 0.5em;
    width: 6em;
    height: 2em;
    border-radius: 2em;
    border: 2px solid #ccc;
    outline: none;
    background: #f6f6f6;
    color: #dddddd;
    font-size: 1em;
    font-weight: bold;
  }
}
.datalist {
  padding: 1em 1em;
  dl {
    width: 100%;
    height: 100%;
    dt {
        margin:1em 0;
      display: flex;
      justify-content: space-between;
      span {
          margin:0.15em 0;
        color: #f97d3f;
      }
    }
    dd:nth-of-type(1) {
        margin: 1em 0;
      color: hsla(0, 6%, 16%, 0.692);
    }
    dd:last-child {
      width: 100%;
      height: 1px;
      background: #ccc;
    }
    .typelist{
        margin-bottom: 1em;
        span{
            color:green;
            border:1px solid green;
        }
    }
  }
}
</style>
