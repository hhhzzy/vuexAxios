import * as types from './types.js'
import api from '../fetch/api.js'
console.log(types);
export default{
	goodsData:({commit}) => {
		    // alert('进入action');
		    api.mineBaseMsgApi("src/data/data.data")  
		    .then(res => {
		        // alert('action中调用封装后的axios成功');
		        console.log('action中调用封装后的axios成功');
		        commit(types.GOODSDATA, res);//进行异步操作，并把得到的数据提交到mutations
		    })
	}
	
}