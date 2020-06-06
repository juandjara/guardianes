import axios from 'axios'

export default {
  url: 'https://editor.asoguardianes.com/guardianes',
  thumbsUrl: 'https://editor.asoguardianes.com/guardianes/assets',
  async getItems(collection, params) {
    const url = `${this.url}/items/${collection}?${this._paramsToText(params)}`
    const res = await axios.get(url)
    return res.data.data
  },
  _paramsToText(params) {
    return Object.keys(params || {}).map(key => `${key}=${params[key]}`).join('&')
  },
  makeImageUrl(file, imageFormat) {
    return `${this.thumbsUrl}/${file.private_hash}?key=${imageFormat}`
  },
  getSiteData () {
    return this.getItems('sobre_la_asociacion', { single: 1 })
  },
  getSectionsInfo () {
    return this.getItems('info_grupos', { fields: 'id,titulo,descripcion,coleccion,icono.*,imagen.*' })
  },
  getSection (section) {
    return this.getItems('info_grupos', { 'filter[coleccion]': section, single: 1, fields: 'id,titulo,descripcion,coleccion,icono.*,imagen.*' })
  },
  getSectionItems (section) {
    return this.getItems(section, { fields: '*,imagen.*' })
  }
}
