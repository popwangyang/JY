import Mock from 'mockjs'
<<<<<<< HEAD
import { login, logout, getUserInfo, getIdentifyungCode, testIdentifyungCode, ConfirmToModifyTheNewPassword, refshToken } from './login'
=======
import { login, logout, getUserInfo, getIdentifyungCode, testIdentifyungCode, ConfirmToModifyTheNewPassword } from './login'
>>>>>>> 67553e1cca8afa04036c4114e40c84615569720e
import { getMessageInit, getContentByMsgId, hasRead, removeReaded, messageCount } from './user'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: '1000-2000'
})

// 登录相关和获取用户信息
Mock.mock(/\/copyright\/api-token-auth/,'post', login)
Mock.mock(/\/get_info/, getUserInfo)
<<<<<<< HEAD
Mock.mock(/\/logout/, logout),
Mock.mock(/\/copyright\/api-token-refresh/, refshToken)
=======
Mock.mock(/\/logout/, logout)
>>>>>>> 67553e1cca8afa04036c4114e40c84615569720e

Mock.mock(/\/message\/init/, getMessageInit)
Mock.mock(/\/message\/content/, getContentByMsgId)
Mock.mock(/\/message\/has_read/, hasRead)
Mock.mock(/\/message\/remove_readed/, removeReaded)
Mock.mock(/\/message\/count/, messageCount)


Mock.mock(/\/copyright\/rbac\/verification-code/,'get', getIdentifyungCode) // 获取验证码
Mock.mock(/\/copyright\/rbac\/verification-code/,'post', testIdentifyungCode) //  验证验证码
Mock.mock(/\/copyright\/rbac\/password-reset-self/,'put', ConfirmToModifyTheNewPassword) // 确认修改新密码

export default Mock
