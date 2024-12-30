import Axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type CustomParamsSerializer,
  type AxiosResponse,
  type AxiosError,
} from 'axios'
import { stringify } from 'qs'
import { type responseData } from './type'

const defaultOptions = {
  baseURL: __API_URL__,
  timeout: 8000,
  headers: { 'X-Custom-Header': 'foobar' },
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  paramsSerializer: {
    serialize: stringify as CustomParamsSerializer,
  },
}

const handleTimeout = (response: responseData = {}): responseData => {
  response.msg = '请求超时，请稍后重试'
  return response
}
const handleLoginExpired = (response: responseData = {}): responseData => {
  response.msg = '登录已过期，请重新验证身份'
  // 处理登录过期 （清除token，重定向至登录页）
  return response
}

// 定义HTTP方法类型
type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'

class Http {
  private static instance: AxiosInstance = Axios.create(defaultOptions)
  private static httpInstance: Http | null = null

  // 使用单例模式
  public static getInstance(): Http {
    if (!Http.httpInstance) {
      Http.httpInstance = new Http()
    }
    return Http.httpInstance
  }

  private constructor() {
    this.requestIntercept()
    this.responseIntercept()
  }

  // 统一请求方法
  public request(url: string, method: HttpMethod, options: AxiosRequestConfig = {}) {
    return Http.instance.request({
      url,
      method,
      ...options,
    })
  }

  public get(url: string, options: AxiosRequestConfig = {}) {
    return this.request(url, 'get', { ...options, params: options?.data })
  }

  public post(url: string, options: AxiosRequestConfig = {}) {
    return this.request(url, 'post', options)
  }

  public put(url: string, options: AxiosRequestConfig = {}) {
    return this.request(url, 'put', options)
  }

  public delete(url: string, options: AxiosRequestConfig = {}) {
    return this.request(url, 'delete', options)
  }

  // 请求拦截器
  private requestIntercept() {
    Http.instance.interceptors.request.use(
      function (config) {
        return config
      },
      function (error) {
        return Promise.reject(error)
      },
    )
  }
  // 响应拦截器
  private responseIntercept() {
    Http.instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => {
        const data: responseData = {}

        if (!error.response) {
          // 网络错误或请求被取消
          if (error.code === 'ECONNABORTED') {
            return handleTimeout(data)
          }
          data.msg = '网络错误，请检查网络连接'
          return data
        }

        // HTTP 错误状态处理
        switch (error.response.status) {
          case 401:
            return handleLoginExpired(data)
          case 403:
            data.msg = '没有权限访问'
            break
          case 404:
            data.msg = '请求的资源不存在'
            break
          case 500:
            data.msg = '服务器错误'
            break
          default:
            data.msg = '未知错误'
        }

        return Promise.reject(data)
      },
    )
  }
}

// 导出单例
const http = Http.getInstance()
export default http
