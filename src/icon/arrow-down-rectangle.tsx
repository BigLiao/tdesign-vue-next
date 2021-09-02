import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-arrow-down-rectangle`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 128C867.3462208 128 896 156.653776 896 192L896 832C896 867.3462208 867.3462208 896 832 896L128 896C92.653776 896 64 867.3462208 64 832L64 192C64 156.653776 92.653776 128 128 128L832 128ZM832 192L128 192 128 832 832 832 832 192ZM514.27417024 256L514.24 639.95908608 669.488352 484.71011136 714.7431872 529.96494528 527.424 715.4150848 527.52900416 715.4639168 482.26798528 760.6630848 256 534.44457984 301.25483392 489.18974592 450.24 638.23108608 450.27417024 256 514.27417024 256Z"/></svg>;
  },

});
