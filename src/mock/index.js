import Mock from 'mockjs'

import { login, logout, getUserInfo, getIdentifyungCode, testIdentifyungCode, ConfirmToModifyTheNewPassword, refshToken } from './login'

import {  getMessageList, patchMessageReaded, patchAllMessageReaded } from './user'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: '1000-2000'
})

// 登录相关和获取用户信息
Mock.mock(/\/copyright\/api-token-auth/,'post', login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout),
Mock.mock(/\/copyright\/api-token-refresh/, refshToken)




Mock.mock(/\/copyright\/rbac\/msg/,'get', getMessageList)
Mock.mock(/\/copyright\/rbac\/msg\/id/, 'patch', patchMessageReaded)
Mock.mock(/\/copyright\/rbac\/msg/, 'patch', patchAllMessageReaded)

Mock.mock(/\/copyright\/rbac\/verification-code/,'get', getIdentifyungCode) // 获取验证码
Mock.mock(/\/copyright\/rbac\/verification-code/,'post', testIdentifyungCode) //  验证验证码
Mock.mock(/\/copyright\/rbac\/password-reset-self/,'put', ConfirmToModifyTheNewPassword) // 确认修改新密码

export default Mock
