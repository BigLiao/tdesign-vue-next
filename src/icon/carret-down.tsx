import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-carret-down`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.55014648,2.00411538 C4.16354716,2.00411538 3.85014648,2.31751606 3.85014648,2.70411538 L3.85014648,13.2872234 C3.85014648,13.4433284 3.90232656,13.594954 3.99839255,13.717999 C4.23630334,14.0227243 4.67619678,14.0768881 4.98092207,13.8389774 L11.4568654,8.7829585 C11.5213712,8.73259635 11.5794509,8.67450627 11.6298016,8.60999149 C11.9695964,8.17460895 11.8921072,7.54620358 11.4567246,7.20640879 L4.9808235,2.15228451 C4.8577951,2.05626686 4.70620857,2.00411538 4.55014648,2.00411538 Z M4.85,12.6710557 L4.85,3.31905568 L10.8414718,7.9947386 L4.85,12.6710557 Z" transform="matrix(0 1 1 0 -.15 .15)"/></svg>;
  },

});
