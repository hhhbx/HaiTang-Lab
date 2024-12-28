import { defineNoteConfig } from 'vuepress-theme-plume'

export const aiConfig = defineNoteConfig({
  dir: 'theme/ai',
  link: '/ai/',
  sidebar: [
    {
      text: 'AI编程',
      collapsed: false,
      items: [
        '配置说明',
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
