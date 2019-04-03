<template>
    <div >
       <mybread sectitle='订单管理' threetitle='订单列表'></mybread>
    <el-table :data='orderslist' border style="width: 100%">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop='order_number' label="订单编号" width="220"></el-table-column>
      <el-table-column prop='order_price' label="订单价格" width="100"></el-table-column>
      <el-table-column prop='order_pay'  label="是否付款" width="100">
        <template slot-scope="scope">
        <el-button v-if='scope.row.order_pay=="1"' type="success">已付款</el-button>
        <el-button v-else type="danger">未付款</el-button>
        </template>
      </el-table-column>
      <el-table-column prop='is_send' label="是否发货" width="220"></el-table-column>
      <el-table-column  label="下单时间" width="220">
        <template slot-scope="scope">
          <span>{{scope.row.create_time | formatTime('YYYY-MM-DD HH:mm:ss')}}</span>
          </template>
      </el-table-column>
      <el-table-column label="操作" width="215">
<template slot-scope="scope">
  <el-button type="primary" icon="el-icon-edit" plain size="mini" @click='bianji(scope.row)'></el-button>
 
</template>
      </el-table-column>
    </el-table>
    <el-pagination 
     @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="orders.pagenum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="orders.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <!-- 编辑页面的弹窗 -->
    <el-dialog title="修改订单" :visible.sync="dialogFormVisible">
  <el-form>
    <el-form-item label="收货地址">
      <v-distpicker></v-distpicker>
    </el-form-item>
    <el-form-item label="随便写点什么吧" >
  <el-input  autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
    </div>
</template>

<script>
//导入省市联动插件
import VDistpicker from 'v-distpicker'
export default {
name:'orders',
components: { VDistpicker },
data(){
return {
  orders:{
    pagenum:1,
    pagesize:5,
  },
  total:5,
  orderslist:[],
  dialogFormVisible:false
}
},
methods:{
  //获取列表的函数
 async search(){
 let res=await this.$axios.get('orders',{
    params:this.orders
  })
  this.orderslist=res.data.data.goods
  this.total=res.data.data.total
  },
  //页码变化和页容量变化
handleSizeChange(val){
this.orders.pagesize=val
this.search()
},
handleCurrentChange(val){
this.orders.pagenum=val;
this.search()
},
//编辑函数
bianji(){
this.dialogFormVisible=true
}
},
 created() {
 this.search()
  
},
}
</script>

<style>

</style>
