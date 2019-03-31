<template>
  <div class="box">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="searchbox">
      <el-col :span="6">
        <el-input placeholder="请输入内容" v-model="sendData.query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click='search'></el-button>
        </el-input>
      </el-col>
      <el-col :span="1" >
        <el-button type="success" plain class="searchbt">成功按钮</el-button>
      </el-col>
    </el-row>
    <el-table :data="userList" border style="width: 100%">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="mg_state" label="用户状态">
<template slot-scope="scope">
  <el-switch
  v-model="scope.row.mg_state"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
</template>

      </el-table-column>
      <el-table-column label="操作">
<template slot-scope="scope">
  <el-button type="primary" icon="el-icon-edit" plain size="mini" @click='bianji'></el-button>
  <el-button type="warning" icon="el-icon-delete" plain size="mini"></el-button>
<el-button type="danger" icon="el-icon-share"plain size="mini"></el-button>
</template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  
</template>

<script>
export default {
  data(){
return {
  sendData:{
    query:'',
    pagenum:1,
    pagesize:5
  },
  totali:0,
  userList:[]
}
  },
  methods:{
async search(){
  let res= await this.$axios.get('users',{
       headers:{
Authorization :window.sessionStorage.getItem('token')
       },
       params:this.sendData
     })
     this.total=res.data.data.total
     this.userList=res.data.data.users
},
bianji(){
  console.log(111)
}
  },
   async  created() {
    this.search()
   },
};
</script>

<style lang='scss'>
.bread {
  height: 40px;
  line-height: 40px;
}
.searchbox {
    .searchbt{
       margin-left: 10px;
    }
  
}
</style>
