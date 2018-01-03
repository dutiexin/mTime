<template>
<div>
    <div class="footer">
        <ul class="nav">
          <li v-for="data in datalist" :key="data.id">
            <router-link to="">{{data}}</router-link>
          </li>
        </ul>
    </div>
    <div class="footerlink">
      <ul class="navlink">
          <li><router-link to="">PC版</router-link></li>
          <li class="line"><span></span></li>
          <li><router-link to="">客户端下载</router-link></li>
          <li class="line"> <span></span></li>
          <li><router-link to="">意见反馈</router-link></li>
          <li class="line"><span></span></li>
          <li><router-link to="">帮助中心</router-link></li>
          
      </ul>
    </div>

</div>
</template>

<script>
 export default {
   name: 'footer-nav',
   data () {
     return {
       datalist:["首页","购票","商城","发现","我的"]
     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
  .nav{
    display:flex;
    li{
      flex:1;
      text-align: center;
      a{
        color:#0074c5;
        font-size:1.2em;
      }
    }
  }
  .navlink{
    display:flex;
    li:nth-child(odd){
      flex:1;
      text-align: center;
    }
    .line{
      display: list-item;
      font-size:100%;
      height:1;
      color:#000;
    }
  }
</style>
