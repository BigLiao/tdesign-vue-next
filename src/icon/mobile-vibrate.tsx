import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-mobile-vibrate`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11,2 C11.5522847,2 12,2.44771525 12,3 L12,13 C12,13.5522847 11.5522847,14 11,14 L5,14 C4.44771525,14 4,13.5522847 4,13 L4,3 C4,2.44771525 4.44771525,2 5,2 L11,2 Z M11,3 L5,3 L5,13 L11,13 L11,3 Z M8,10.5521799 C8.55228475,10.5521799 9,10.9998952 9,11.5521799 C9,12.1044647 8.55228475,12.5521799 8,12.5521799 C7.44771525,12.5521799 7,12.1044647 7,11.5521799 C7,10.9998952 7.44771525,10.5521799 8,10.5521799 Z M14,4 L14,12 L13,12 L13,4 L14,4 Z M3,4 L3,12 L2,12 L2,4 L3,4 Z"/></svg>;
  },

});
