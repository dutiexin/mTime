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
                .description {
                    margin-bottom: 2em;
                    .color-green {
                        color:green;
                    }
                }
                // .buy-ticket {
                //     font-size: 16px;
                //     color: #ffffff;
                //     width: 8em;
                //     height: 2em;
                //     border-radius: 2em;
                //     border: 0;
                //     background:orange;
                //     margin-top: 1em;
                //     margin-left: 6em;
                // }
            }
        }
    }
</style>
<template>
 <div class="page-nowplaying">
     <h1>{{title}}({{list.length}})</h1>
     <div class="movie-list-detail" v-for="(item, index) in list" :key="index">
         <div class="list-pic">
             <img :src="item.image" alt="">
         </div>
         <div class="list-message">
             <h3>{{item.title}}</h3>
             <p class="description">
                 <pre><span class="color-green">{{item.wantedCount}}</span>想看 - {{item.type}}</pre>
                 <pre>导演: {{item.director}}</pre>
             </p>
             <p class="movie-amounts">{{item.NearestCinemaCount}}家影院上映{{item.NearestShowtimeCount}}</p>
             <!-- <button class="buy-ticket">购票</button> -->
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
         title: '即将上映',
         list: []
     }
   },
   components: {
   },
   mounted() {
       axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=20186914313282532')
       .then(res => {
           console.log(res.data.moviecomings);
           this.list = res.data.moviecomings;
       }).catch(err => {
           console.log(err, 'err');
       })
   }
 }
</script>
