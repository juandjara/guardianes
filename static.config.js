import React from 'react'
import api from './dataService'

export default {
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData },
  }) => (
    <Html lang="es">
      <Head>
        <title>{siteData.titulo}</title>
        <meta name="description" content={siteData.subtitulo} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' type='image/png' href='/images/escudo-fullcolor.png'/>
        <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Roboto&display=swap" rel="stylesheet" />
        {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> */}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: async () => {
    const homeData = await api.getSiteData()
    return {
      ...homeData,
      lastBuilt: Date.now()
    }
  },
  getRoutes: async () => {
    const collectionsInfo = await api.getCollectionsInfo()
    const collectionItems = await api.getCollectionItems()
    for (const collection of collectionsInfo) {
      collection.items = collectionItems.filter(d => d.group === collection.id)
    }

    const tags = new Set(collectionItems.map(c => c.tags || []).flat())

    return [
      {
        path: '404',
        template: 'src/pages/404'
      },
      {
        path: '/',
        template: 'src/pages/Home',
        getData: () => ({ collectionsInfo })
      },
      ...collectionsInfo.map(collection => ({
        path: api.collectionToLink(collection),
        template: 'src/pages/Collection',
        getData: () => ({ collection, collectionsInfo })
      })),
      ...Array.from(tags).map(tag => ({
        path: api.tagToLink(tag),
        template: 'src/pages/Collection',
        getData: () => {
          const collection = {
            title: tag,
            description: `<p>Actividades que contienen la etiqueta <strong class="tag">${tag}</strong></p>`,
            icon: '/images/hashtag.svg',
            items: collectionItems.filter(d => (d.tags || []).indexOf(tag) !== -1)
          }
          return { collection, collectionsInfo }
        }
      }))
    ]
  },
  siteRoot: 'https://asoguardianes.com',
  plugins: [
    'react-static-plugin-styled-components',
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap'
  ]
}
