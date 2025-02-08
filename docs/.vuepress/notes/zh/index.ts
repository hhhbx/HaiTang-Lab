import { defineNotesConfig } from 'vuepress-theme-plume'
import { aiConfig } from './ai-config'
import { archConfig } from './arch-config'
import { fuli } from './fuli'
import { interview } from './interview'
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
    archConfig,
    themeConfig,
    fuli,
    // plugins,
    tools,
    interview,
  ],
})
