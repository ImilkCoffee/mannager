<template>
    <div class='login'>
        <div class="box">
            <h2>用户登录</h2>
            <el-form label-position="top" label-width="80px" :model="forms"  :rules="rules" ref="loginforms">
  <el-form-item label="账号"  prop='username' class='name'>
    <el-input v-model="forms.username"></el-input>
  </el-form-item>
  <el-form-item label="密码"  prop='password' >
    <el-input  v-model="forms.password"  class='passinput'></el-input>
  </el-form-item>
   <el-form-item>
    <el-button type="primary" class='mybt' @click='submit("loginforms")'>登录</el-button>
    <el-button type='success' @click='reset("loginforms")'>重置</el-button>
  </el-form-item>
</el-form>
        </div>
    </div>
</template>

<script>
export default {
name:'login',
data(){
    return {
        forms:{
       username:'',
       password:'',
    },
     rules:{
    username:[{required: true, message: '请输入账号', trigger: 'blur'},{ min: 4, max: 16, message: '长度在 4 到16 个字符', trigger: 'blur'}],
    password:[ {required: true, message: '请输入密码', trigger: 'blur'},{ min: 6, max: 16, message: '长度在 6 到16 个字符', trigger: 'blur'} ]
}
}
},
methods:{
    submit(forms){
        this.$refs[forms].validate(async (valid) => {
          if (valid) {
          let res= await this.$axios.post('login',this.forms)
          if(res.data.meta.status==400){
            this.$message.error(res.data.meta.msg);
          }else if(res.data.meta.status==200){
           sessionStorage.setItem('token',res.data.data.token)
           //编程式导航
           this.$router.push('/')
          }
          } else {
               this.$message.error('登录格式错误');
          }
        });
    },
    reset(formName){
        this.$refs[formName].resetFields();
    }
}

}
</script>

<style lang='scss'>
.login{
  height: 100%;
  background-color:#666;
  display: flex;
  justify-content: center;
  align-items: center;
  .box{
      width: 540px;
      height: 420px;
      box-sizing: border-box;
      border-radius: 15px;
      background: url('../assets/psb2.jpg') no-repeat center/cover;
      padding: 20px 20px;
      
  }
}
</style>
