import axios from 'axios'

export default {
  url: 'https://editor.asoguardianes.com',
  thumbsUrl: 'https://editor.asoguardianes.com/assets',
  collectionToLink (c) {
    return `/${c.id}/${c.title}`.toLowerCase().replace(/\s/g, '-')
  },
  paramsToText(params) {
    return Object.keys(params || {}).map(key => `${key}=${params[key]}`).join('&')
  },
  makeImageUrl(file, imageFormat) {
    return `${this.thumbsUrl}/${file}?${imageFormat ? `key=${imageFormat}` : ''}`
  },
  async getItems(collection, params) {
    const url = `${this.url}/items/${collection}?${this.paramsToText(params)}`
    const res = await axios.get(url)
    return res.data.data
  },
  async getSiteData () {
    return this.getItems('sobre_nosotros', { single: 1 })
  },
  async getCollectionsInfo () {
    return this.getItems('grupos_de_trabajo', { sort: 'sort', fields: '*' })
  },
  async getCollectionItems () {
    return this.getItems('actvidades', { sort: 'sort', fields: '*,subgroup.*' })
  }
}
