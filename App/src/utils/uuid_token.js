import {v4 as uuidv4} from 'uuid'

// 随机生成一个字符串，且每次执行不能发生变化，且游客身份持久存储
export const getUUID = () => {
  // 检测本地存储中是否存在游客身份：尝试从本地存储中获取uuid
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  // 如果没有uuid，则生成一个新的uuid
  // 如果无法获取到uuid，则uuid_token为null，!null为真，执行如下语句
  if (!uuid_token){
    uuid_token = uuidv4()
    localStorage.setItem('UUIDTOKEN', uuid_token)
  }
  return uuid_token
}
