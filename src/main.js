import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
//导入路由
import router from './router'
import './assets/base.scss'
import axios from 'axios'
Vue.prototype.$axios=axios
//设置基地址
axios.defaults.baseURL='http://localhost:8888/api/private/v1/'

new Vue({

  render: h => h(App),
  //将router挂载到vue实例化对象中
  router
}).$mount('#app')
