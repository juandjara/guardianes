import api from './cmsapi'

export default {
  getRoutes: async () => {
    const sections = await api.getItems('grupos_de_trabajo', { fields: 'id,titulo,descripcion,icono.filename,imagen.data' })
    const posts = await api.getItems('actividades', { fields: '*,imagen.filename' })

    return [
      {
        path: '404',
        template: 'src/pages/404'
      },
      {
        path: '/',
        getData: () => ({ sections }),
        template: 'src/pages/Home',
        children: sections.map(section => ({
          path: `/${section.id}`,
          template: 'src/pages/Post',
          getData: () => ({
            sections,
            currentSection: section,
            posts: posts.filter(p => p.grupo_de_trabajo.id === section.id)
          })
        }))
      }
    ]
  },
  plugins: [
    // [
    //   require.resolve('react-static-plugin-source-filesystem'),
    //   { location: path.resolve('./src/pages') }
    // ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
}
