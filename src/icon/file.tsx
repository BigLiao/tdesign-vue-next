import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-file`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 832C832 867.3462208 803.3462208 896 768 896L256 896C220.653776 896 192 867.3462208 192 832L192 192C192 156.653776 220.653776 128 256 128L578.16149952 128C594.96967168 128 611.10319232 134.61220032 623.07685632 146.40821632L812.91536 333.43016064C825.1251648 345.45881728 832 361.8822816 832 379.02194368L832 832ZM512 448L512 192 256 192 256 832 768 832 768 448 512 448ZM576.12484096 192L576 192 576 384 768 384 576.12484096 192Z"/></svg>;
  },

});
