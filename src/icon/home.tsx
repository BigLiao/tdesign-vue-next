import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-home`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4,14 C3.44771525,14 3,13.5522847 3,13 L3,9 C2.4497348,9 2.00201955,8.55228475 2.00201955,8 C2.00201955,7.73169596 2.10983659,7.47464619 2.30123832,7.28662375 L7.30051676,2.37561008 C7.68903594,1.9939504 8.31152975,1.99337347 8.70075571,2.37431234 L13.7186054,7.28532602 C14.113309,7.67162585 14.1201215,8.30475418 13.7338217,8.69945772 C13.5770575,8.85963222 13.3720343,8.96155914 13.1524072,8.99108548 L13,9 L13,13 C13,13.5522847 12.5522847,14 12,14 L4,14 Z M8.00129799,3.08898632 L3.002,8 L4,8 L4,13 L5.99901955,12.9999863 L6,10 L10,10 L9.99901955,12.9999863 L12,13 L12,8 L13.0191477,8 L8.00129799,3.08898632 Z M9,11 L7,11 L7,13 L9,13 L9,11 Z"/></svg>;
  },

});
