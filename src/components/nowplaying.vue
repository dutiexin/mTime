<style lang='scss'>
    .page-nowplaying {
        .movie-list-detail {
            display: flex;
            overflow: hidden;
            border-bottom: 1px solid #000000;
            padding-bottom:1em;
            .list-pic {
                flex:1;
                box-sizing: border-box;
                padding: 1em;
                img {
                    display: inline-block;
                    width: 100%;
                }
            }
            .list-message {
                padding-top:1em;
                flex:2;
                padding-left:1em;
                .score {
                    padding:3px;
                    color: #ffffff;
                    background: green;
                    position: relative;
                    top:-1.5em;
                    left: 8em;
                }
                .description {
                    color:green;
                    margin-bottom: 2em;
                }
                .buy-ticket {
                    font-size: 16px;
                    color: #ffffff;
                    width: 8em;
                    height: 2em;
                    border-radius: 2em;
                    border: 0;
                    background:orange;
                    margin-top: 1em;
                    margin-left: 6em;
                }
            }
        }
    }
</style>
<template>
 <div class="page-nowplaying">
     <h1>{{title}}</h1>
     <div class="movie-list-detail" v-for="(item, index) in list" :key="index">
         <div class="list-pic">
             <img :src="item.img" alt="">
         </div>
         <div class="list-message">
             <h3>{{item.t}}</h3>
             <span class="score">{{item.r}}</span>
             <p class="description">{{item.commonSpecial}}</p>
             <p class="movie-amounts">{{item.NearestCinemaCount}}家影院上映{{item.NearestShowtimeCount}}</p>
             <button class="buy-ticket">购票</button>
         </div>
     </div>
 </div>
</template>

<script>
import axios from "axios";

 export default {
   name: 'nowplaying',
   data () {
     return {
         title: '正在热映',
         list: []
     }
   },
   components: {
   },
   mounted() {
       axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201869126663900')
       .then(res => {
           this.list = res.data.ms;
       }).catch(err => {
           console.log(err, 'err');
       })
   }
 }
</script>
