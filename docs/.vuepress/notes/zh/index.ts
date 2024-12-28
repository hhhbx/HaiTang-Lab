import { defineNotesConfig } from 'vuepress-theme-plume'
import { aiConfig } from './ai-config'
// import { plugins } from './plugins'
import { themeConfig } from './theme-config'
import { themeGuide } from './theme-guide'
import { tools } from './tools'

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    themeGuide,
    aiConfig,
    themeConfig,
    // plugins,
    tools,
  ],
})
