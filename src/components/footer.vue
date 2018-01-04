<template>
<div>
    <div class="footer nav">
        <ul class="nav">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/tickets">购票</router-link></li>
            <li><router-link to="/shopping">商城</router-link></li>
            <li><router-link to="/find">发现</router-link></li>
            <li><router-link to="/information">我的</router-link></li>
        </ul>
    </div>
    <div class="footerlink">
      <ul class="navlink">
          <li><router-link to="">PC版</router-link></li>
          <li class="line"><span>|</span></li>
          <li><router-link to="">客户端下载</router-link></li>
          <li class="line"> <span>|</span></li>
          <li><router-link to="">意见反馈</router-link></li>
          <li class="line"><span>|</span></li>
          <li><router-link to="">帮助中心</router-link></li>
          
      </ul>
    </div>
    <div class="bottom">
      <p>Copyright </p>
      <div>
        <p>2006-2018</p>
        <p>Mtime.com Inc. All rights reserved.</p>

      </div>
    </div>

</div>
</template>

<script>
 export default {
   name: 'footer-nav',
   data () {
     return {
      
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
ul{
  height:0.4rem;
  line-height:0.4rem
}
a{
  text-decoration: none;
}
  .nav{
    width:100%;
    display:flex;
    li{
      flex:1;
      text-align: center;
      border-bottom: 1px solid #ebebeb;
      

      a{
        color:#0074c5;
        font-size:1.2em;
      }
    }
  }
  .navlink{
    display:flex;
    height:3em;
    line-height:3em;
    background: #f6f6f6;
    li:nth-child(odd){
      flex:1;
      text-align: center;
      a{
        font-size:1em;
        color:#000;
      }
    }
    .line{
      display: list-item;
      font-size:100%;
      height:1;
      color:#777777;
    }
  }
  .bottom{
    height:4em;
    background:#f6f6f6;
    text-align:center;
    color:#dfdfdf;
    div{
      text-align:center;
      p{
        display:inline-block;
        color:#dfdfdf;
      }
    }
  }

  .footerlink{
    width:100%;
    height:0.4rem;
    padding-top:0.1rem;
    background:#f6f6f6
  }

  a{
    color:#000;
  }

  // .footer{
  //   width:100%;
  //   height:0.5rem;
  //   margin-top: 0.1rem
  // }
</style>
