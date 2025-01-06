import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = defineNavbarConfig([
  // {
  //   text: '指南',
  //   icon: 'icon-park-outline:guide-board',
  //   link: '/notes/theme/guide/介绍.md',
  //   activeMatch: '^/guide/',
  // },
  {
    text: 'AI编程',
    link: '/notes/theme/ai/01.Cursor官方手册（中文版）.md',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/ai/',
  },
  // {
  //   text: '配置',
  //   icon: 'icon-park-outline:setting-two',
  //   link: '/notes/theme/config/配置说明.md',
  //   activeMatch: '^/config/',
  // },
  // {
  //   text: '博客',
  //   link: '/blog/',
  //   icon: 'material-symbols:article-outline',
  //   activeMatch: '^/(blog|article)/',
  // },
  {
    text: '面试',
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },
  {
    text: 'Java',
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },
  {
    text: 'Spring',
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },
  {
    text: '数据库',
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },

  // {
  //   text: '案例',
  //   link: '/demos/',
  //   icon: 'map:wind-surfing',
  // },
  {
    text: '架构|中间件',
    icon: 'icon-park-outline:more-three',
    items: [
      { text: '架构知识体系', link: '/notes/theme/arch/arch-x-overview.md', icon: 'wpf:faq', activeMatch: '^/arch/' },
      { text: '架构 - 架构基础: 特点,本质...', link: '/notes/theme/arch/arch-x-basic.md', icon: 'line-md:coffee-loop', activeMatch: '^/arch/' },
      { text: '喝杯奶茶', link: '/sponsor/', icon: 'line-md:coffee-loop' },
      { text: '主题工具', link: '/tools/', icon: 'jam:tools' },
      { text: '友情链接', link: '/friends/', icon: 'carbon:friendship' },
      {
        text: 'Vuepress',
        icon: 'logos:vue',
        items: [
          { text: '官方文档', link: 'https://v2.vuepress.vuejs.org', icon: 'logos:vue' },
          { text: '生态系统', link: 'https://ecosystem.vuejs.press/', icon: 'logos:vue' },
        ],
      },
    ],
  },
  // {
  //   text: '方法论|团队管理',
  //   link: '/blog/',
  //   icon: 'material-symbols:article-outline',
  //   activeMatch: '^/(blog|article)/',
  // },
  {
    text: '福利汇总',
    icon: 'icon-park-outline:more-three',
    items: [
      { text: '2025年福利汇总第2期 ：喝腊八粥', link: '/notes/theme/fuli/2025002.md', icon: 'line-md:coffee-loop', activeMatch: '^/fuli/' },
      { text: '2025年福利汇总第1期 ：元旦快乐', link: '/notes/theme/fuli/2025001.md', icon: 'line-md:coffee-loop', activeMatch: '^/fuli/' },
      { text: '友情链接', link: '/friends/', icon: 'carbon:friendship' },
      {
        text: '网站推荐',
        icon: 'carbon:friendship',
        items: [
          { text: '有趣网站', link: '/notes/theme/websit/sites.md', icon: 'material-symbols:article-outline' },
          { text: 'AI资源站', link: 'https://v2.vuepress.vuejs.org', icon: 'material-symbols:article-outline' },
          { text: '影视福利', link: 'https://v2.vuepress.vuejs.org', icon: 'material-symbols:article-outline' },
          { text: '友情链接', link: 'https://v2.vuepress.vuejs.org', icon: 'material-symbols:article-outline' },
        ],
      },
    ],
  },
  {
    text: '更多',
    icon: 'icon-park-outline:more-three',
    items: [
      { text: '常见问题', link: '/faq/', icon: 'wpf:faq' },
      { text: '喝杯奶茶', link: '/sponsor/', icon: 'line-md:coffee-loop' },
      { text: '主题工具', link: '/tools/', icon: 'jam:tools' },
      { text: '友情链接', link: '/friends/', icon: 'carbon:friendship' },
      {
        text: 'Vuepress',
        icon: 'logos:vue',
        items: [
          { text: '官方文档', link: 'https://v2.vuepress.vuejs.org', icon: 'logos:vue' },
          { text: '生态系统', link: 'https://ecosystem.vuejs.press/', icon: 'logos:vue' },
        ],
      },
    ],
  },
  // {
  //   text: `${version}`,
  //   icon: 'codicon:versions',
  //   items: [
  //     { text: '更新日志', link: '/changelog/' },
  //     { text: '参与贡献', link: '/contributing/' },
  //   ],
  // },
])

export const enNavbar = defineNavbarConfig([
  {
    text: 'Guide',
    icon: 'icon-park-outline:guide-board',
    link: '/en/guide/intro/',
    activeMatch: '^/en/guide/',
  },
  {
    text: 'Config',
    icon: 'icon-park-outline:setting-two',
    link: '/en/config/intro/',
    activeMatch: '^/en/config/',
  },
  {
    text: 'Blog',
    link: '/en/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/en/(blog|article)/',
  },
  {
    text: 'More',
    icon: 'icon-park-outline:more-three',
    items: [
      {
        text: 'Vuepress',
        items: [
          { text: 'Official Docs', link: 'https://v2.vuepress.vuejs.org' },
          { text: 'Ecosystem', link: 'https://ecosystem.vuejs.press/' },
        ],
      },
    ],
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    items: [
      { text: 'Changelog', link: '/changelog/' },
      { text: 'Contributing', link: '/contributing/' },
    ],
  },
])
