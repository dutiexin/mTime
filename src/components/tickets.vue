<template>
    <div id="search_theater">
        <div class="search">
            <div>city</div>
            <input type="search" placeholder="筛选影院" autofocus>
            <button id="sousuo">搜索</button>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "tickets",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='scss' scoped>
input{
    outline: none;
}
#search_theater {
  height: 100%;
  background: #f6f6f6;
  padding: 1em 1em;
}
.search {
  
  height: 2em;
  display: flex;
  justify-content: space-around;
  div{
      line-height:2em;
  }
  input{
      border: 1px solid #ccc;
      border-radius:0.5em;
     
      padding-left:2em;
      background: url('../assets/下载.png') no-repeat 0.5em 0.5em;
      background-size:1.5em 1.5em; 
  }
}
#sousuo {
  width: 6em;
  border:1px solid #fff;
  border-radius:1em;
}
</style>
