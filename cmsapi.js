import axios from 'axios'

export default {
  url: 'https://cms.fuken.xyz/guardianes',
  thumbsUrl: 'https://cms.fuken.xyz/thumbnail/guardianes',
  async getItems(collection, params) {
    const url = `${this.url}/items/${collection}?${this._paramsToText(params)}`
    const res = await axios.get(url)
    return res.data.data
  },
  _paramsToText(params) {
    return Object.keys(params || {}).map(key => `${key}=${params[key]}`).join('&')
  }
}
