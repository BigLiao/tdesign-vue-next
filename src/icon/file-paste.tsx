import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file-paste`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.03377343,2 C9.29640112,2 9.54848738,2.10331563 9.73557588,2.28762838 L12.7018025,5.20984626 C12.8925807,5.39779402 13,5.65441065 13,5.92221787 L13,13 C13,13.5522847 12.5522847,14 12,14 L4,14 C3.44771525,14 3,13.5522847 3,13 L3,3 C3,2.44771525 3.44771525,2 4,2 L9.03377343,2 Z M8,3 L4,3 L4,13 L12,13 L12,7 L8,7 L8,3 Z M11,11 L11,12 L5,12 L5,11 L11,11 Z M9.00195064,3 L9,3 L9,6 L12,6 L9.00195064,3 Z"/></svg>;
  },

});
