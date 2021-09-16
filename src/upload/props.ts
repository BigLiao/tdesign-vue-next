/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-07-17 18:09:07
 * */

import { PropType } from 'vue';
import { TdUploadProps } from './type';

export default {
  /** 接受上传的文件类型，[查看 W3C示例](https://www.w3schools.com/tags/att_input_accept.asp)，[查看 MDN 示例](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file) */
  accept: {
    type: String,
    default: '',
  },
  /** 上传接口 */
  action: {
    type: String,
    default: '',
  },
  /** 是否选取文件后自动上传 */
  autoUpload: {
    type: Boolean,
    default: true,
  },
  /** 上传文件之前的钩子，参数为上传的文件，返回值决定是否上传 */
  beforeUpload: {
    type: Function as PropType<TdUploadProps['beforeUpload']>,
  },
  /** 上传文件时所需的额外数据 */
  data: {
    type: Object as PropType<TdUploadProps['data']>,
  },
  /** 触发上传的内容，同 trigger */
  default: {
    type: [String, Function] as PropType<TdUploadProps['default']>,
  },
  /** 是否禁用 */
  disabled: Boolean,
  /** 是否启用拖拽上传 */
  draggable: Boolean,
  /** 已上传文件列表 */
  files: {
    type: Array as PropType<TdUploadProps['files']>,
  },
  /** 已上传文件列表，非受控属性 */
  defaultFiles: {
    type: Array as PropType<TdUploadProps['defaultFiles']>,
  },
  /** 文件上传前转换文件数据 */
  format: {
    type: Function as PropType<TdUploadProps['format']>,
  },
  /** 用于格式化文件上传后的响应数据。error 用于显示错误提示；url 用于上传文件/图片地址 */
  formatResponse: {
    type: Function as PropType<TdUploadProps['formatResponse']>,
  },
  /** 设置上传的请求头部 */
  headers: {
    type: Object as PropType<TdUploadProps['headers']>,
  },
  /** 用于控制文件上传数量，值为 0 则不限制 */
  max: {
    type: Number,
    default: 0,
  },
  /** 上传接口方法 */
  method: {
    type: String as PropType<TdUploadProps['method']>,
    default: 'POST' as TdUploadProps['method'],
    validator(val: TdUploadProps['method']): boolean {
      return ['POST', 'GET', 'PUT', 'OPTION'].includes(val);
    },
  },
  /** 是否支持多选文件 */
  multiple: Boolean,
  /** 文件上传时的名称 */
  name: {
    type: String,
    default: 'file',
  },
  /** 占位符 */
  placeholder: {
    type: String,
    default: '',
  },
  /** 组件风格。custom 表示完全自定义风格；file 表示默认文件上传风格；file-input 表示输入框形式的文件上传；file-flow 表示文件批量上传；image 表示默认图片上传风格；image-flow 表示图片批量上传 */
  theme: {
    type: String as PropType<TdUploadProps['theme']>,
    default: 'file' as TdUploadProps['theme'],
    validator(val: TdUploadProps['theme']): boolean {
      return ['custom', 'file', 'file-input', 'file-flow', 'image', 'image-flow'].includes(val);
    },
  },
  /** 小文本提示 */
  tips: {
    type: String,
    default: '',
  },
  /** 触发上传的内容 */
  trigger: {
    type: [String, Function] as PropType<TdUploadProps['trigger']>,
  },
  /** 上传请求时是否携带 cookie */
  withCredentials: Boolean,
  /** 已上传文件列表发生变化时触发 */
  onChange: Function as PropType<TdUploadProps['onChange']>,
  /** 进入拖拽区域时触发 */
  onDragenter: Function as PropType<TdUploadProps['onDragenter']>,
  /** 拖拽结束时触发 */
  onDragleave: Function as PropType<TdUploadProps['onDragleave']>,
  /** 上传失败后触发 */
  onFail: Function as PropType<TdUploadProps['onFail']>,
  /** 点击预览时触发 */
  onPreview: Function as PropType<TdUploadProps['onPreview']>,
  /** 上传进度变化时触发 */
  onProgress: Function as PropType<TdUploadProps['onProgress']>,
  /** 上传失败后触发 */
  onRemove: Function as PropType<TdUploadProps['onRemove']>,
  /** 上传成功后触发 */
  onSuccess: Function as PropType<TdUploadProps['onSuccess']>,
};
