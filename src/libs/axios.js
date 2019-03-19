import axios from 'axios'
import store from '@/store'
import { getToken } from './util'
<<<<<<< HEAD
import router from '../router'
=======

>>>>>>> 67553e1cca8afa04036c4114e40c84615569720e


class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
<<<<<<< HEAD
    
=======

>>>>>>> 67553e1cca8afa04036c4114e40c84615569720e
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
<<<<<<< HEAD
      headers: {}
=======
      headers: {
				
      }
>>>>>>> 67553e1cca8afa04036c4114e40c84615569720e
    }
    return config
  }

  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
<<<<<<< HEAD
    // console.log(route)
=======

>>>>>>> 67553e1cca8afa04036c4114e40c84615569720e
    //动态添加token
			if(getToken()) { 	
				
				config.headers.Authorization ='Basic ' + btoa(store.state.userId+":"+getToken());
			}
			
      return config
    }, error => {
			
      return Promise.reject(error)
    })
    // 响应拦截
<<<<<<< HEAD
    instance.interceptors.response.use(response => {
			

     const { data , status } = response

			return { data , status };
      
=======
    instance.interceptors.response.use(res => {
			
      const { data, status } = res
      return { data, status }
>>>>>>> 67553e1cca8afa04036c4114e40c84615569720e
    }, error => {
			
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
