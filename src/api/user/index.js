import api from '../axios'
import urls from './urls'

const header = {}

export default {
  userRegist (params) {
    // return出去了一个promise
    return api.get(urls.matches, params, header)
  }
}
