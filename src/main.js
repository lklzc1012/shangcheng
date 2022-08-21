import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from "@/router"
import store from '@/store'
//注册全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
// 统一引入所有api接口
import * as API from '@/api'
// 引入element-ui
import {Button, MessageBox} from "element-ui"
// 或者Vue.use()
Vue.component(Button.name, Button)
Vue.component(MessageBox.name, MessageBox)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
import VueLazyload from "vue-lazyload"
import loading from '@/assets/loading.gif'
Vue.use(VueLazyload, {
  loading: loading
})
import '@/plugins/validate'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 配置全局时间总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由
  router,
  store
}).$mount('#app')
