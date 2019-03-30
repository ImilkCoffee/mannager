import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
//导入路由
import router from './router'
import './assets/base.scss'

new Vue({

  render: h => h(App),
  //将router挂载到vue实例化对象中
  router
}).$mount('#app')
