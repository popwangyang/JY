import axios from '@/libs/api.request'

// 管理员重置用户密码
export const adminResetPsaaword = ({ id, password}) => {
	let data = {
		id:id,
		password:password
	}
	return axios.request({
	  url: `rbac/password-reset-admin/${id}`,
	  data,
	  method: 'patch'
	})	
}