import { defineNoteConfig } from 'vuepress-theme-plume'

export const archConfig = defineNoteConfig({
  dir: 'theme/arch',
  link: '/arch/',
  sidebar: [
    {
      text: '架构基础',
      collapsed: false,
      items: [
        'arch-x-overview',
        'arch-x-basic',
      ],
    },

  ],
})
