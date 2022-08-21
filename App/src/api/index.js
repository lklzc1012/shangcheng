// 用于api的统一管理
import mockRequests from './mockAjax'

// 三级联动接口
export const reqCategoryList = () => mockRequests({url: '/categoryList'})
export const reqBannerList = () => mockRequests({url: '/banner'})
export const reqFloorList = () => mockRequests({url: '/floor'})
// Search:商品搜索接口
export const reqSearchInfo = () => mockRequests({url: '/searchInfo'})
// Detail:商品详情接口
export const reqDetailInfo = () => mockRequests({url: '/detailInfo/1'})
// ShopCart:获取购物车接口
export const reqCartList = () => mockRequests({url: '/shopcart'})
// Trade:获取用户地址信息接口
export const reqUserAddressList = () => mockRequests({url: '/trade'})
// Pay:获取订单支付信息接口
export const reqPayInfo = () => mockRequests({url: '/pay'})
// Center:获取我的订单列表接口
export const reqMyOrder = () => mockRequests({url: '/center/myorder'})
