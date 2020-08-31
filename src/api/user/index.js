import api from '../request'
import urls from './urls'

// const header = {}

export default {
  userRegist (data) {
    // return出去了一个promise
    return api.get(urls.regist, data)
  },
  passwdLogin (data) {
    return api.post(urls.passwdLogin, data)
  }
}
