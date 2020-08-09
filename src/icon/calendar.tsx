import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-calendar`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6,2 L6,3 L10,3 L10,2 L11,2 L11,3 L13,3 C13.5522847,3 14,3.44771525 14,4 L14,13 C14,13.5522847 13.5522847,14 13,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,4 C2,3.44771525 2.44771525,3 3,3 L5,3 L5,2 L6,2 Z M13,4 L3,4 L3,13 L13,13 L13,4 Z M12,5 L12,9 L8,9 L8,5 L12,5 Z M11,6 L9,6 L9,8 L11,8 L11,6 Z"/></svg>;
  },

});
