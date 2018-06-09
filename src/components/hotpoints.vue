<template>
    <div id="hotpoints">
        <h2>今日热点</h2>
        <ul>
            <li v-for="data in datalist" :key="data.id">
                <div id="content">
                    <div class="left">
                        <router-link to="" class="pic">
                            <img :src="data.img">
                        </router-link>
                    </div>
                    <div class="right">
                        <h3>{{data.title}}</h3>
                        <p>{{data.desc}}</p>
                    </div>
                </div>
            </li>
        </ul>
        
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "hotpoints",
  data() {
    return {
        datalist:[]
    }
  },
  components: {

  },
  mounted() {
      
    axios
      .get("https://m.mtime.cn/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018139203983516")
      .then((res)=>{
        console.log(res.data.hotPoints);
        this.datalist=res.data.hotPoints;
        
        
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang='scss' scoped>
    ul,li{
        list-style: none;
    }

    li{
        border-bottom: 2px solid #ebebeb
    }

    ul{
        margin-top: 0.1rem;
    }
    #hotpoints li:first-child{
       padding-top: 0;
    }
    #hotpoints{
        padding:.5em 1em 0;
    }
    #content{
        display:flex;
        .left{
            flex:0.9;
            width:11.2em;
            margin-right:1em;
            .pic{
                display: block;
                height:8em;
                overflow: hidden;
                img{
                    width:100%;
                    height: auto;
                    display:block;
                }
            }
        }
        .right{
            flex:1.1;
            p{
                color:#777777;
            }
        }
    }
</style>
