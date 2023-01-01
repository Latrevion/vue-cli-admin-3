<template>
    <div class="sidebar">
      <el-menu
              class="sidebar-el-menu"
              :default-active="activeMenu"
              :collapse="collapse"
              background-color="#001529"
              text-color="rgba(255,255,255,.7)"
              active-text-color="#fff"
              unique-opened
              router
              :class="{ collapse: collapse }"
              @select="handleSelect"
      >
        <template v-for="item in menuData">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i class="icon zhb-iconfont" :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item
                          v-for="(threeItem,i) in subItem.subs"
                          :key="i"
                          :index="threeItem.index"
                  >{{ threeItem.title }}</el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i class="icon zhb-iconfont" :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </template>
  
  <script>
    import bus from "./bus";
    export default {
      data() {
        return {
          collapse: false,
          menuItems: [],
          //左侧菜单展示数据
          menuData: [
            {
              icon: "zhb-iconjilu",
              index: "index",
              title: "入库记录",
              subs: [
                {
                  index: "/index",
                  title: "记录"
                },
              ]
            },
            {
              icon: "zhb-iconrenyuanguanli",
              index: "xtbg",
              title: "协同办公",
              subs: [
                {
                  index: "/xtbg/dfsx",
                  title: "待发事项"
                },
                {
                  index: "/xtbg/yfsx",
                  title: "已发事项"
                },
                {
                  index: "/xtbg/dbsx",
                  title: "待办事项"
                },
                {
                  index: "/xtbg/ybsx",
                  title: "已办事项"
                },
                {
                  index: "/xtbg/cgbash",
                  title: "采购备案审核"
                },
                {
                  index: "/xtbg/cgsssh",
                  title: "采购实施审核"
                },
                {
                  index: "/xtbg/cgsqsh",
                  title: "采购申请审核"
                },
  
  
              ]
            },
            {
              icon: "zhb-iconrenyuanguanli",
              index: "user",
              title: "用户管理",
              subs: [
                {
                  index: "/user/index",
                  title: "用户"
                },
                {
                  index: "/user/xtfl",
                  title: "测试"
                },
              ]
            }
          ]
  
        };
      },
      created() {
        bus.$on("collapse", msg => {
          this.collapse = msg;
        });
        //默认打开首页
        this.activeMenu = '/index'
      },
      methods: {
        handleSelect(){
  
  
        },
  
      },
      computed:{
        activeMenu(){
          const route = this.$route
          const { meta,path } = route
          if(meta.activeMenu){
            return meta.activeMenu
          }
          return path
        }
      }
  
    };
  </script>
  
  <style lang="scss" scoped>
    $BgColor:$menu-theme-color;//设置左侧菜单背景色
    $menuActiveTextColor:$menu-theme-active-color;//菜单点击字体
    $menuActiveBgColor:$menu-theme-active-bg-color;//菜单点击背景
    .sidebar {
      width: 256px;
      display: block;
      position: absolute;
      left: 0;
      top: 64px;
      bottom: 0;
      overflow-y: scroll;
      padding-top: 15px;
      background: #001529;
    }
    .sidebar::-webkit-scrollbar {
      width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
      width: 100%;
  
    }
    .sidebar-el-menu{
    &.collapse{
      width: 65px;
    }
    }
    .sidebar > ul {
      height: 100%;
    }
  
  </style>
  <style lang="scss">
    $BgColor:$menu-theme-color;//设置左侧菜单背景色
    $menuActiveTextColor:$menu-theme-active-color;//菜单点击字体
    $menuActiveBgColor:$menu-theme-active-bg-color;//菜单点击背景
   .sidebar{
     .el-menu{
       .el-menu-item{
         text-align: left!important;
  
         &:hover{
           color: $menuActiveTextColor !important;
           background-color: $menuActiveBgColor !important;
  
         }
         &.is-active {
           color: $menuActiveTextColor !important;
           background-color: $menuActiveBgColor !important;
  
         }
       }
  
       .el-submenu{
         .el-submenu__title{
           text-align: left!important;
  
           &:hover{
             color: $menuActiveTextColor !important;
             background-color: $menuActiveBgColor !important;
  
           }
         }
  
       }
  
  
       .el-scrollbar__bar.is-horizontal{
         display: none!important;
       }
       .el-menu-item, .el-submenu__title{
         height: 40px!important;
         line-height: 40px!important;
       }
     }
     .el-menu-item i,.el-submenu__title i{
       margin-right: 10px;
     }
   }
  
  </style>
  