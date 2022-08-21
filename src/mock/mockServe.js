import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'
import categoryList from './categoryList.json'
import searchInfo from './goodsList.json'
import detailInfo from './detailInfo.json'
import cartList from './cartList.json'
import userAddressList from './userAddressList.json'
import payment from './payment.json'
import myOrder from './myOrder.json'

// mock数据，含有两个参数，分别为请求地址和请求数据
// 模拟轮播图数据
Mock.mock('/mock/banner', {code:200, data: banner})
// 模拟floor数据
Mock.mock('/mock/floor', {code:200, data: floor})
Mock.mock('/mock/categoryList', {code:200, data: categoryList})
Mock.mock('/mock/searchInfo', {code:200, data: searchInfo})
Mock.mock('/mock/detailInfo/1', {code:200, data: detailInfo})
Mock.mock('/mock/shopcart', {code:200, data: cartList})
Mock.mock('/mock/trade', {code:200, data: userAddressList})
Mock.mock('/mock/pay', {code:200, data: payment})
Mock.mock('/mock/center/myorder', {code:200, data: myOrder})
