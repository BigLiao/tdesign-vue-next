import { defineComponent, h, VNode } from 'vue';
import { prefix } from '../config';
import TIconInfoCircleFilled from '../icon/info-circle-filled';
import TIconCheckCircleFilled from '../icon/check-circle-filled';
import TIconClose from '../icon/close';
import props from '@TdTypes/notification/props';

const name = `${prefix}-notification`;

export default defineComponent({
  name,
  components: {
    TIconInfoCircleFilled,
    TIconCheckCircleFilled,
    TIconClose,
  },
  props: { ...props },
  mounted() {
    if (this.duration > 0) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.$emit('duration-end', this);
      }, this.duration);
    }
  },
  methods: {
    close(e?: MouseEvent) {
      this.$emit('click-close-btn', e, this);
    },
    renderIcon() {
      let icon;
      if (this.theme) {
        const iconType = this.theme === 'success'
          ? (<t-icon-check-circle-filled class={`t-is-${this.theme}`} />)
          : (<t-icon-info-circle-filled class={`t-is-${this.theme}`} />);
        icon = (<div class='t-notification__icon'>
          {iconType}
        </div>);
      } else if (this.icon) {
        icon = this.icon(h);
      } else if (this.$slots.icon) {
        icon = this.$slots.icon(null);
      }
      return icon;
    },
    renderClose() {
      const { closeBtn } = this;
      if (typeof closeBtn === 'boolean') {
        return closeBtn && <t-icon-close nativeOnClick={this.close} class='t-message-close' />;
      }
      let close: TNodeReturnValue = null;
      if (typeof closeBtn === 'function') {
        close = closeBtn(h);
      } else if (typeof closeBtn === 'string') {
        close = closeBtn;
      } else if (typeof this.$slots.closeBtn === 'function') {
        close = this.$slots.closeBtn(null);
      }
      if (close) {
        return (<div class='t-icon-close' onClick={this.close}> { close } </div>);
      }
    },
    renderContent() {
      let content;

      switch (typeof this.content) {
        case 'function': {
          content = <div class={`${name}__content`}>{this.content(h)}</div>;
          break;
        }
        case 'string': {
          content = this.content ? (<div class={`${name}__content`}>{this.content}</div>) : '';
          break;
        }
      };
      content = this.$slots.default ? <div class={`${name}__content`}>{this.$slots.default(null)}</div> : content;

      return content;
    },
    renderFooter() {
      let footer: VNode[] | VNode | string = '';

      if (this.footer) {
        footer = (this.footer as Function)(h);
      };
      footer = this.$slots.footer ? this.$slots.footer(null) : footer;

      return footer;
    },
  },
  render() {
    const icon = this.renderIcon();
    const close = this.renderClose();
    const content = this.renderContent();
    const footer = this.renderFooter();

    return (
      <div class={`${name}`}>
        {icon}
        <div class={`${name}__main`}>
          <div class={`${name}__title__wrap`}>
            <span class={`${name}__title`}>{this.title}</span>
            {close}
          </div>
          {content}
          {footer}
        </div>
      </div>
    );
  },
});
