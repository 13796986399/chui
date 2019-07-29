<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <el-row>
        <el-col :span="8">
          <img
            src="../../assets/logo.png"
            alt=""
          >
        </el-col>
        <el-col :span="8">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col
          :span="8"
          class="col3"
        >
          恭喜上海前端43期月薪20万 <a
            @click.prevent='logout'
            href="#"
          >退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>

      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          router
          :default-active="handleUrlPath()"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <!-- 标题 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <!-- 选项 -->
            <el-menu-item index="/users">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <!-- 标题 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <!-- 选项 -->
            <el-menu-item index="/roles">角色列表</el-menu-item>
            <el-menu-item index="/rights">权限列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 主要部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('是否退出登录', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        localStorage.removeItem('token')
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
        console.log(this.$route)
      })
    },
    handleUrlPath () {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang='less'>
.el-container {
  height: 100%;
  .el-header {
    padding: 0;
    background-color: #b3c1cd;
    h1 {
      text-align: center;
      color: #fff;
      line-height: 60px;
    }
    .col3 {
      text-align: right;
      line-height: 60px;
      padding-right: 20px;
      a {
        color: #daa520;
      }
    }
  }
  .el-aside {
    background-color: #545c64;
    .el-menu {
      border-right: none;
    }
  }
  .el-main {
    background-color: #eaeef1;
  }
}
</style>
