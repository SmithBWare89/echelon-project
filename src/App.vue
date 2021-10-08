<template>
    <el-container class="app-container">
    <el-aside width="300px" class="side-nav-container">
      <SideNav></SideNav>
    </el-aside>
    <el-container class="content-container">
      <div class="mobile-menu-container">
        <MenuBar></MenuBar>
      </div>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { onMounted, provide } from 'vue'

import SideNav from './components/SideNav.vue'
import Footer from './components/Footer.vue'
import MenuBar from './components/MenuBar.vue'

import { ElAside, ElContainer, ElHeader, ElMain, ElFooter } from 'element-plus'

import useGetWorkoutList from './composables/getWorkoutList'

import store from './store/index'

export default {
    name: 'App',
    components: { ElAside, ElContainer, ElHeader, ElMain, ElFooter, SideNav, Footer, MenuBar },
    setup() {
      provide('store', store)
      const { workout } = store

      const { error, isLoading, workoutData, getWorkoutList } = useGetWorkoutList()

      onMounted(async () => {
        if (!workout.state.workoutData.length) {
          await getWorkoutList()
          workout.methods.setWorkoutData(workoutData.value)
        }
      })

      return { error, isLoading }
    }
}
</script>

<style>
  .app-container{
    height: 100vh;
  }
  .el-header {
    width: 100vw !important;
    padding: 0px !important;
  }

  .mobile-menu-container {
    display: none !important;
  }

@media screen and (max-width: 960px) {

}

@media screen and (max-width: 768px) {
  .el-aside {
    width: 150px;
  }
}

@media screen and (max-width: 600px) {
  .el-aside {
    width: 200px;
  }

  .side-nav-container {
    display: none !important;
  }

  .mobile-menu-container {
    display: block !important;
  }
}
</style>