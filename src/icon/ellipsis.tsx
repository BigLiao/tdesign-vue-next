import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-ellipsis`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3,7 C3.55228475,7 4,7.44771525 4,8 C4,8.55228475 3.55228475,9 3,9 C2.44771525,9 2,8.55228475 2,8 C2,7.44771525 2.44771525,7 3,7 Z M8,7 C8.55228475,7 9,7.44771525 9,8 C9,8.55228475 8.55228475,9 8,9 C7.44771525,9 7,8.55228475 7,8 C7,7.44771525 7.44771525,7 8,7 Z M13,7 C13.5522847,7 14,7.44771525 14,8 C14,8.55228475 13.5522847,9 13,9 C12.4477153,9 12,8.55228475 12,8 C12,7.44771525 12.4477153,7 13,7 Z"/></svg>;
  },

});
