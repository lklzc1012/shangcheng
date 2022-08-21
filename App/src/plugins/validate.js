import Vue from 'vue'
// 中文提示信息
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

// 更改表单提示信息为中文
VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    // 修改内置规则的message，确认密码与密码相同的规则
    is: field => `${field}必须与密码相同`
  },
  // 给校验的field属性名映射中文名称
  attributes: {
    phone: '手机号码',
    code: '验证码',
    password: '密码',
    passwordSec: '确认密码',
    agree: '协议'
  }
})

// 自定义校验规则
VeeValidate.Validator.extend('agree', {
  validate: value => {
    return value
  },
  getMessage: field => '必须勾选' + field
})
