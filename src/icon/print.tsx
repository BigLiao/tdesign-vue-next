import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-print`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13,3 C13.5522847,3 14,3.44771525 14,4 L14,10 C14,10.5522847 13.5522847,11 13,11 L12,11 L12,13 C12,13.5522847 11.5522847,14 11,14 L5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 L3,11 C2.44771525,11 2,10.5522847 2,10 L2,4 C2,3.44771525 2.44771525,3 3,3 L13,3 Z M5,13 L11,13 L11,8 L5,8 L5,13 Z M13,4 L3,4 L3,10 L4,10 L4,8 C4,7.44771525 4.44771525,7 5,7 L11,7 C11.5522847,7 12,7.44771525 12,8 L12,10 L13,10 L13,4 Z M12,5 L12,6 L9,6 L9,5 L12,5 Z M13,1 L13,2 L3,2 L3,1 L13,1 Z"/></svg>;
  },

});
