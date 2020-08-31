// axios 接口请求服务
// 配置API接口地址
import baseUrl from './baseUrl'
// 引用axios
const axios = require('axios')

// 创建 axios 实例
const service = axios.create({
  // API 请求的默认前缀
  baseURL: baseUrl,
  timeout: 6000 // 请求超时时间
})
// 设置 post、put 默认 Content-Type
service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.headers.put['Content-Type'] = 'application/json'
// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    if (config.method === 'post' || config.method === 'put') {
      // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
      config.data = JSON.stringify(config.data)
    }
    // 请求发送前进行处理 token
    return config
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log('axios response:', response)
    const { data, headers } = response
    console.log('axios headers:', headers)
    console.log('axios data:', data)
    if (data.flag === true) {
      return data.data
    } else {
      window.alert('error: ' + JSON.stringify(data))
      return data
    }
  },
  (error) => {
    let info = {}

    if (!error.response) {
      info = {
        code: 5000,
        msg: 'Network Error'
      }
    } else {
      // 此处整理错误信息格式
      info = {
        code: error.response.status,
        data: error.response.data,
        msg: error.response.statusText
      }
    }
    return info
  }
)

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default function () {
  return service
}
