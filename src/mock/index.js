import Mock from 'mockjs'
import { login, logout, getUserInfo, getIdentifyungCode, testIdentifyungCode, ConfirmToModifyTheNewPassword } from './login'
import { getMessageInit, getContentByMsgId, hasRead, removeReaded, messageCount } from './user'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: '1000-2000'
})

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)

Mock.mock(/\/message\/init/, getMessageInit)
Mock.mock(/\/message\/content/, getContentByMsgId)
Mock.mock(/\/message\/has_read/, hasRead)
Mock.mock(/\/message\/remove_readed/, removeReaded)
Mock.mock(/\/message\/count/, messageCount)


Mock.mock(/\/copyright\/rbac\/verification-code/,'get', getIdentifyungCode) // 获取验证码
Mock.mock(/\/copyright\/rbac\/verification-code/,'post', testIdentifyungCode) //  验证验证码
Mock.mock(/\/copyright\/rbac\/password-reset-self/,'put', ConfirmToModifyTheNewPassword) // 确认修改新密码

export default Mock
