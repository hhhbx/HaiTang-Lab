import { defineNoteConfig } from 'vuepress-theme-plume'

export const aiConfig = defineNoteConfig({
  dir: 'theme/ai',
  link: '/ai/',
  sidebar: [
    {
      text: 'AI编程',
      collapsed: false,
      items: [
        '01.Cursor官方手册（中文版）',
        '主题配置',
      ],
    },
    {
      text: 'frontmatter',
      prefix: 'frontmatter',
      collapsed: false,
      items: [
        'basic',
        'home',
        'post',
        'friend',
      ],
    },
  ],
})
