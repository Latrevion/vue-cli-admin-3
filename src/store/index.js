// 导入vue及vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 挂载vuex
Vue.use(Vuex)

// 创建vuex对象并向外暴露
export default new Vuex.Store({
    // 全局属性变量
    state: {
        navMenuData:[],//头部面包屑导航
        putDetailPageMsg:'',//入库记录信息
    },
    // 全局同步方法, 调用方法,this.$store.commit("xxx")
    mutations: {
        changeNavMenuData(state, params) {
            state.navMenuData = params
        },
        changePutDetailPageMsg(state, params) {
            state.putDetailPageMsg = params
        },
    },
    // 异步方法 调用方法,this.$store.dispatch("xxx")
    actions: {},
    // Vuex属性计算,在视图里面当变量使用
    getters: {},
    // 模块化注册
    modules: {}
})
