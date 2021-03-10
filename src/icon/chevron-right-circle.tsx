import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chevron-right-circle`;

export default Vue.extend({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
    },
  },

  computed: {
    classes(): Array<string|object> {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): object {
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M928 512C928 741.7504576 741.7504556800001 928 512 928 282.2495424 928 96 741.7504576 96 512 96 282.24954432000004 282.2495424 96.00000000000004 512 96.00000000000003 741.75045568 96.00000000000001 928 282.24954432 928 512ZM864 512C864 317.59576832 706.4042316800001 160.00000000000003 512 160.00000000000003 317.59576960000004 160.00000000000006 160 317.59576832000005 160 512 160 706.4042304 317.59576960000004 864 512 864 706.4042316800001 864 864 706.4042304 864 512ZM672.01855488 512L445.74438464 738.2741696 400.48955072 693.0193344 581.4585548800001 512.02982976 400.36695424000004 330.9806643200001 445.62178816000005 285.72582976000007 672.01855488 512Z"/></svg>;
  },

});