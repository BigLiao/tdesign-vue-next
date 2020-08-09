import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-delete`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.27924078,1 C9.70967119,1 10.09181,1.27543009 10.2279241,1.68377223 L10.5612574,2.68377223 C10.5962532,2.78875961 10.6128672,2.89544849 10.6128454,3.00034669 L14,3 L14,4 L13,4 L13,13 C13,13.5522847 12.5522847,14 12,14 L4,14 C3.44771525,14 3,13.5522847 3,13 L3,4 L2,4 L2,3 L5.38742589,3 L5.38742589,3 C5.38742589,2.8925179 5.40475377,2.7857387 5.43874259,2.68377223 L5.77207592,1.68377223 C5.90818997,1.27543009 6.29032881,1 6.72075922,1 L9.27924078,1 Z M12,4 L4,4 L4,13 L12,13 L12,4 Z M7,6 L7,11 L6,11 L6,6 L7,6 Z M10,6 L10,11 L9,11 L9,6 L10,6 Z M9.27924078,2 L6.72075922,2 L6.38742589,3 L9.61257411,3 L9.27924078,2 Z"/></svg>;
  },

});
