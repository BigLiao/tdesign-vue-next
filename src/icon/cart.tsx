import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-cart`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13,2 C13.5522847,2 14,2.44771525 14,3 L14,13 C14,13.5522847 13.5522847,14 13,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,3 C2,2.44771525 2.44771525,2 3,2 L13,2 Z M13,3 L11.999,3 L11.9951047,3.19964034 C11.8943297,5.2498943 10.2498943,6.89432968 8.19964034,6.99510469 L8,7 C5.790861,7 4,5.209139 4,3 L3.999,3 L3,3 L3,13 L13,13 L13,3 Z M10.999,3 L4.999,3 L5.00509269,3.17627279 C5.09295962,4.69275384 6.30724616,5.90704038 7.82372721,5.99490731 L8,6 C9.65685425,6 11,4.65685425 11,3 L10.999,3 Z"/></svg>;
  },

});
