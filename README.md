
# 简介

**商城**为Web电商项目，基于Vue 2.6实现，使用了Vue全家桶、ES6、Axios、Promise等技术，后台数据通过[Mock.js](https://github.com/nuysoft/Mock)搭建，项目包括首页、搜索列表、商品详情、购物车、订单、支付、用户登录、用户注册等多个子模块。


# Demo
[Demo](https://lklzc1012.github.io/shangcheng/)

# 项目详情
- 使用[Mock.js](https://github.com/nuysoft/Mock)搭建后台数据，模拟json后端数据，实现前后端分离，如三级联动导航数据、搜索列表数据、商品详情数据等
- 使用[Swiper](https://github.com/nolimits4web/Swiper)实现轮播图
- 使用[vee-validate](https://github.com/logaretm/vee-validate)实现注册页面的表单验证
- 使用[vue-lazyload](https://github.com/hilongjw/vue-lazyload)实现图片懒加载
- 引入[element-ui](https://github.com/ElemeFE/element)中的遮罩层弹窗
- 通过[lodash](https://github.com/lodash/lodash)中的throttle实现节流
- 通过vue-router实现导航守卫，如未登录时不能进入订单、支付、支付成功、个人中心页面，已登录后不能进入注册页面
