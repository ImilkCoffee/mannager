<template>
    <div >
       <mybread sectitle='订单管理' threetitle='订单列表'></mybread>
    <el-table  border style="width: 100%">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column label="订单编号" width="220"></el-table-column>
      <el-table-column label="订单价格" width="100"></el-table-column>
      <el-table-column label="是否付款" width="100"></el-table-column>
      <el-table-column label="是否发货" width="220"></el-table-column>
      <el-table-column label="下单时间" width="220"></el-table-column>
      <el-table-column label="操作" width="215">
<template slot-scope="scope">
  <el-button type="primary" icon="el-icon-edit" plain size="mini" @click='bianji(scope.row)'></el-button>
 
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
name:'orders'
}
</script>

<style>

</style>
