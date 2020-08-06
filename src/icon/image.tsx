import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-image`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13,2 C13.5522847,2 14,2.44771525 14,3 L14,13 C14,13.5522847 13.5522847,14 13,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,3 C2,2.44771525 2.44771525,2 3,2 L13,2 Z M13,3 L3,3 L3,13 L4.646,13 L9.67594986,7.97074966 L10.084,8.379 L10.0857864,8.37867966 L13,11.293 L13,3 Z M9.677,9.384 L6.06,13 L13,13 L13,12.707 L9.677,9.384 Z M6,4 C7.1045695,4 8,4.8954305 8,6 C8,7.1045695 7.1045695,8 6,8 C4.8954305,8 4,7.1045695 4,6 C4,4.8954305 4.8954305,4 6,4 Z M6,5 C5.44771525,5 5,5.44771525 5,6 C5,6.55228475 5.44771525,7 6,7 C6.55228475,7 7,6.55228475 7,6 C7,5.44771525 6.55228475,5 6,5 Z"/></svg>;
  },

});
