import Vue from 'vue';
import App from './App.vue';
//引入axios
import axios from 'axios';
import store from './store/'

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
axios.defaults.baseURL = '';   //配置接口地址

//配置axios
axios.interceptors.request.use(function (config) {
	// store.dispatch('loadingShow');
	// console.log(store);
	// 在发送请求之前做些什么
	return config;
	}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // store.dispatch('loadingHide');
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
//改写原型链
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
