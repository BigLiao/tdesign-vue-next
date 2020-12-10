import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chevron-up-circle`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512 96C741.7504576 96 928 282.24954432 928 512 928 741.7504576 741.7504576 928 512 928 282.24954432 928 96 741.7504576 96 512 96 282.24954432 282.24954432 96 512 96ZM512 160C317.59576832 160 160 317.59576832 160 512 160 706.4042304 317.59576832 864 512 864 706.4042304 864 864 706.4042304 864 512 864 317.59576832 706.4042304 160 512 160ZM512 351.98144512L738.2741696 578.25561536 693.0193344 623.51044928 512.02982976 442.54144512 330.98066432 623.63304576 285.72582976 578.37821184 512 351.98144512Z"/></svg>;
  },

});
