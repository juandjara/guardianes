import React from 'react'
import api from './cmsapi'
import axios from 'axios'

const igTokenUrl = 'https://guardianes-instagram-tokenizer.herokuapp.com/token.json'

async function getInstagramPhotos () {
  const { token } = await axios.get(igTokenUrl).then(res => res.data)
  const fields = ['id', 'caption', 'media_type', 'media_url', 'timestamp']
  const url = `https://graph.instagram.com/me/media?fields=${fields.join(',')}&access_token=${token}`
  return axios.get(url).then(res => res.data)
}

export default {
  siteRoot: 'https://asoguardianes.com',
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
        <link rel='icon' type='image/png' href='/images/escudo-fullcolor.png'/>
        <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Roboto&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <style>{`
          body {
            margin: 0;
            color: white;
            background: linear-gradient(80deg, #c41525 15%, #8b1f27 50%);
            min-height: 100vh;
            font-family: Roboto, -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
          }
          html, body {
            scroll-behavior: smooth;
          }
          .display-font {
            font-family: Bree Serif, serif;
          }
          * {
            box-sizing: border-box;
          }
          img {
            max-width: 100%;
            object-fit: contain;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .item-html {
            line-height: 1.5;
          }
        `}</style>
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
    const photos = await getInstagramPhotos()
    const sectionsInfo = await api.getSectionsInfo()
    for (const section of sectionsInfo) {
      const items = await api.getSectionItems(section.coleccion)
      section.items = items
    }

    return [
      {
        path: '404',
        template: 'src/pages/404'
      },
      {
        path: '/',
        template: 'src/pages/Home',
        getData: () => ({ photos, sectionsInfo })
      },
      ...sectionsInfo.map(section => ({
        path: `/${section.coleccion}`,
        template: 'src/pages/Post',
        getData: () => ({ section, sectionsInfo })
      }))
    ]
  },
  plugins: [
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
}
