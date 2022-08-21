// 二次封装axios
import axios from "axios"
// 引入进度条
import nprogress from "nprogress"
// 引入进度条样式
import "nprogress/nprogress.css"

const requests = axios.create({
  baseURL: '/mock',
  timeout: 5000,
})

// 配置请求与响应拦截器
requests.interceptors.request.use((config)=>{
  // 进度条开始
  nprogress.start()
  return config
})

requests.interceptors.response.use((res)=>{
  // 进度条结束
  nprogress.done()
  return res.data
}, (error)=>{
  // 终止Promise链
  return Promise.reject(new Error('fail'))
})

// 对外暴露axios
export default requests
