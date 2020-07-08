import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-menu-fold`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14,12 L14,13 L2,13 L2,12 L14,12 Z M2.6,4.94841184 C2.71925585,4.94841184 2.83580652,4.98394994 2.93477345,5.05048942 L5.71402121,6.91909051 C6.03484867,7.13479583 6.12006699,7.56974158 5.90436167,7.89056903 C5.85382632,7.96573235 5.78918453,8.03037414 5.71402121,8.08090949 L2.93477345,9.94951058 C2.6597785,10.1344008 2.28696786,10.0613566 2.10207758,9.78636161 C2.03553809,9.68739467 2,9.57084401 2,9.45158816 L2,5.54841184 C2,5.21704099 2.26862915,4.94841184 2.6,4.94841184 Z M3.00083789,6.299 L3.00083789,8.7 L4.78683789,7.5 L3.00083789,6.299 Z M14,7 L14,8 L7,8 L7,7 L14,7 Z M14,2 L14,3 L2,3 L2,2 L14,2 Z"/></svg>;
  },

});
