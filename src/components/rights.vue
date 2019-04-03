<template>
    <div>
        <mybread sectitle='权限管理' threetitle='权限列表'></mybread>
    <el-row class="searchbox">
      <el-col :span="6">
        <el-input placeholder="请输入内容" class="input-with-select" @keyup.native.enter="search">
          <el-button slot="append" icon="el-icon-search" @click='search'></el-button>
        </el-input>
      </el-col>
      <el-col :span="1" >
        <el-button type="success" plain class="searchbt" @click='dialogFormVisible=true'>添加用户</el-button>
      </el-col>
    </el-row>
    <el-table :data='rightlist' border style="width: 100%">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="authName" label="权限名称" width="180"></el-table-column>
      <el-table-column prop="path" label="路径" width="180"></el-table-column>
      <el-table-column prop="level" label="层级">
        <template slot-scope="scope">
          <span v-if="scope.row.level=='0'">{{'一级'}}</span>
          <span v-else-if="scope.row.level=='1'">{{'二级'}}</span>
          <span v-else>{{'三级'}}</span>
        </template>
      </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
data(){
  return{
    rightlist:[]
  }

},
 async created() {
    let res=await this.$axios.get('rights/list')
    this.rightlist=res.data.data
  },
}
</script>

<style>

</style>
