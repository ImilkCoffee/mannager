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
    <el-table  border style="width: 100%">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="username" label="权限名称" width="180"></el-table-column>
      <el-table-column prop="email" label="路径" width="180"></el-table-column>
      <el-table-column prop="mobile" label="层级"></el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
