import axios from 'axios'; //导入axios

axios.defaults.baseURL = '';  //后端借口公共前缀
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
                 alert('Api--ok');
                resolve(response.data);
            })
            .catch((error) => {
              console.log(error)
               reject(error)
            })
    })
}

export default {
  // 获取我的页面的后台数据
  mineBaseMsgApi(url) {
     alert('进入api.js')
    return fetch(url);
  }
}