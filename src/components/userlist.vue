<template>
  <div class="box">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户中心</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="searchbox">
      <el-col :span="6">
        <el-input placeholder="请输入内容" v-model="sendData.query" class="input-with-select" @keyup.native.enter="search">
          <el-button slot="append" icon="el-icon-search" @click='search'></el-button>
        </el-input>
      </el-col>
      <el-col :span="1" >
        <el-button type="success" plain class="searchbt" @click='dialogFormVisible=true'>添加用户</el-button>
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
  inactive-color="#ff4949"
  @change='chanagestatus(scope.row)'
  >
</el-switch>
</template>

      </el-table-column>
      <el-table-column label="操作">
<template slot-scope="scope">
  <el-button type="primary" icon="el-icon-edit" plain size="mini" @click='bianji(scope.row)'></el-button>
  <el-button type="warning" icon="el-icon-delete" plain size="mini" @click='delateuser(scope.row)'></el-button>
<el-button type="danger" icon="el-icon-share" plain size="mini"></el-button>
</template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-sizes="[5, 10, 15, 20]"
      :page-size="sendData.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <!-- 添加用户的弹窗 -->
    <el-dialog  :visible.sync="dialogFormVisible" >
  <el-form :model="form" :rules="rules" ref="form">
  <el-form-item label="用户名" :label-width="formLabelWidth" prop='username'>
      <el-input v-model="form.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth" prop='password'>
      <el-input v-model="form.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth" prop='email'>
      <el-input v-model="form.email" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话" :label-width="formLabelWidth" prop='mobile'>
      <el-input v-model="form.mobile" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="adduser('form')">确 定</el-button>
  </div>
</el-dialog>
<!-- 编辑弹窗 -->

<el-dialog title="修改用户" :visible.sync="bianjiVisible">
  <el-form :model="user" ref='user' >
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="user.username" auto-complete="off" disabled></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
       <el-input v-model="user.email" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话" :label-width="formLabelWidth">
       <el-input v-model="user.mobile" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="bianjiuser(user)">确 定</el-button>
  </div>
</el-dialog>
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
  total:0,
  userList:[],
  dialogFormVisible: false,
  bianjiVisible:false,
        form: {
          username: '',
          password: '',
          email: '',
          mobile: '',
        },
        formLabelWidth: '120px',
        rules:{
          username:[{required: true, message: '请输入用户名称', trigger: 'blur'},{ min: 1, max: 12, message: '长度在 1 到 12个字符', trigger: 'blur'}],
          password:[{ required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16个字符', trigger: 'blur' }]
        },
        user:{}
}
  },
  methods:{
    //删除用户
  delateuser(obj){
this.$axios.delete(`users/${obj.id}`)
this.search()
  },
   
 
    //获取用户信息
    async search(){
      let res= await this.$axios.get('users',{
          params:this.sendData
        })
        this.total=res.data.data.total
        this.userList=res.data.data.users
    },
    //编辑用户信息显示
   async bianji(obj){
     console.log(obj.id)
     this.bianjiVisible=true
      let res= await this.$axios.get(`users/${obj.id}`)
      console.log(res)
      if(res.data.meta.status==200){
this.user=res.data.data
      }
    
    },
       //编辑用户信息提交
   async bianjiuser(obj){
     console.log(obj)
      // let res= await this.$axios.put(`users/${obj.id}`,{email:obj.email,mobile:obj.mobile})
      let res= await this.$axios.put(`users/${obj.id}`,obj)
      if(res.data.meta.status==200){
        this.search()
      }
      this.bianjiVisible=false;
    },
  //用户状态改变
   chanagestatus(obj){
    console.log(obj.mg_state)
 this.$axios.put(`users/${obj.id}/state/${obj.mg_state}`)
   },
   //添加用户
 adduser(form){
        this.$refs[form].validate(async (valid) => {
          if (valid) {
          let res= await this.$axios.post('users',this.form)
          this.search()
          } 
          this.dialogFormVisible=false;
        });
   },
   
   
  },
    created() {
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
