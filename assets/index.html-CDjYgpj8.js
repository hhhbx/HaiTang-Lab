import{_ as h,c as l,b as e,d as a,w as n,a as i,r as p,o as k}from"./app-DVHp4VmC.js";const d={};function r(o,s){const t=p("LinkCard");return k(),l("div",null,[s[3]||(s[3]=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>使用 <code>&lt;LinkCard&gt;</code> 组件在页面中显示链接卡片。</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>标题</td></tr><tr><td>icon</td><td><code>string | { svg: string }</code></td><td><code>&#39;&#39;</code></td><td>显示在标题左侧的图标，支持 iconify 所有图标，也可以使用 图片链接</td></tr><tr><td>href</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>链接</td></tr><tr><td>description</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>详情</td></tr></tbody></table><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽"><span>插槽</span></a></h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>卡片详情内容</td></tr><tr><td>title</td><td>自定义标题</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LinkCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">卡片标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> description</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">这里是卡片内容</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LinkCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">twemoji:astonished-face</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">卡片标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,10)),a(t,{title:"卡片标题",href:"/",description:"这里是卡片内容"}),a(t,{icon:"twemoji:astonished-face",title:"卡片标题",href:"/"}),s[4]||(s[4]=e(`<p>使用组件插槽，可以实现更丰富的表现。</p><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LinkCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">卡片标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  - 这里是卡片内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  - 这里是卡片内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LinkCard</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LinkCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> #title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">span</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">color: red</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">卡片标题</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">span</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  - 这里是卡片内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  - 这里是卡片内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LinkCard</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,4)),a(t,{title:"卡片标题",href:"/"},{default:n(()=>s[0]||(s[0]=[i("ul",null,[i("li",null,"这里是卡片内容"),i("li",null,"这里是卡片内容")],-1)])),_:1}),a(t,{href:"/"},{title:n(()=>s[1]||(s[1]=[i("span",{style:{color:"red"}},"卡片标题",-1)])),default:n(()=>[s[2]||(s[2]=i("ul",null,[i("li",null,"这里是卡片内容"),i("li",null,"这里是卡片内容")],-1))]),_:1}),s[5]||(s[5]=i("div",{class:"hint-container info"},[i("p",{class:"hint-container-title"},"相关信息"),i("p",null,"在插槽内也可以使用 markdown 语法，但需要注意的是，markdown 语法需要与 标签之间间隔一行。 否则将被识别为普通文本。")],-1))])}const c=h(d,[["render",r],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/guide/components/link-card/","title":"链接卡片","lang":"zh-CN","frontmatter":{"title":"链接卡片","author":"pengzhanbo","icon":"solar:card-send-linear","createTime":"2024/08/18 23:14:00","permalink":"/guide/components/link-card/","description":"概述 使用 <LinkCard> 组件在页面中显示链接卡片。 Props 插槽 示例 输入： 输出：","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/HaiTang-Lab/guide/components/link-card/"}],["meta",{"property":"og:site_name","content":"海棠实验室"}],["meta",{"property":"og:title","content":"链接卡片"}],["meta",{"property":"og:description","content":"概述 使用 <LinkCard> 组件在页面中显示链接卡片。 Props 插槽 示例 输入： 输出："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-26T14:28:49.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-26T14:28:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"链接卡片\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-26T14:28:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.18,"words":353},"git":{"updatedTime":1735223329000,"contributors":[{"name":"hhhbx","username":"hhhbx","email":"972916730@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/hhhbx?v=4","url":"https://github.com/hhhbx"}],"changelog":[{"hash":"1a03a93d508e5b89665900bf046629b6df2c52c2","date":1735223329000,"email":"972916730@qq.com","author":"hhhbx","message":"feat(docs): 初始化核心模块","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/1a03a93d508e5b89665900bf046629b6df2c52c2"}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/组件/链接卡片.md","bulletin":false}');export{c as comp,y as data};
