import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);


import  axios from "axios";

const store = new Vuex.Store({
	state:{
		username:null,
		title:"卖座电影",
		comingsoon:null
	},

	actions:{
		usercomming:function(store,payload){
			// store ,是当前store
			// 异步请求
			store.commit('user',payload);
		}
	},


	// getters:{
	// 	getComingListFilms:function(state){
	// 		return state.comingsoon?state.comingsoon.data.films:[]
	// 	},
	// 	getComingTotal:function(state){
	// 		return state.comingsoon?state.comingsoon.data.page.total:0
	// 	}
	// },

	mutations:{
	
		user:function(state,payload){
			// console.log(46465465465)
			// console.log(payload);
			state.username=payload.data.username1;
			console.log(111)
		},
		kerwincomingsoon:function(state,payload){
			state.comingsoon = payload;
		}


/*const store = new Vuex.Store({
	state:{
=======
const store = new Vuex.Store({
	state:{
>>>>>>> 6030c0c0831d44be1b69eda28a292fef7131a40c
		active:null
	},

	actions:{
		
	},


	getters:{
		
	},

	mutations:{
		changeactive:function(state,val){
            state.active=val;
        },
        changeactive_remove:function(state,val){
            state.active=val;
<<<<<<< HEAD
        }*/


	}
})

export default store;