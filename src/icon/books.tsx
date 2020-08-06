import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-books`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2,3.75 C2,3.33578644 2.44771525,3 3,3 L11,3 C11.5522847,3 12,3.33578644 12,3.75 L12,5 L12.9090909,5 C13.5115834,5 14,5.44771525 14,6 L14,13 C14,13.5522847 13.5115834,14 12.9090909,14 L3.09090909,14 C2.48841664,14 2,13.5522847 2,13 L2,3.75 Z M4,6 L3,6 L3,13 L13,13 L13,6 L6,6 L6,9 L5,8 L4,9 L4,6 Z M11,4 L3,4 L2.99993749,5.00342754 C3.02993361,5.00115755 3.06027388,5 3.09090909,5 L11,5 L11,4 Z"/></svg>;
  },

});
