import axios from '@/libs/api.request'

console.log(axios)
export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'copyright/api-token-auth/',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
	console.log("getUserInfo", axios)
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}



// 根据邮箱获取验证码
export const getIdentifyungCode = (email) => {
	return axios.request({
	  url: 'copyright/rbac/verification-code',
	  method: 'get',
		data: {
			username: email
		}
	})
}

// 验证验证码
export const testIdentifyungCode = ({ username, code }) => {
	console.log(username, code)
	return axios.request({
	  url: 'copyright/rbac/verification-code',
	  method: 'post',
		data: {
			username:username,
			code: code
		}
	})
}

// 确认修改新密码；
export const ConfirmToModifyTheNewPassword = ({ username, code, password}) => {
	return axios.request({
		url: 'copyright/rbac/password-reset-self',
		method: 'put',
		data: {
			username:username,
			code:code,
			password:password
		}
	})
}
// 获取消息列表；
export const getMessageList = ({ readState, pageIndex, pageSize }) => {
	return axios.request({
		url: 'copyright/rbac/msg',
		data: {
			readState,
			pageIndex,
			pageSize
		},
		method: 'get'
	})
}
//将未读消息置为已读；
export const patchMessageReaded = (id) => {
	return axios.request({
		url: `copyright/rbac/msg/id`,
		method: 'patch'
	})
}
// 一键将消息置为已读
export const patchAllMessageReaded = () => {
	return axios.request({
		url: `copyright/rbac/msg`,
		method: 'patch'
	})
}

