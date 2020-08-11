import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.78976352,2.99985674 L2.99999988,2.99985674 C2.21968563,2.99985674 1.99999988,3.5776613 1.99999988,3.83320201 L1.99999988,12.1666547 C1.99999988,12.8113256 2.69088911,13 2.99999988,13 L12.9999999,13 C13.5334823,12.9967457 13.9962451,12.5376318 13.9999999,12.1666547 L13.9999999,5.49989256 C13.9999999,5.29497458 13.7236647,4.66654728 12.9999999,4.66654728 L9.41421345,4.66654728 L7.62365993,3.2022122 C7.35168039,2.97609947 7.12014591,2.99985674 6.78976352,2.99985674 Z M6.99537647,4 L9.00417863,5.6 L12.9999999,5.6 L12.9999999,12 L2.99999988,12 L2.99999988,4 L6.99537647,4 Z"/></svg>;
  },

});
