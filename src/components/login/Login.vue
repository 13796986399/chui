<template>
  <el-row
    type="flex"
    justify="center"
    align="middle"
  >

    <el-col :span="8">
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>

        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="startLogin">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
          <el-button @click="xss">攻击</el-button>
          <el-button @click="xss1">关闭</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    startLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) {
          return false
        }
        axios.post('http://192.168.48.55:8888/api/private/v1/login', this.loginForm).then(res => {
          console.log(res)
          if (res.data.meta.status === 200) {
            this.$message({
              message: '登录成功',
              type: 'success',
              duration: 800
            })
            localStorage.setItem('token', res.data.data.token)
            this.$router.push('/home')
          }
        })
      })
    },
    resetForm (formName) {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style scoped lang='less'>
.el-row {
  height: 100%;
  background-color: pink;
  .el-form {
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 20px;
  }
}
</style>
