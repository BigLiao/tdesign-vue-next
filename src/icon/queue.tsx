import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-queue`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11,4 C11.5522847,4 12,4.44771525 12,5 L12,13 C12,13.5522847 11.5522847,14 11,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,5 C2,4.44771525 2.44771525,4 3,4 L11,4 Z M11,5 L3,5 L3,13 L11,13 L11,5 Z M14,13 L13,13 L13,3 L3,3 L3,2 L13,2 C13.5522847,2 14,2.44771525 14,3 L14,13 Z M9,9 L9,10 L5,10 L5,9 L9,9 Z"/></svg>;
  },

});
