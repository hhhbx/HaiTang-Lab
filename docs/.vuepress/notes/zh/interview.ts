import { defineNoteConfig } from 'vuepress-theme-plume'

export const interview = defineNoteConfig({
  dir: 'theme/interview',
  link: '/interview/',
  sidebar: [
    {
      text: '知识体系题目',
      collapsed: false,
      items: [
        'x-interview',
      ],
    },

  ],
})
