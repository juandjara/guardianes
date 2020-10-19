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
    return `${this.thumbsUrl}/${file}?key=${imageFormat}`
  },
  getSiteData () {
    return this.getItems('sobre_nosotros', { single: 1 })
  },
  getCollectionsInfo () {
    return this.getItems('grupos_de_trabajo', { fields: '*' })
  },
  getCollectionItems (section) {
    return this.getItems(section, { fields: '*,imagen.*' })
  }
}
