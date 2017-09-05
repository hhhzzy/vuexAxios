import {LOADINGSHOW,LOADINGHIDE,GOODSDATA} from './../types.js';
import getters from './../getters.js';

const state = {     //定义变量
	loading:true,
	data:''  
};

const mutations = {       //计算从actions传过来的参数
	[GOODSDATA]:(state,res) => {
		var data = res;
		state.data = data;
		// console.log(res);
	}
};
console.log(state);
export default {
	state,
	mutations,
	getters
}