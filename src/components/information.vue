<template>
 <div>
     <div class="denglu">
     	<i class="iconfont icon-wode"></i>	
     	<input type="text" placeholder="登录邮箱/手机号码" id="user" />
     </div>
	
	 <div class="denglu">
     	<i class="iconfont icon-mima"></i>
     	<input type="password" placeholder="密码" id="password" />
     </div>
	
	<mt-button type="primary" @click="login()">登录</mt-button>

	<span class="left"><router-link to="/regist">免费注册</router-link></span>
	<span class="right">找回密码</span>
	<div class="clear"></div>

			<p>使用第三方登录</p>

	<i class="iconfont icon-weibo1 red"></i>
	<i class="iconfont icon-qq fdf"></i>

	<div class="kong"></div>

 </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

import store from '@/store';
import { Button } from 'mint-ui';
import { Toast } from 'mint-ui';
import Router from 'vue-router'
import router from '@/router'

Vue.component(Button.name, Button);

 export default {
   name: '',
   data () {
     return {

        username:''
     }
   },
   mounted:function(){


   },
   components: {

   },
   methods:{
   	 login(){
   		var that = this;
        axios.post(`http://192.168.0.106:3000/login`, {
            user: document.querySelector('#user').value,
            psw: document.querySelector('#password').value
          })

          .then((res)=> {
          	console.log(res);
            if(res.data.code===1){
              // sessionStorage.setItem('username', document.querySelector("#user").value);

              Toast({
	          	  message: '登录成功，跳转至首页！！！！',
	          	  position: 'middle',
	          	  className:"tishi",
	          	  duration: 1000
	          	});

              
              this.$store.dispatch('usercomming',res);
              router.push('/');
              // location.href='http://localhost:8080/#/';

              // location.reload();
              
            }else{
            	Toast({
	          	  message: '用户名或密码错误',
	          	  position: 'middle',
	          	  className:"tishi",
	          	  duration: 1400
	          	});
            }
            console.log(res)
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
	
	.kong{width:100%;height: 0rem;margin-top: 0.3rem;}
	a{
		color:#1e7dd7; text-decoration: none
	}
	.tishi{width:2rem;height: 0.6rem;font-size: 20px;}
	
</style>
