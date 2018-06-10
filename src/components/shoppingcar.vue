<style lang='scss'>
    .page-shopping-car{
        .shopping-list {
            border: 1px solid #000;
            margin-bottom:2px;
            display: flex;
            .movie-title {
                flex:1;
                padding-top:1em;
                .button-control {
                    flex:1;
                    margin-top:4em;
                    .button-amount {
                        text-align: center;
                        width:1.5em;
                        height:1.5em;
                        border:0;
                        background: #f60;
                        border-radius: 50%;
                        outline: none;
                    }
                }
                .price{
                    margin-top:3em;
                }
            }
            .shopping-pic {
                flex:1;
                padding:1em;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
        }
    }
 
</style>
<template>
 <div class="page-shopping-car">
     <div class="shopping-list-all">
         <div class="shopping-list" v-for="(item,index) in datalist" :key="index">
            <div class="shopping-pic">
                <img :src="item.img_url" alt="">
            </div>
            <div class="movie-title">
                <h2>{{item.goods_name}}</h2>
                <div class="button-control">
                    <button class="add button-amount" @click="add(index)">+</button>
                    <span style="display:inline-block;width:1.5em;text-align:center;">{{form.amount[index]}}</span>
                    <button class="delete button-amount" @click="remove(index)" :disabled="buttonstatus">-</button>
                </div>
                <div class="price">
                    <span>价格:{{item.price*form.amount[index]}}</span>
                </div>
            </div>
         </div>
         <!-- <div class="price-total">
            <span>总价{{}}</span>
         </div> -->
     </div>
 </div>
</template>

<script>
import axios from 'axios';
 export default {
   name: '',
   data () {
     return {
         form:{
             amount:[]
         },
         number:1,
         buttonstatus: false,
         price: '',
         datalist: []
     }
   },
   methods: {
       add(index) {
           this.buttonstatus = false;
           this.form.amount.splice(index,1,this.form.amount[index]+1);
       },
       remove(index) {
           if (this.amount <= 1) {
               this.buttonstatus = true;
           } else {
               this.form.amount.splice(index,1,this.form.amount[index]+1);
           }
       },
       radom(min,max) {
           return Math.floor(Math.random()*(max - min) + min)
       }
   },
   components: {

   },
   created() {
       axios.get('/users/goodsShow').then(res => {
        this.datalist = res.data;
        for (let i=0;i<res.data.length;i++) {
            this.form.amount.push(1);
        }
       }).catch(err => {
           console.log(err);
       });
   },
   mounted () {
       this.price = this.radom(30,70);
   }
 }
</script>
