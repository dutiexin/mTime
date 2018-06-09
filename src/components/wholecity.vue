<template>
 <div class="title">
     <ul>
         <li><a @click="changeactiveL">商圈</a></li>
         <li><span>|</span></li>
         <li><a @click="changeactiveR">地铁</a></li>
     </ul><hr>
     <div class="left_right">
        <dl class="left">
            <dt><a>全部</a></dt>
            <div v-for="data in datalist" v-show="datalistishowL"> 
                <dd><a>{{data.name+'('+data.cinemaCount+')'}}</a></dd>
            </div>
            <div v-for="datasubways in subways" v-show="datalistishowR"> 
                <dd><a>{{datasubways.name+'('+datasubways.cinemaCount+')'}}</a></dd>
            </div>
        </dl>
        <dl class="right">
            <dt><a>全部</a></dt>
            <template v-for="(data,index1) in datalist">
                <template v-for="(data2,index2) in data.businessAreas">
                    <dd v-show="data2_cinemaCount"><a>{{data2.name+'('+data2.cinemaCount+')'}}</a></dd>
                </template>
            </template>    
        </dl>
     </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'wholecity',
   data () {
     return {
         datalist:null,
         subways:null,
         data2_cinemaCount:false,
         datalistishowL:true,
         datalistishowR:false,
         datalist2ishowR:false,
     }
   },
   components: {

   },
   mounted () {
       axios.get("https://ticket-m.mtime.cn/proxy/ticket/cinema/screening.api?locationId=290&_=1515120430405")
       .then((res)=>{
        //    console.log(res.data.data.districts);
           this.datalist=res.data.data.districts;
           this.subways=res.data.data.subways;
       })
       .catch((err)=>{
           console.log(err)
       })
   },
   methods: {
       changeactiveL(){
           this.datalistishowL=!this.datalistishowL;
           this.datalistishowR=false;
       },
       changeactiveR(){
           this.datalistishowR=!this.datalistisshowR;
           this.datalistishowL=false;
       }
   },
   computed:{
       list1(){
           
       }
   }
 }
</script>

<style lang='scss' scoped>
ul,li{
    list-style: none;
}
a{
    text-decoration: none;
    color:#000;
}
a:hover{
    color:#f97d3f;
}
ul{
    width:100%;
    height:2em;
    
    display: flex;
    li{ 
        text-align: center;
        line-height: 2em;
        a{
            border-bottom:1px solid #f6f6f6;
        }
        a:hover{
            border-bottom: 1px solid #f97d3f;
        }
        
    }
    li:first-child{
        flex:1;
    }
    li:last-child{
        flex:1;
    }
}
.left_right{
    width:100%;
    height:100%;
    display:flex;
    dt{
        height: 2em;
        line-height:2em;
    }
    dd{
        height: 2em;
        line-height: 2em;
    }
}
.left{
    flex:1
    
}
.right{
    flex:1;
    
}
</style>
