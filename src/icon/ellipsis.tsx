import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-ellipsis`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M192 448C227.346224 448 256 476.653776 256 512 256 547.346224 227.346224 576 192 576 156.653776 576 128 547.346224 128 512 128 476.653776 156.653776 448 192 448ZM512 448C547.346224 448 576 476.653776 576 512 576 547.346224 547.346224 576 512 576 476.653776 576 448 547.346224 448 512 448 476.653776 476.653776 448 512 448ZM832 448C867.3462208 448 896 476.653776 896 512 896 547.346224 867.3462208 576 832 576 796.6537792 576 768 547.346224 768 512 768 476.653776 796.6537792 448 832 448Z"/></svg>;
  },

});
