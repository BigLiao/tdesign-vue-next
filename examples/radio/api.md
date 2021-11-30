
### Radio Props
名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
checked | Boolean | - | 是否选中。支持语法糖 | N
defaultChecked | Boolean | - | 是否选中。非受控属性 | N
contentDisabled | Boolean | - | 是否禁用组件内容（content）触发选中 | N
disabled | Boolean | undefined | 是否为禁用态 | N
name | String | - | HTM 元素原生属性 | N
value | String / Number | - | 单选按钮的值。TS 类型：`RadioValue`。[详细类型定义](https://github.com/TDesignOteam/tdesign-vue/blob/main/src/radio/type.ts) | N
onChange | Function |  | 选中状态变化时触发。`(checked: boolean, context: { e: Event }) => {}` | N

### Radio Events
名称 | 参数 | 描述
-- | -- | --
change | `(checked: boolean, context: { e: Event })` | 选中状态变化时触发。支持语法糖


### RadioGroup Props
名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
buttonStyle | String | outline | 单选组件按钮形式。可选值：outline/solid | N
disabled | Boolean | undefined | 是否禁用全部子单选框 | N
name | String | - | HTML 元素原生属性 | N
options | Array | - | 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：`Array<RadioOption>`。[通用类型定义](https://github.com/TDesignOteam/tdesign-vue-next/blob/main/src/common.ts)。[详细类型定义](https://github.com/TDesignOteam/tdesign-vue/blob/main/src/radio/type.ts) | N
size | String | medium | 组件尺寸。可选值：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/TDesignOteam/tdesign-vue-next/blob/main/src/common.ts) | N
value | String / Number | - | 选中的值。支持语法糖。TS 类型：`RadioValue` | N
defaultValue | String / Number | - | 选中的值。非受控属性。TS 类型：`RadioValue` | N
onChange | Function |  | 选中值发生变化时触发。`(value: RadioValue, context: { e: Event }) => {}` | N

### RadioGroup Events
名称 | 参数 | 描述
-- | -- | --
change | `(value: RadioValue, context: { e: Event })` | 选中值发生变化时触发。支持语法糖
