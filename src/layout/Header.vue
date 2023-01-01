<template>
    <div class="header">
      <div class="sidebarLogo"  :class="{ collapse: collapse }">
        <img src="@/assets/logo.png" v-show="!collapse"/>
        <img src="@/assets/logo_new.png" v-show="collapse" style="margin-left: 12px"/>
        <span></span>
      </div>
      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="toggleCollapse" v-if="collapse">
        <i class="icon zhb-iconfont zhb-iconweibiaoti25"></i>
      </div>
      <div class="collapse-btn" @click="toggleCollapse" v-else>
        <i class="icon zhb-iconfont zhb-iconshousuo"></i>
      </div>
      <!--面包屑导航 :to="{ path: '/' }"-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item  v-for="(item,index) in $store.state.navMenuData" @click.native="getNavMenu(item.path)" :key="index">{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <!--退出等-->
      <div class="admin-btn">
        <el-dropdown @command="logout">
          <div class="user">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span>管理员</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided command="logout"><i class="icon zhb-iconfont zhb-icontuichudenglu"></i>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
  
      </div>
    </div>
  </template>
  <script>
    import bus from "./bus";
    export default {
      name: "Header",
      data() {
        return {
          adminName: "",
          token: "",
          collapse: false,
          metaData:[]
  
        };
      },
      props: ["topUserName"],
      created() {
        //获取用户信息
        this.adminName = localStorage.getItem("userName");
        this.$store.commit('changeNavMenuData',this.$route.meta.data)
      },
      methods: {
        // 侧边栏折叠
        toggleCollapse() {
          this.collapse = !this.collapse;
          bus.$emit("collapse", this.collapse);
        },
  
        //退出
        logout(command) {
          //跳转登录页
          if(command == 'logout'){
            this.$router.push('/')
          }
        },
        //面包屑点击
        getNavMenu(path){
          const that = this
          that.$router.replace(path)
          setTimeout(function () {
            that.$store.commit('changeNavMenuData',that.$route.meta.data)
          },150)
        }
  
  
      },
    };
  </script>
  <style lang="scss">
    .header {
      background-color: #ffffff;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 64px;
      font-size: 22px;
      color: #fff;
      display: flex;
      align-items: center;
      .sidebarLogo{
        width: 256px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #00284D;
        box-sizing: border-box;
  
        &.collapse{width: 65px;}
      }
      .sidebarLogo img{
         height: 38px;
        vertical-align: middle;
        margin-left: 22px;
      }
      .sidebarLogo span{
        color: #ffffff;
        font-weight: bold;
        font-size:17px;
        margin-top: 5px;
      }
      .el-breadcrumb__item{
        cursor: pointer!important;
      }
      .el-breadcrumb__inner{
        cursor: default!important;
      }
    }
  
    .collapse-btn {
      cursor: pointer;
      height: 64px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      color:rgba(0,0,0,.65);
    }
  
    .collapse-btn i {
      padding: 0 21px;
      display: block;
      font-size: 25px;
    }
  
    .admin-btn {
      position: absolute;
      right: 20px;
      display: flex;
      align-items: center;
      span{
        margin-left: 10px;
        font-size: 14px;
        color:rgba(0,0,0,.65)
      }
    }
  
    .layout-btn {
      color: #ffffff;
      font-size: 15px;
      cursor: pointer;
    }
  
    .user {
      color: #000000;
      font-size: 15px;
      display: flex;
      align-items: center;
      margin-right: 20px;
      cursor: default;
    }
  
    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
      color: #8d8d8d;
      cursor: pointer;
    }
  
    .zhb-icon {
      font-size: 20px;
      margin-right: 5px;
    }
    .top-menu-list {
      margin-left: 15px;
      font-size: 14px;
      span {
        padding: 0 10px;
        color:$el-submenu__title-color;
        display: inline-block;
        line-height: 59px;
        margin: 0 20px 0 0;
        &:hover {
          cursor: pointer;
          color: $el-topmenu__title-color;
          line-height: 49px;
          border-bottom: 5px solid #1d73f6;
        }
        &.on {
          color:  $el-topmenu__title-color;
          line-height: 49px;
          border-bottom: 5px solid #1d73f6;
        }
      }
    }
  </style>
  