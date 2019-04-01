<template>
     <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{sectitle}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{threetitle}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
props:['sectitle','threetitle']
}
</script>

<style>
/* .bread {
  height: 40px;
  line-height: 40px;
} */
</style>