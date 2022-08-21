import Vue from "vue"
import VueRouter from "vue-router"
import routes from './routes'
import store from '@/store'
import {getToken} from "@/utils/token"

// 使用插件
Vue.use(VueRouter)

// 重写push与replace
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {
    }, () => {
    })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => {
    }, () => {
    })
  }
}

// 配置路由
let router = new VueRouter(
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      return {y: 0}
    }
  }
)

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  // 若已登录
  if (getToken()) {
    // 若前往login或register
    if (to.path == '/login' || to.path == '/register') {
      next('/')
    } else {
      if (store.state.User.userName) {
        next()
      }
    }
  } else {
    let toPath = to.path
    // 若未登录
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
      // 未登录时没能进入的页面通过query参数保存
      next('/login')
    } else {
      next()
    }
  }
})

export default router
