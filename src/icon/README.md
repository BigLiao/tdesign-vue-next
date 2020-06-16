## Icon 源文件描述

```
icon/generate/index.js    // 脚本，用于更新单个 SVG 图标文件，icon/*.tsx

icon/iconfont/icon.tsx    // iconfont 图标代码

icon/svg/icon.tsx   // 全部 SVG 图标代码

icon/single.tsx   // 单个 SVG 图标代码模板，由脚本 icon/generate/index.js 根据该模板自动生成单个图标代码
icon/*.tsx    // 由脚本 icon/generate/index.js 自动生成的单个图标代码

index.ts     // 默认导出全部 SVG 图标
```


## 构建产物描述

```
icon/iconfont/index.js      // 全部 iconfont 图标
icon/index.js       // 全部 svg 图标
icon/more.js    // 单独的 more 图标（SVG）
icon/loading.js    // 单独的 loading 图标（SVG）
icon/search.js    // 单独的 search 图标（SVG）
```
