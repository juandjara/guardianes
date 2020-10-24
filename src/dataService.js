import axios from 'axios'

// taken from https://ourcodeworld.com/articles/read/255/creating-url-slugs-properly-in-javascript-including-transliteration-for-utf-8
function slug (str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
  const to   = 'aaaaaeeeeeiiiiooooouuuunc------'
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

export default {
  url: 'https://editor.asoguardianes.com',
  thumbsUrl: 'https://editor.asoguardianes.com/assets',
  collectionToLink (c) {
    const key = slug(c.title.toLowerCase())
    return `/${key}`
  },
  tagToLink (tag) {
    const key = slug(tag.toLowerCase())
    return `/tag/${key}`
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
