import { createStore } from 'vuex';
import actions from './action.js';
import mutations from './mutations.js';
import getters from './getters.js';
import state from './state.js';
const store = createStore({
	state,
	mutations,
	getters,
	actions,
});

//https://api.escuelajs.co/api/v1/products

export default store;
