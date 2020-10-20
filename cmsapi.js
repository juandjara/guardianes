import axios from 'axios'

export default {
  url: 'https://editor.asoguardianes.com',
  thumbsUrl: 'https://editor.asoguardianes.com/assets',
  async getItems(collection, params) {
    const url = `${this.url}/items/${collection}?${this._paramsToText(params)}`
    const res = await axios.get(url)
    return res.data.data
  },
  _paramsToText(params) {
    return Object.keys(params || {}).map(key => `${key}=${params[key]}`).join('&')
  },
  makeImageUrl(file, imageFormat) {
    return `${this.thumbsUrl}/${file}?${imageFormat ? `key=${imageFormat}` : ''}`
  },
  getSiteData () {
    return this.getItems('sobre_nosotros', { single: 1 })
  },
  getCollectionsInfo () {
    return this.getItems('grupos_de_trabajo', { sort: 'sort', fields: '*' })
  },
  getCollectionItems () {
    return this.getItems('actvidades', { sort: 'sort', fields: '*,subgroup.*' })
  }
}
