import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-laptop`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

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

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M960 768L960 832 64 832 64 768 960 768ZM832 192C867.3462208 192 896 220.653776 896 256L896 640C896 675.3462208 867.3462208 704 832 704L192 704C156.653776 704 128 675.3462208 128 640L128 256C128 220.653776 156.653776 192 192 192L832 192ZM832 256L192 256 192 640 832 640 832 256Z"/></svg>;
  },

});
