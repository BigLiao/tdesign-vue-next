import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-qrcode`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.50405853,12.01317 L8.50405853,14.01317 L7.50405853,14.01317 L7.50405853,12.01317 L8.50405853,12.01317 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,11 C2,10.4477153 2.44771525,10 3,10 L5,10 Z M13,10 C13.5522847,10 14,10.4477153 14,11 L14,13 C14,13.5522847 13.5522847,14 13,14 L11,14 C10.4477153,14 10,13.5522847 10,13 L10,11 C10,10.4477153 10.4477153,10 11,10 L13,10 Z M5,11 L3,11 L3,13 L5,13 L5,11 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z M8.50405853,10 L8.50405853,11 L7.50405853,11 L7.50405853,10 L8.50405853,10 Z M8,2 C8.55228475,2 9,2.44771525 9,3 L9,8 C9,8.55228475 8.55228475,9 8,9 L3,9 C2.44771525,9 2,8.55228475 2,8 L2,3 C2,2.44771525 2.44771525,2 3,2 L8,2 Z M11,7.48072998 L11,8.48072998 L10,8.48072998 L10,7.48072998 L11,7.48072998 Z M14,7.48072998 L14,8.48072998 L12,8.48072998 L12,7.48072998 L14,7.48072998 Z M8,3 L3,3 L3,8 L8,8 L8,3 Z M7,4 L7,7 L4,7 L4,4 L7,4 Z M13,2 C13.5522847,2 14,2.44771525 14,3 L14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 L10,3 C10,2.44771525 10.4477153,2 11,2 L13,2 Z M13,3 L11,3 L11,5 L13,5 L13,3 Z"/></svg>;
  },

});
