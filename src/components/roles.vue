<template>
<div>
<mybread sectitle='用户中心' threetitle='用户列表'></mybread>
    <el-row class="searchbox">
      <el-col :span="6">
        <el-input placeholder="请输入内容"  class="input-with-select" @keyup.native.enter="search">
          <el-button slot="append" icon="el-icon-search" @click='search'></el-button>
        </el-input>
      </el-col>
      <el-col :span="1" >
        <el-button type="success" plain class="searchbt" @click='dialogFormVisible=true'>添加用户</el-button>
      </el-col>
    </el-row>
    <el-table  border style="width: 100%">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column  label="角色名称" width="180"></el-table-column>
      <el-table-column  label="角色描述" width="180"></el-table-column>
      <el-table-column label="操作">
<template slot-scope="scope">
  <el-button type="primary" icon="el-icon-edit" plain size="mini" @click='bianji(scope.row)'></el-button>
  <el-button type="warning" icon="el-icon-delete" plain size="mini" @click='delateuser(scope.row)'></el-button>
<el-button type="danger" icon="el-icon-share" plain size="mini" @click='juese(scope.row)'></el-button>
</template>
      </el-table-column>
    </el-table>
</div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>
