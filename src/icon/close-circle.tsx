import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-close-circle`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

  emits: ['click'],

  computed: {
    classes(): ClassName {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): Record<string, any> {
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  methods: {
    handleClick(e: MouseEvent) {
      this.$emit('click', { e });
    },
  },

  render() {
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 96C741.7504576 96 928 282.24954432 928 512 928 741.7504576 741.7504576 928 512 928 282.24954432 928 96 741.7504576 96 512 96 282.24954432 282.24954432 96 512 96ZM512 160C317.59576832 160 160 317.59576832 160 512 160 706.4042304 317.59576832 864 512 864 706.4042304 864 864 706.4042304 864 512 864 317.59576832 706.4042304 160 512 160ZM647.7644992 330.98066432L693.0193344 376.23549824 557.22066432 511.97266432 693.0193344 647.7644992 647.7644992 693.0193344 511.97266432 557.22066432 376.23549824 693.0193344 330.98066432 647.7644992 466.72466432 511.97266432 330.98066432 376.23549824 376.23549824 330.98066432 511.97266432 466.72466432 647.7644992 330.98066432Z"/></svg>;
  },

});
