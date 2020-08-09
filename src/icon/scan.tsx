import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-scan`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4,9.519 L4,12 L12,12 L12,9.519 L13,9.519 L13,12.1666667 C13,12.626904 12.626904,13 12.1666667,13 L3.83333333,13 C3.37309604,13 3,12.626904 3,12.1666667 L3,9.519 L4,9.519 Z M13,7.5 L13,8.5 L3,8.5 L3,7.5 L13,7.5 Z M12.1666667,3 C12.626904,3 13,3.37309604 13,3.83333333 L13,6.571 L12,6.571 L12,4 L4,4 L4,6.571 L3,6.571 L3,3.83333333 C3,3.37309604 3.37309604,3 3.83333333,3 L12.1666667,3 Z"/></svg>;
  },

});
