module.exports = {
  title: 'Ream',
  description: 'Universal Vue.js Applications Made Simple',
  ga: 'UA-54857209-15',
  themeConfig: {
    repo: 'ream/ream',
    docsRepo: 'ream/ream-website',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],
    sidebar: [
      {
        title: 'Guide',
        children: [
          '/guide/installation',
          '/guide/introduction',
          '/guide/avoid-stateful-singletons',
          '/guide/data-prefetching',
          '/guide/serve-public-files',
          '/guide/manipulating-head',
          '/guide/custom-document',
          '/guide/custom-root-component',
          '/guide/custom-error-page',
          '/guide/progressive-web-app',
          '/guide/using-plugins'
        ]
      },
      {
        title: 'Advanced',
        children: [
          '/advanced/custom-server',
          '/advanced/app-level-enhancements',
          '/advanced/cli',
        ]
      },
      '/entry-file',
      '/config',
      '/plugin-api',
      '/api'
    ]
  }
}