import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-upload`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14,14 L3,14 L3,11 L4,11 L4,12.9999262 L13,12.9999262 L13,11 L14,11 L14,14 Z M8.57934269,1.19512658 C8.67268108,1.20414334 8.76423736,1.2442418 8.83663397,1.31565362 C8.84474638,1.32365568 8.85253339,1.33198106 8.85997607,1.34060954 L8.86039151,1.34109117 C8.8947404,1.38091267 8.92175739,1.42471575 8.94149629,1.47079678 L13.9664963,6.52079625 L13.2720375,7.21525497 L8.99910889,2.91692623 L9,12 L8,12 L7.99910889,2.87392623 L3.69304904,7.27263888 L3.02410889,6.60369873 L7.98724495,1.57020606 C7.99920725,1.51726748 8.01989797,1.46583163 8.0493836,1.41815696 L8.10021654,1.34974815 L8.1140613,1.33407715 C8.12055494,1.32672695 8.12728243,1.3195867 8.1342334,1.31266738 C8.25501404,1.19243689 8.42592858,1.15330808 8.57934269,1.19512658 Z"/></svg>;
  },

});
