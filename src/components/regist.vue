<template>
 <div>
     <div class="denglu">
     	<i class="iconfont icon-wode"></i>	
     	<input type="text" placeholder="请输入用户名" id="user" />
     </div>
	
	 <div class="denglu">
     	<i class="iconfont icon-mima"></i>
     	<input type="password" placeholder="密码" id="password" />
    </div>

    <div class="denglu">
      <i class="iconfont icon-mima"></i>
      <input type="password" placeholder="验证密码" id="password1" />
    </div>
	<h4>我已阅读并同意 《Mtime时光网服务条款》</h4>
	<mt-button type="primary" @click="regist()">注册</mt-button>



	<div class="kong"></div>

 </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { Button } from 'mint-ui';
import { Toast } from 'mint-ui';
Vue.component(Button.name, Button);

 export default {
   name: '',
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
      regist() {

        var that = this;
        axios.post(`/users/regist`, {
            username: document.querySelector('#user').value,
            psw: document.querySelector('#password').value
          })
          .then(function (response) {
            if(response.data=='注册成功'){
              Toast({
              message: '注册成功，请登录！！！！！',
              position: 'middle',
              className:"tishi",
              duration: 1400
            });
              location.href='http://localhost:8080/#/information';
            }else{
              alert(response.data)
            }
            
            
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          })
        }
    }
 }
</script>

<style src="@/assets/font/iconfont.css"></style>
<style scoped>
	.denglu{margin-top: 0.2rem;margin-left: 0.2rem;}
	.iconfont{font-size: 30px;color:#000000;font-weight: bold;}
	input{border:0;border-bottom: 1px solid #ccc;outline: none;margin-left:0.2rem;
		height: 0.2rem;font-size: 20px;padding-bottom: 0.06rem;}
 	button{width:3.3rem;height:0.6rem;background: #1e7dd7;color:#fff;margin-top:0.4rem;
		margin:0.4rem auto; display: block;
 	}
 	.left{float: left;margin: 0 0.3rem;font-weight: bold;
 		color:#1e7dd7;} .right{float: right;margin: 0 0.3rem;}
 	.clear{clear:both;} 
 	.red{color:red;font-size: 60px;margin-left:1rem;} 
 	.fdf{color:#4cafe9;font-size: 60px;margin-left:0.5rem;}
	p{border-top:0.2rem;height: 0.4rem;margin: 0.2rem auto;width:100%;border-top:2px solid #ebebeb;text-align: center;line-height: 0.4rem;color:#b3b3b3;}
	
	.kong{width:100%;height: 0rem;margin-top: 1.6rem;}
  h4{margin:0 auto; width:100%;margin-top: 0.2rem;text-align: center;}
</style>
