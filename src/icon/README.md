## Icon 源文件描述

```
icon/generate/index.js     // 更新单个 SVG 图标文件脚本
icon/iconfont/*       // iconfont 图标代码
icon/svg/single.tsx   // 单个 SVG 图标代码模板
icon/svg/icon.tsx   // 全部 SVG 图标代码
icon/svg/*.tsx    // 由脚本 icon/generate/index.js 自动生成的单个图标代码
index.ts     // 默认引入/导出全部 SVG 图标
```


## 构建产物描述

```
icon/iconfont/index.js      // 全部 iconfont 图标
icon/index.js       // 全部 svg 图标
icon/svg/home.js    // 单独的 home 图标（SVG）
icon/svg/add.js    // 单独的 add 图标（SVG）
icon/svg/export.js    // 单独的 export 图标（SVG）
```
