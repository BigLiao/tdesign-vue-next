import { defineComponent, h, VNode } from 'vue';
import CLASSNAMES from '../utils/classnames';
import config from '../config';
import TIconClose from '../icon/close';
import props from '@TdTypes/tag/props';
import { renderTNodeJSX } from '../utils/render-tnode';

const { prefix } = config;
const name = `${prefix}-tag`;

const initVariantList = {
  dark: `${name}--dark`,
  light: `${name}--light`,
  plain: `${name}--plain`,
};
const initShapeList = {
  square: `${name}--square`,
  round: `${name}--round`,
  mark: `${name}--mark`,
};
const defaultShape = 'square';

export default defineComponent({
  name,
  props: { ...props },
  emits: ['close', 'click'],
  computed: {
    tagClass(): ClassName {
      return [
        `${name}`,
        `${name}--${this.theme}`,
        CLASSNAMES.SIZE[this.size],
        initVariantList[this.variant],
        this.shape !== defaultShape && initShapeList[this.shape],
        {
          [`${name}--ellipsis`]: this.maxWidth,
          [`${name}--close`]: this.closable,
        },
      ];
    },
    tagStyle(): Styles {
      if (this.maxWidth) return { maxWidth: `${this.maxWidth}px` };
      return {};
    },
  },
  methods: {
    handleClose(event: MouseEvent): void {
      this.$emit('close', event);
    },
    handleClick(event: MouseEvent): void {
      this.$emit('click', event);
    },
  },
  render() {
    // 关闭按钮
    const closeIcon = this.closable ? <TIconClose onClick={this.handleClose} /> : '';
    // 标签内容
    const tagContent: TNodeReturnValue = renderTNodeJSX(this, 'default') || renderTNodeJSX(this, 'content');;
    // 图标
    let icon: VNode;
    if (typeof this.icon === 'function') {
      icon = this.icon(h);
    }

    return (
      <span class={this.tagClass} style={this.tagStyle} onClick={this.handleClick}>
        {icon}
        {tagContent}
        {closeIcon}
      </span>
    );
  },
});
