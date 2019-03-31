import Vue from 'vue'
import vueRouter from 'vue-router'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(vueRouter)

//导入组件
import login from './components/login.vue'
import index from './components/index.vue'
import userlist from './components/userlist.vue'
import userindex from './components/userindex.vue'
//路由规则
let routes=[{
path:'/login',
component:login
},
{
    path:'/',
    component:index,
    children:[{
        path:'',
        component:userindex
    },
{
    path:'list',
    component:userlist
}]
    },]
    //实例化路由
let router=new vueRouter({
    routes
})
//暴露router
export default router