import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
//导入组件
import login from './components/login.vue'
import index from './components/index.vue'
//路由规则
let routes=[{
path:'/login',
component:login
},
{
    path:'/',
    component:index
    },]
    //实例化路由
let router=new vueRouter({
    routes
})
//暴露router
export default router