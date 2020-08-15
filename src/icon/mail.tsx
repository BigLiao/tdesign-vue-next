import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-mail`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14,3 C14.5522847,3 15,3.44771525 15,4 L15,12 C15,12.5522847 14.5522847,13 14,13 L2,13 C1.44771525,13 1,12.5522847 1,12 L1,4 C1,3.44771525 1.44771525,3 2,3 L14,3 Z M14,4 L13.634,4 L8.00190725,8.03562869 L2.294,4 L2,4 L2,12 L14,12 L14,4 Z M11.917,4 L4.027,4 L7.998,6.808 L11.917,4 Z"/></svg>;
  },

});
