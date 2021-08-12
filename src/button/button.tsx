import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import TIconLoading from '../icon/loading';
import props from '../../types/button/props';
import { renderContent, renderTNodeJSX } from '../utils/render-tnode';
const name = `${prefix}-button`;

export default defineComponent({
  name,
  props,
  render() {
    let buttonContent = renderContent(this, 'default', 'content');
    const icon = this.loading ? <TIconLoading/> : renderTNodeJSX(this, 'icon');
    const iconOnly = icon && !Boolean(buttonContent);

    let { theme } = this;
    if (!this.theme) {
      if (this.variant === 'base') {
        theme = 'primary';
      } else {
        theme = 'default';
      }
    }

    const buttonClass = [
      `${name}`,
      CLASSNAMES.SIZE[this.size],
      `${name}--variant-${this.variant}`,
      `${name}--theme-${theme}`,
      {
        [CLASSNAMES.STATUS.disabled]: this.disabled,
        [CLASSNAMES.STATUS.loading]: this.loading,
        [`${name}--icon-only`]: iconOnly,
        [`${name}--shape-${this.shape}`]: this.shape !== 'square',
        [`${name}--ghost`]: this.ghost,
        [CLASSNAMES.SIZE.block]: this.block,
      },
    ];

    buttonContent = <span class={`${name}__text`}>{buttonContent}</span>;
    if (icon) {
      buttonContent = [
        icon,
        !iconOnly ? buttonContent : '',
      ];
    }

    return (
      <button class={buttonClass} type={this.type} disabled={this.disabled} {...this.$attrs}>
        {buttonContent}
      </button>
    );
  },
});
