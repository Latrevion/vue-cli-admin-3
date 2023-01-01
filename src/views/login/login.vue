<template>
  <div id="login">
    <div class="login-min-body">
      <div class="login-box">
        <div class="login-icon"></div>
        <div class="login-right">
          <div class="login-title">采购管理系统</div>
          <div class="login-main">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="0px"
              class="ms-content"
            >
              <el-form-item prop="username" style="width: 100%">
                <div class="login-input">
                  <i class="icon zhb-iconfont zhb-iconyonghu_0"></i>
                  <el-input
                    type="text"
                    v-model="ruleForm.username"
                    placeholder="用户名"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="password" style="width: 100%">
                <div class="login-input">
                  <i class="icon zhb-iconfont zhb-iconmima"></i>
                  <el-input
                    type="password"
                    placeholder="密码"
                    v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')"
                  ></el-input>
                </div>
              </el-form-item>
              <div class="login-btn-box">
                <el-checkbox v-model="checked">自动登录</el-checkbox>
                <div>忘记密码</div>
              </div>
              <div class="login-button" @click="submitForm('ruleForm')">
                登录
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function () {
    return {
      checked: false,
      ruleForm: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      let _self = this;
      _self.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/index");
          localStorage.setItem("path", "/index");
        } else {
          this.$message.error("用户名或密码不正确!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
@import "css/login.css";
#login {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
/deep/ .login-box .el-form-item {
  margin-bottom: 15px;
}
/deep/ .login-btn-box .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #fff;
  font-size: 14px;
}
/deep/ .login-btn-box .el-checkbox {
  color: #fff;
  font-size: 13px;
}
/deep/ .login-user .el-input__inner {
  height: 50px;
  background: none;
  border: none;
  padding: 0;
}
/deep/ .login-password .el-input__inner {
  height: 50px;
  background: none;
  border: none;
  padding: 0;
}
</style>
