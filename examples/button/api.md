
### Button Props
名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
block | Boolean | false | 是否为块级元素 | N
content | String / Slot / Function | - | 按钮内容。TS 类型：`string | TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-vue-next/blob/main/src/common.ts) | N
default | String / Slot / Function | - | 按钮内容。TS 类型：`string | TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-vue-next/blob/main/src/common.ts) | N
disabled | Boolean | false | 是否禁用按钮 | N
ghost | Boolean | false | 是否为幽灵按钮（镂空按钮） | N
icon | Slot / Function | - | 按钮内部图标，可完全自定义。TS 类型：`TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-vue-next/blob/main/src/common.ts) | N
loading | Boolean | false | 是否显示为加载状态 | N
shape | String | square | 按钮形状，有三种：方形、圆角方形、圆形。可选值：square/round/circle | N
size | String | medium | 组件子元素（默认插槽）。可选值：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/TDesignOteam/tdesign-vue-next/blob/main/src/common.ts) | N
theme | String | undefined | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选值：default/primary/danger/warning/success | N
type | String | button | 按钮类型。可选值：submit/reset/button | N
variant | String | base | 按钮形式，基础、线框、虚线、文字。可选值：base/outline/dashed/text | N
