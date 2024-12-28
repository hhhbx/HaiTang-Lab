import fs from 'node:fs'
import path from 'node:path'
import { viteBundler } from '@vuepress/bundler-vite'
import { addViteOptimizeDepsInclude, addViteSsrExternal } from '@vuepress/helper'
import { defineUserConfig, type UserConfig } from 'vuepress'
import { theme } from './theme.js'

const pnpmWorkspace = fs.readFileSync(path.resolve(__dirname, '../../pnpm-workspace.yaml'), 'utf-8')
const vuepress = pnpmWorkspace.match(/vuepress:\s(.*)/)?.[1] || ''

export default defineUserConfig({
  base: '/HaiTang-Lab/',
  lang: 'zh-CN',
  source: path.resolve(__dirname, '../'),
  public: path.resolve(__dirname, 'public'),
  locales: {
    '/': { title: '海棠实验室', lang: 'zh-CN' },
    '/en/': { title: 'HaiTang Lab', lang: 'en-US' },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['meta', { name: 'google-site-verification', content: 'X5YSaTDn-pKqQBUKD_05_dQcxVItzEq7Rlbg2ZEU7AM' }],
  ],

  pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],

  extendsBundlerOptions(bundlerOptions, app) {
    addViteOptimizeDepsInclude(bundlerOptions, app, '@simonwep/pickr')
    addViteSsrExternal(bundlerOptions, app, '@simonwep/pickr')
  },

  define: {
    __VUEPRESS_VERSION__: vuepress,
  },

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme,
}) as UserConfig
