import HttpRequest from '@/libs/axios'
import config from '@/config'

var baseUrl = null;

const url = window.location.href;
    if(url.indexOf('info') > -1){
        baseUrl = config.baseUrl.info;
    }else if(url.indexOf('pre') > -1){
        baseUrl = config.baseUrl.pre;
    }else if(url.indexOf('test') > -1 || url.indexOf('localhost') > -1){
        baseUrl = config.baseUrl.test;
    }else{
        baseUrl = config.baseUrl.dev;
    }
	
const axios = new HttpRequest(baseUrl)
export default axios
