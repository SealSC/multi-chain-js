import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';

const isProcuction = process.env.NODE_ENV === "production";
const service = axios.create({
    baseURL:isProcuction?'':'',
    timeout:10000,
    headers:{
         
    }
});

// 请求拦截
service.interceptors.request.use(
    config=>{
        return config
    },
    error=>{
        Message.error(error.message)
        return Promise.reject(error)
    }
);
//响应拦截
service.interceptors.response.use(
    response=>{
        if(response.status===200){
            return Promise.resolve(response.data);
        }else{
            return Promise.reject(response);
        }
    },
    error=>{
        return Promise.reject(error);
    }
);

const http={
    //get请求
    get(url,queryParams){
        return service.get(url,{params:queryParams});
     },
     //post请求
     post(url,queryParams){
        return service.post(url,queryParams);
    }
}

export default http;
