---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    background: tint-plate
    hero:
      name: 海棠实验室
      tagline: 海棠智慧仓储ERP管理系统
      text: 一款基于SpringBoot+Vue3框架前后端分离支持SaaS模式的智慧仓储管理ERP系统 #最简洁易上手的微服务开发框架  #一个简约的，功能丰富的 vuepress 文档&博客 主题
      actions:
        -
          theme: brand
          text: 快速开始 →
          link: /blog/
        -
          theme: alt
          text: Gitee →
          link: https://gitee.com/haitang-lab
  -
    type: features
    features:
      -
        title: 最新技术栈
        icon: twemoji:laptop-computer
        details: 基于Spring Cloud2023、JDK17、Vue3,Vite,TypeScript、Antdv4.x等最新技术栈开发。
      -
        title: 博客 & 文档
        icon: twemoji:open-book
        details: 无论是想写博客，或想写产品文档，或者两者兼顾
      -
        title: 开箱即用
        icon: twemoji:rocket
        details: 支持零配置开箱即用，也支持丰富的自定义配置
      -
        title: 多语言
        icon: twemoji:balance-scale
        details: 内置 中文/英文支持，还可以自定义添加更多的语言支持
      -
        title: 双色主题
        icon: twemoji:cityscape
        details: 支持 浅色/深色 主题，包括代码高亮
      -
        title: 插件
        icon: twemoji:card-file-box
        details: 内置丰富的插件，一站式解决网站一般需求
      -
        title: 搜索、评论
        icon: twemoji:magnifying-glass-tilted-right
        details: 支持多种评论系统，支持本地搜索、Algolia搜索
      -
        title: 加密
        icon: twemoji:locked-with-key
        details: 支持全站加密、部分加密（加密目录、加密文章）
      -
        title: 组件封装
        icon: twemoji:writing-hand-light-skin-tone
        details: 对日常使用频率较高组件二次封装，前端后均可以快速开发，全网最高效开发框架
  -
      type: image-text
      title: 功能
      description: 内置丰富的功能，满足网站一般需求。
      image: /images/plume-1.svg
      list:
        -
          title: 文章信息
          description: 为文章添加标签、分类、字数统计、阅读时间、写作日期等信息。
        -
          title: 评论
          description: 支持 4 种评论系统：Giscus、Waline、Twikoo、Artalk<br>你可以自由选择符合你的需求的评论系统。
        -
          title: 搜索
          description: 支持基于 minisearch 的本地搜索，还支持接入 Algolia 搜索。
        -
          title: 加密
          description: 支持全站加密、部分加密（加密目录、加密文章）。
        -
          title: 代码
          description: 代码复制，CodePen演示，JSFiddle演示，CodeSandbox演示，代码组，行高亮，行聚焦，行警告，差异对比，代码块折叠等。
        -
          title: 资源嵌入
          description: 图表：chart.js/ECharts/Mermaid/flowchart<br>视频：Bilibili/Youtube<br>PDF，200K+ Iconify 图标
  -
      type: text-image
      title: 博客
      description: 主题默认支持博客，生成你的个人博客。
      image: /images/plume-2.svg
      list:
        -
          title: 文章列表
          description: 通过文章写作日期，自动排序并生成博客文章列表页。
        -
          title: 博主信息
          description: 自定义名称、座右铭、头像，社交媒体链接。
        -
          title: 分类、标签、归档
          description: 自动生成分类页、标签页，为文章根据年份进行归档。
  -
      type: image-text
      title: 文档
      image: /images/plume-3.svg
      description: 主题默认支持文档，生成你的产品文档，或归纳你的知识体系。
      list:
        -
          title: 侧边栏
          description: 根据文档目录自动生成侧边栏，也可以手动配置，主题提供了更简单的配置方式。
        -
          title: 文档分类归纳
          description: 可以文档的不同，归纳到不同的目录，更好的管理文档结构。
  -
      type: custom
---



<div style="max-width: 960px;margin:0 auto;">

::: center
![GitHub Repo stars](https://img.shields.io/github/stars/pengzhanbo/vuepress-theme-plume)
![npm version](https://img.shields.io/npm/v/vuepress-theme-plume?color=32A9C3&labelColor=1B3C4A&label=npm)
![npm downloads](https://img.shields.io/npm/dy/vuepress-theme-plume?color=32A9C3&labelColor=1B3C4A&label=downloads)
![github license](https://img.shields.io/github/license/pengzhanbo/vuepress-theme-plume?color=32A9C3&labelColor=1B3C4A)
:::

### 安装

:::code-tabs
@tab pnpm

```sh
pnpm add vuepress@next vuepress-theme-plume vue
```

@tab npm

```sh
npm install vuepress@next vuepress-theme-plume
```

@tab yarn

```sh
yarn add vuepress@next vuepress-theme-plume
```

:::

### 配置

::: code-tabs
@tab .vuepress/config.ts

```ts :no-line-numbers
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // vuepress config...
  theme: plumeTheme({
    // theme config...
  })
})
```

:::

### 更新记录

[Changelog](./changelog.md)

### 贡献者

<Contributors
:contributors="[
'pengzhanbo',
{ github: 'huankong233', name: 'huan_kong' },
{ github: 'northword', name: 'Northword' },
'KrLite',
'shylock-wu',
'hrradev',
{ github: 'TheCoderAlex', name: 'Tang Zifeng' },
{ github: 'HydroGest', name: 'MarkChai'}
]"
/>

</div>
