<template>
    <div>
       <mybread sectitle='商品管理' threetitle='商品分类'></mybread>
    <el-row class="addgoods">
      <el-col :span="1" >
        <el-button type="success" plain class="searchbt" >添加商品</el-button>
      </el-col>
    </el-row>
    <el-table :data="userList" border style="width: 100%">
      <el-table-column  label="分类名称" width="180"></el-table-column>
      <el-table-column  label="级别" width="180"></el-table-column>
      <el-table-column label="是否有效"></el-table-column>
      <el-table-column label="操作">
<template slot-scope="scope">
  <el-button type="primary" icon="el-icon-edit" plain size="mini" @click='bianji(scope.row)'></el-button>
  <el-button type="warning" icon="el-icon-delete" plain size="mini" @click='delateuser(scope.row)'></el-button>
</template>
      </el-table-column>
    </el-table>
    <el-pagination
      current-page.sync="1"
      :page-sizes="[5, 10, 15, 20]"
      page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      total="10">
    </el-pagination>
    </div>
</template>

<script>
export default {
name:'categories'
}
</script>

<style>

</style>
