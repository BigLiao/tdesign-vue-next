import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-gift`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3,14 C2.44771525,14 2,13.5522847 2,13 L2,8 C1.44771525,8 1,7.55228475 1,7 L1,5 C1,4.44771525 1.44771525,4 2,4 L5.085,3.99912627 L3.81801948,2.73223305 L4.52512627,2.02512627 L6.499,3.99912627 L8.292,3.99912627 L10.2071068,2.08578644 L10.9142136,2.79289322 L9.707,3.99912627 L13,4 C13.5522847,4 14,4.44771525 14,5 L14,7 C14,7.55228475 13.5522847,8 13,8 L13,13 C13,13.5522847 12.5522847,14 12,14 L3,14 Z M3,13 L7,12.9991263 L7,7.99912627 L3,8 L3,13 Z M12,8 L8,7.99912627 L8,12.9991263 L12,13 L12,8 Z M7,4.99912627 L2,5 L2,7 L7,6.99912627 L7,4.99912627 Z M13,5 L8,4.99912627 L8,6.99912627 L13,7 L13,5 Z"/></svg>;
  },

});
