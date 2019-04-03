<template>
     <div>
       <mybread sectitle='商品管理' threetitle='商品列表'></mybread>
    <el-row class="searchbox">
      <el-col :span="6">
        <el-input placeholder="请输入内容"  class="input-with-select" >
          <el-button slot="append" icon="el-icon-search" ></el-button>
        </el-input>
      </el-col>
      <el-col :span="1" >
        <el-button type="success" plain class="searchbt" @click='dialogFormVisible=true'>添加用户</el-button>
      </el-col>
    </el-row>
    <el-table  border style="width: 100%">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column  label="商品名称" width="180"></el-table-column>
      <el-table-column  label="商品价格(元)" width="180"></el-table-column>
      <el-table-column  label="电话"></el-table-column>
      <el-table-column  label="用户状态">
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
<el-button type="danger" icon="el-icon-share" plain size="mini" @click='juese(scope.row)'></el-button>
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
name:'goods'
}
</script>

<style>

</style>
