import HttpRequest from '@/libs/axios'
import config from '@/config'

import {
	getToken,
	setToken
} from '@/libs/util'
import {
	hasOneOf
} from '@/libs/tools'

var baseUrl = null;


const url = window.location.href;
if (url.indexOf('info') > -1) {
	baseUrl = config.baseUrl.info;
} else if (url.indexOf('pre') > -1) {
	baseUrl = config.baseUrl.pre;
} else if (url.indexOf('test') > -1 || url.indexOf('localhost') > -1) {
	baseUrl = config.baseUrl.test;
} else {
	baseUrl = config.baseUrl.dev;
}
const Ajax = new HttpRequest(baseUrl)
const axios = {
	request: (option) => {
		return new Promise((resolve, reject) => {
			console.log(option.url)
			if (getToken()) {
				Ajax.request({
					url: 'copyright/api-token-refresh/',
					data: {
						token: getToken()
					},
					method: 'get'
				}).then((res) => {
					console.log(res, '89080980980989')
					setToken(res.data.token)
					Ajax.request(option).then((res) => {
						resolve(res)
					}).catch(err => {
						reject(err)
					})
				})
			} else {
				Ajax.request(option).then((res) => {
					resolve(res)
				}).catch(err => {
					reject(err)
				})

			}
		})

	}
}

export default axios
