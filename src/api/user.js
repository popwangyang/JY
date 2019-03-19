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

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
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
