<template>
  <div>
      <el-menu
        mode="horizontal"
        background-color="#002a3a"
        text-color="#FFFFFF"
        active-text-color="#e4002b"
      >
        <el-menu-item index="1">
          <el-link href="https://echelonstudio.com/careers">Careers</el-link>
        </el-menu-item>
        <el-menu-item index="2">
          <el-link href="https://echelonstudio.com/about">About</el-link>
        </el-menu-item>
        <el-menu-item index="1">
          <el-link href="https://echelonstudio.com/studio#/terms">Terms</el-link>
        </el-menu-item>
      </el-menu>
  </div>
</template>


<script>
import { ElMenu, ElMenuItem, ElLink } from 'element-plus';

export default {
    name: 'Footer',
    components: {
      ElMenu,
      ElMenuItem,
      ElLink 
    }
}
</script>

<style scoped>
  .el-menu-item:hover {
      background-color: var(--red) !important;
  }
</style>