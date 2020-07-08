import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-app`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13,8 C13.5522847,8 14,8.44771525 14,9 L14,13 C14,13.5522847 13.5522847,14 13,14 L9,14 C8.44771525,14 8,13.5522847 8,13 L8,9 C8,8.44771525 8.44771525,8 9,8 L13,8 Z M6,8 C6.55228475,8 7,8.44771525 7,9 L7,13 C7,13.5522847 6.55228475,14 6,14 L2,14 C1.44771525,14 1,13.5522847 1,13 L1,9 C1,8.44771525 1.44771525,8 2,8 L6,8 Z M13,9 L9,9 L9,13 L13,13 L13,9 Z M6,9 L2,9 L2,13 L6,13 L6,9 Z M11,1 C12.6568542,1 14,2.34314575 14,4 C14,5.65685425 12.6568542,7 11,7 C9.34314575,7 8,5.65685425 8,4 C8,2.34314575 9.34314575,1 11,1 Z M6,1 C6.55228475,1 7,1.44771525 7,2 L7,6 C7,6.55228475 6.55228475,7 6,7 L2,7 C1.44771525,7 1,6.55228475 1,6 L1,2 C1,1.44771525 1.44771525,1 2,1 L6,1 Z M11,2 C9.8954305,2 9,2.8954305 9,4 C9,5.1045695 9.8954305,6 11,6 C12.1045695,6 13,5.1045695 13,4 C13,2.8954305 12.1045695,2 11,2 Z M6,2 L2,2 L2,6 L6,6 L6,2 Z"/></svg>;
  },

});
