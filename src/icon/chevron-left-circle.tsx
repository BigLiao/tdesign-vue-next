import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chevron-left-circle`;

export default Vue.extend({
  name,

  props: {
    // xs/small/middle/large/xl/18px/2em
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
      if (['xs', 'small', 'middle', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M96.00000000000003 512C96.00000000000004 282.2495424 282.24954432000004 96 512 96 741.7504576 96 928 282.2495424 928 512 928 741.7504556800001 741.7504576 928 512 928 282.24954432 928 96.00000000000001 741.75045568 96.00000000000003 512ZM160.00000000000003 512C160.00000000000003 706.4042316800001 317.59576832 864 512 864 706.4042304 864 864 706.4042316800001 864 512 864 317.59576960000004 706.4042304 160 512 160 317.59576832000005 160 160.00000000000006 317.59576960000004 160.00000000000003 512ZM351.98144512000005 512L578.25561536 285.72583039999995 623.51044928 330.98066559999995 442.54144512000005 511.97017024 623.63304576 693.01933568 578.37821184 738.2741702400001 351.98144512000005 512Z"/></svg>;
  },

});