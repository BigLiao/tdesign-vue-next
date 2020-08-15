import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-close`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.8902814,3.4 L12.5973882,4.10710678 L8.708,7.996 L12.5973882,11.8852814 L11.8902814,12.5923882 L8.001,8.703 L4.11210678,12.5923882 L3.405,11.8852814 L7.294,7.996 L3.405,4.10710678 L4.11210678,3.4 L8.001,7.289 L11.8902814,3.4 Z"/></svg>;
  },

});
