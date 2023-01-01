import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permission.js'
import './assets/common/fonts/iconfont.css'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 挂载到Vue实力上，全局可通过this.$store进行调用
Vue.prototype.$store = store

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
