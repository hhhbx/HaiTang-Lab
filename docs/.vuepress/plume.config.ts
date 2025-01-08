import path from 'node:path'
import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar.js'
import { enNotes, zhNotes } from './notes/index.js'

export default defineThemeConfig({
  logo: '/plume.png',

  profile: {
    avatar: '/plume.png',
    name: 'Plume Theme',
    description: 'The Theme for Vuepress 2.0',
    location: 'ShangHai, China',
    organization: 'haitang-lab',
  },

  // social: [
  //   { icon: 'github', link: 'https://gitee.com/haitang-lab' },
  //   { icon: 'qq', link: 'https://gitee.com/haitang-lab/HaiTang-lab/blob/master/docs/.vuepress/public/wechat.jpg' },
  // ],
  // navbarSocialInclude: ['github', 'qq'],

  footer: {
    copyright: 'Copyright © 2024-present haitang-lab',
  },

  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
    '/en/': {
      notes: enNotes,
      navbar: enNavbar,
    },
  },

  encrypt: {
    rules: {
      '/article/enx7c9s/': '123456',
    },
  },
  autoFrontmatter: { exclude: ['**/*.snippet.*'] },

  bulletin: {
    layout: 'top-right',
    lifetime: 'always',
    // title: '🎉 公告 🎉',
    contentFile: path.join(__dirname, 'bulletin.md'),
    enablePage: page => page.path === '/guide/features/bulletin/',
  },
})
