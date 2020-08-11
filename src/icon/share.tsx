import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-share`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13,2 C13.5522847,2 14,2.44771525 14,3 L14,6 C14,6.55228475 13.5522847,7 13,7 L10,7 C9.44771525,7 9,6.55228475 9,6 L9,5.706 L8.14644661,6.56066017 C8.10305502,6.60405176 8.05367231,6.63780077 8.00096118,6.66190721 L8.00096118,9.33809279 C8.05367231,9.36219923 8.10305502,9.39594824 8.14644661,9.43933983 L9,10.293 L9,10 C9,9.44771525 9.44771525,9 10,9 L13,9 C13.5522847,9 14,9.44771525 14,10 L14,13 C14,13.5522847 13.5522847,14 13,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9.00001533,11.6623525 C8.94693759,11.6382171 8.89721283,11.6043196 8.85355339,11.5606602 L7.83827992,10.5454532 C7.65985268,10.8191093 7.35105098,11 7,11 L3,11 C2.44771525,11 2,10.5522847 2,10 L2,6 C2,5.44771525 2.44771525,5 3,5 L7,5 C7.35105098,5 7.65985268,5.18089067 7.83827992,5.45454682 L8.85355339,4.43933983 C8.89721283,4.39568039 8.94693759,4.36178294 9.00001533,4.33764748 L9,3 C9,2.44771525 9.44771525,2 10,2 L13,2 Z M13,10 L10,10 L10,13 L13,13 L13,10 Z M7,6 L3,6 L3,10 L7,10 L7,6 Z M13,3 L10,3 L10,6 L13,6 L13,3 Z"/></svg>;
  },

});
