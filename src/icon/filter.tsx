import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-filter`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.997428,2 L3.00289027,2 C2.72821439,2 2.46562934,2.1129846 2.27677012,2.31243463 L2.1961809,2.408875 C1.90196483,2.80933658 1.94514904,3.37560076 2.31532723,3.72612248 L5.999,7.214 L6,15 L9,12.75 L9,7.214 L12.6849631,3.72615114 C12.8844316,3.53729027 12.997428,3.27469269 12.997428,3 C12.997428,2.44771525 12.5497128,2 11.997428,2 Z M3.0028926,3 L11.997428,3 L8,6.78484858 L8,12.249 L6.999,12.999 L7,6.78486093 L3.0028926,3 Z"/></svg>;
  },

});
