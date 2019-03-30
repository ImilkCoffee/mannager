<template >
  <div class="user">
    <el-container class="myuser">
      <el-header class="myheader">
        <el-row>
          <el-col :span="4">
            <img src="../assets/logo.png" alt>
          </el-col>
          <el-col :span="18" class="title">
            <h2>易购后台管理系统</h2>
          </el-col>
          <el-col :span="2" class="bt">
            <el-button type="primary" plain>退出</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="container">
        <el-aside width="200px" class='list'>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <span class="el-icon-menu"></span>选项1
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
  name: "index"
};
</script>

<style lang='scss'>
.user {
  height: 100%;
  .myuser {
    height: 100%;
    .myheader {
      background-color: rgb(146, 141, 141);
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
    background-color: blue;
}
      .main {
        height: 100%;
        background-color: pink;
        padding-top: 0px;
      }
    }
  }
}
</style>
