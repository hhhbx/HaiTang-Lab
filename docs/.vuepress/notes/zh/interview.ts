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
        'x-interview2',
        'x-interview3',
        'x-interview4',
        'x-interview5',
      ],
    },
    {
      text: '场景题',
      collapsed: false,
      items: [
        'Redis 服务器崩溃了，应该如何优化？',
        '优化高并发场景下的数据库查询性能',
        '发现 Redis 内存溢出，如何排查和解决？',
        '如何分析 JVM 的内存使用情况？OOM 后如何分析？',
      ],
    },
  ],
})
