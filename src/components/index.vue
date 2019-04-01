<template >
  <div class="user">
    <el-container class="myuser">
      <el-header class="myheader">
        <el-row>
          <el-col :span="4">
            <img src="../assets/logo1.png" alt>
          </el-col>
          <el-col :span="18" class="title">
            <h2>后台管理系统</h2>
          </el-col>
          <el-col :span="2" class="bt">
            <el-button type="primary" plain @click='loginout'>退出</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="container">
        <el-aside width="200px" class='list'>
          <el-menu router
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-submenu v-for="item in menuslist" :index="item.id+''" router>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>
              <el-menu-item-group v-for='it in item.children' :index="it.id+''">
                <el-menu-item :index="it.path">
                  <span class="el-icon-menu"></span>{{it.authName}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
menuslist:[],
    }
     
  },
  methods:{
   loginout(){
     //清空本地会话
     sessionStorage.removeItem('token')
//编程式导航
this.$router.push({path:'/login'})
   },
   //左侧菜单查询
   listsearch(){
   this.$axios.get('menus').then(res=>{
     this.menuslist=res.data.data
     console.log(this.menuslist)
   })
   }
  },
  beforeCreate() {
    
    if(window.sessionStorage.getItem('token')){

    }else{
      this.$message.error('请先买票再上船')
      this.$router.push('/login')
    }
  },
  created() {
    this.listsearch()
  },
};
</script>

<style lang='scss'>
.user {
  height: 100%;
  .myuser {
    height: 100%;
    .myheader {
      background-color: rgb(163, 161, 248);
      padding: 0px;
      margin: 0px;
      text-align: center;
      .title {
        margin-top: 15px;
        h2 {
          padding: 0px;
          margin: 0px;
        }
      }
      .bt {
        margin-top: 10px;
      }
    }
    .container {
      height: 100%;
.list{
    height: 100%;
    background: url('../assets/u.jpg')no-repeat bottom/100%
}
      .main {
        height: 100%;
        background-color: rgb(217, 209, 250);
        padding-top: 0px;
        .bread {
  height: 40px;
  line-height: 40px;
}
      }
    }
  }
}
</style>
