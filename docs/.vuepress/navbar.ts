import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  {text: '指南', link: '/', icon: 'icon-park-outline:guide-board'},
  {text: '导航', link: '/', icon: 'icon-park-outline:guide-board'},
  {text: '面试', link: '/', icon: 'icon-park-outline:guide-board'},
  {text: '博客', link: '/blog/', icon: 'icon-park-outline:guide-board'},
  {text: '标签', link: '/blog/tags/', icon: 'icon-park-outline:guide-board'},
  {text: '归档', link: '/blog/archives/', icon: 'icon-park-outline:guide-board'},
  {
    text: '开源项目',
    items: [
      {text: '海棠AI证件照小程序', link: '/notes/demo/README.md',icon: 'icon-park-outline:guide-board'},
      {text: '海棠智慧仓ERP系统', link: '/', icon: 'icon-park-outline:guide-board'},
    ]
  },
  {
    text: '笔记',
    items: [{text: '示例', link: '/notes/demo/README.md'}]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Guide', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

