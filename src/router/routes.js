export default [
  {
    path: '/home',
    component: () => import("@/pages/Home"),
    meta: {show: true}
  },
  {
    // params参数占位
    path: '/search/:keyword?',
    component: () => import("@/pages/Search"),
    meta: {show: true},
    name: 'search'
  },
  {
    path: '/login',
    component: () => import("@/pages/Login"),
    meta: {show: false}
  },
  {
    path: '/register',
    component: () => import("@/pages/Register"),
    meta: {show: false}
  },
  {
    path: '/detail/:skuId?',
    component: () => import("@/pages/Detail"),
    meta: {show: true}
  },
  {
    path: '/addcartsuccess',
    component: () => import("@/pages/AddCartSuccess"),
    meta: {show: true}
  },
  {
    path: '/shopcart',
    component: () => import("@/pages/ShopCart"),
    meta: {show: true}
  },
  {
    path: '/trade',
    component: () => import("@/pages/Trade"),
    meta: {show: true},
    beforeEnter: (to, from, next) => {
      // 规定前往trade页面必须是由shopcart跳转而来，其余无法途径无法进入trade
      if (from.path == '/shopcart') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/pay',
    component: () => import("@/pages/Pay"),
    meta: {show: true},
    beforeEnter: (to, from, next) => {
      // 规定前往pay页面必须是由trade跳转而来，其余无法途径无法进入pay
      from.path == '/trade' ? next() : next(false)
    }
  },
  {
    path: '/paysuccess',
    component: () => import("@/pages/PaySuccess"),
    meta: {show: true}
  },
  {
    path: '/center',
    component: () => import("@/pages/Center"),
    meta: {show: true},
    children: [
      {
        path: 'myorder',
        component: () => import("@/pages/Center/myOrder")
      },
      {
        path: 'grouporder',
        component: () => import("@/pages/Center/groupOrder")
      },
      {
        path: '/center',
        redirect: '/center/myorder'
      }
    ]
  },
  // 重定向，当项目运行时，访问/立即重定向到首页
  {
    path: '*',
    redirect: '/home'
  }
]
