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
                        <a>离我最近</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a>全程</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a>影厅特效</a>
                    </li>
                </ul>
            </div>
            <div class="near">

            </div>
            <div class="wholecity">

            </div>
            <div class="special_effect">

            </div>

        </div>
        <div class="lunbo">
            <mt-swipe :auto="2000" :showIndicators="false" style="height:5em;width:100%;overflow:hidden;">
                <mt-swipe-item><img src="../assets/banner1.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="../assets/banner2.jpg"></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="missing">
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
                    <span v-show="has3D">3D</span>
                    <span v-show="has4D">4D</span>
                    <span v-show="hasIMAX">IMAX</span>
                    <span v-show="hasVIP">VIP</span>
                    
                </dd>
                <dd></dd>
            </dl>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import axios from "axios";
export default {
  name: "tickets",
  data() {
    return {
      datalist: [],
      feature:[],
      index:[],
      has3D:true,
      has4D:true,
      hasIMAX:true,
      hasVIP:true
    };
  },
  components: {},
  mounted() {
    axios
      .get(
        "/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=729&_=1515045871712"
      )
      .then(res => {
        console.log(res.data);
        this.datalist=res.data;
        // this.datalist.forEach((ele,index)=>{
        //     this.feature=[...ele]
        // })
        // for(let i in this.datalist){
        //    this.feature=this.datalist[i]
        // }
        console.log(this.index);
        //  if(this.feature.has3D==1){
        //         console.log(this.has3D)
        //         return this.has3D=!this.has3D
        //     } 
            
        //     if(this.feature.hasFeature4D==1){
        //         console.log(this.has4D)
        //         return this.has4D=!this.has4D
        //     } 
            
        //      if(this.feature.hasIMAX==1){
        //         console.log(this.hasIMAX)
        //         return this.hasIMAX=!this.hasIMAX
        //     } 
            
        //     if(this.feature.hasIMAX==1){
        //         console.log(this.hasIMAX)
        //         return this.hasIMAX=!this.hasIMAX
        //     } 
      })
      .catch(err => {
        console.log(err);
      });
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
  height: 4em;
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
    background: url("../assets/下载.png") no-repeat 0.5em 0.4em;
    background-size: 1.5em 1.5em;
  }
}
#sousuo {
  margin-top:0.5em;
  height:3em;
  width: 6em;
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
