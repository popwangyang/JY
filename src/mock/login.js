import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['Finance', 'Finance-Approval', 'Finance-Settlement','Finance-refund'],
    token: 'super_admin',
    avator: 'https://avatars1.githubusercontent.com/u/1911623?v=4'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['Finance', 'Finance-Approval', 'Finance-Settlement','Finance-refund','Recharge', 'setting', 'Jurisdiction_page','user-page','VOD_page','parameter-page'],
    token: 'admin',
    avator: 'https://avatars1.githubusercontent.com/u/1911623?v=4'
  }
}

export const login = req => {
  
  req = JSON.parse(req.body)
	console.log(req)
  return { token: USER_MAP[req.userName].token }
}

export const getUserInfo = req => {
	
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}

export const getIdentifyungCode = req => {
	
		return { data : '验证码已发送至邮箱，请注意查收。!!!!!'}
	
}

export const testIdentifyungCode = req => {
	 // req = JSON.parse(req.body)
	 console.log(req.body)
	 return {
		 data:"验证通过",
		 IdentifyungCode:req.code
	 }
}

export const ConfirmToModifyTheNewPassword = req => {
	 return {
		 data:"新密码修改成功"
	 }
}
