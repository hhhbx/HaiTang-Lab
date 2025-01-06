import { defineNoteConfig } from 'vuepress-theme-plume'

export const fuli = defineNoteConfig({
  dir: 'theme/fuli',
  link: '/fuli/',
  sidebar: [
    {
      text: '福利汇总',
      collapsed: false,
      items: [
        '2025002',
        '2025001',
      ],
    },

  ],
})
