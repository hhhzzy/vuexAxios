import Vue from 'vue';//引入vue
import Vuex from 'vuex';//引入vuex

Vue.use(Vuex);//实例化vuex

import mutations from './modules/mutations.js';
import actions from './actions.js';

export default new Vuex.Store({  //导出vuex里面的组件
	modules:{
		mutations
	},
	actions
});