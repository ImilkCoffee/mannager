import Vue from "vue";
import vueRouter from "vue-router";

import "element-ui/lib/theme-chalk/index.css";

Vue.use(vueRouter);

//导入组件
import login from "./components/login.vue";
import index from "./components/index.vue";
import userlist from "./components/userlist.vue";
import userindex from "./components/userindex.vue";
import roles from "./components/roles.vue";
import rights from "./components/rights.vue";
import goods from "./components/goods.vue";
import orders from "./components/orders.vue";
import categories from "./components/categories.vue";
import params from "./components/params.vue";
import reports from "./components/reports.vue";
//路由规则
let routes = [
  {
    path: "/login",
    component: login,
    meta:{requiresAuth: true}
  },
  {
    path: "/",
    component: index,
    children: [
      {
        path: "",
        component: userindex
      },
      {
        path: "users",
        component: userlist
      },
      {
        path: "roles",
        component: roles
      },
      {
        path: "rights",
        component: rights
      },
      {
        path: "goods",
        component: goods
      },
      {
        path: "orders",
        component: orders
      },
      {
        path: "categories",
        component: categories
      },
      { path: "params", component: params },
      { path: "reports", component: reports }
    ]
  }
];
//实例化路由
let router = new vueRouter({
  routes
});
//导航守卫,跳转时进行操作
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth==true){
    next()
  }else{
    if(window.sessionStorage.getItem('token')){
      next()
    }else{
      Vue.prototype.$message.error('请先登录')
      next('/login')
    }
  }
})
//暴露router
export default router;
