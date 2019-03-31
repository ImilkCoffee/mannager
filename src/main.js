import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI )
// Vue.config.productionTip = false
//导入路由
import router from './router'
import './assets/base.scss'
import axios from 'axios'
Vue.prototype.$axios=axios
//设置基地址
axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
//拦截器,必须要return
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.Authorization=window.sessionStorage.getItem('token')
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
 Vue.prototype.$message.success(response.data.meta.msg)
 return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


new Vue({

  render: h => h(App),
  //将router挂载到vue实例化对象中
  router
}).$mount('#app')
