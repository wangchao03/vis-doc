module.exports = {
  port: 8083,
  title: 'vis.js',
  description: 'network中文文档',
  head: [
    ['link', { rel: 'icon', href: '/images/notes.png' }]
  ],
  themeConfig: {
    // The navigation bar
    nav: [
      // { text: 'Home', link: '/' },
      { text: '开始',
        link: '/network/begin.md'
      },
      { text: 'network文档',
        items: [
          { text: 'Options', link: '/network/Options' },
          { text: 'Modules', link: '/network/Modules' },
          { text: 'Methods', link: '/network/Methods' },
          { text: 'Events', link: '/network/Events' },
          { text: 'Importing data', link: '/network/Importing_data' },
        ]
      },
      // { text: 'GitHub', link: 'https://github.com/dengwb1991/vue-press-notes' }
    ],
    // The sidebar
    sidebar: 'auto',
    lastUpdated: 'Last Updated'
  },
  plugins: [
    ['demo-code', {
      onlineBtns: {
        codepen: true,
        jsfiddle: false,
        codesandbox: false
      }
    }]
  ]
}