import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
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
        }
	}
})

export default store;