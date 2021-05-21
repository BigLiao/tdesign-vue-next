import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chevron-down-circle`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512 928C282.2495424 928.0000000000001 96 741.7504556800002 95.99999999999989 512.0000000000001 95.99999999999989 282.2495424000001 282.2495423999999 96.00000000000011 511.9999999999999 96.00000000000011 741.75045568 96 927.9999999999999 282.2495424 928 512 928 741.75045568 741.75045568 928 512 928ZM512 864C706.4042316800001 864 864 706.4042316800001 864 512 863.9999999999999 317.59576960000004 706.4042316799998 160 511.9999999999999 160.0000000000001 317.5957695999999 160.0000000000001 159.9999999999999 317.59576960000015 159.9999999999999 512.0000000000001 160 706.4042316800001 317.59576960000004 864.0000000000001 512 864ZM512 672.01855488L285.72583039999984 445.74438464000013 330.98066559999984 400.4895507200001 511.97017024 581.4585548800001 693.0193356799999 400.36695424000004 738.2741702399999 445.62178816000005 512 672.01855488Z"/></svg>;
  },

});
