import axios from 'axios'
import QS from 'qs'
import { Toast } from 'vant'
import {
  getToken,
  setToken,
  removeToken,
  removeUserInfo
} from '@/utils/auth'
import store from '../store'
import apis from '@/api/api'
import router from '../router'

axios.defaults.timeout = 30000
axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.responseType = 'json'
axios.defaults.isRetryRequest = false
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  'CHANNEL-TYPE': 'PC'
}
/*axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}*/

// request拦截器
/*
axios.interceptors.request.use(
  config => {
    //每次请求前判断是否存在token
    //如果存在则统一在http请求的header中加上token
    const token = getToken()
    if (token) {
      config.headers.Authorization = `${token}`
    }
    return config
  }, error => {
    Promise.reject(error)
  })

// respone拦截器
axios.interceptors.response.use(
  response => {
    const res = response.data;
    //登陆超时
    if (res.retCode == "24004" || res.retCode == "24007" || res.retCode == "22001") {
      //alert('登陆超时');
      Toast.fail({
        message: res.retMsg,
        duration: 2000,
        onClose: () => {
          removeToken()
          removeUserInfo("userId")
          location.reload() // 为了重新实例化vue-router对象 避免bug
          }
      })

      return Promise.reject("未登录")
      //全局错误提示
    } else if (res.retCode == "24006") {
      apis.myApi.getNewToken()
        .then(res => {
          if (res.data.retCode == '0') {
            removeToken()
            let token = setToken(res.headers.authorization)
            let config = response.config
            if (!config.isRetryRequest) {
              config.headers.Authorization = token
              let url = response.config.url
              let param = response.config.data
              config.url = url.substring(url.indexOf('api/') + 3)
              config.isRetryRequest = true
              return axios(config)
            }
          }
        })
    } else {
      // console.log(response)
      return response
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误（400）';
          break;
        case 401:
          error.message = ' 未授权请重新登陆（401）';
          break;
        case 403:
          error.message = '请求错误（403）';
          break;
        case 404:
          error.message = '请求错误（404）';
          break;
        case 408:
          error.message = '请求错误（408）';
          break;
        case 501:
          error.message = '请求错误（501）';
          break;
        case 502:
          error.message = '请求错误（502）';
          break;
        case 503:
          error.message = '请求错误（503）';
          break;
        case 504:
          error.message = '请求错误（504）';
          break;
        case 505:
          error.message = '请求错误（505）';
          break;
        default:
          error.massage = `连接出错（${error.response.status}）!`
      }
    } else {
      error.message = '连接服务器失败！'
    }
    Toast.fail({
      message: error.message,
      duration: 2000
    })
    return Promise.reject(error)
  }
)
*/

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {promise}
 * */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        // console.log(response)
        if (response == undefined) {
          setTimeout(() => {
            axios.get(url, {
              params: params
            })
            .then(response => {
              console.log('whoops')
              resolve(response.data)
            })
          }, 500)
        } else {
          resolve(response.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function getResponse(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post方法
 * @param url
 * @param data
 * @returns {promise}
 * */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      //axios.post(url, QS.stringify(data))
      .then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post方法,返回response
 * @param url
 * @param data
 * @returns {promise}
 * */
export function postResponse(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      //axios.post(url, QS.stringify(data))
      .then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装put方法
 * @param url
 * @param data
 * @returns {promise}
 * */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        if (response == undefined) {
          setTimeout(() => {
            axios.put(url, data)
            .then(response => {
              console.log('whoops')
              resolve(response.data)
            })
          }, 500)
        } else {
          resolve(response.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装patch方法
 * @param url
 * @param data
 * @returns {promise}
 * */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装delete方法
 * @param url
 * @param data
 * @returns {promise}
 * */
export function del(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
