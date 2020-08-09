import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-loading`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.5,8 C1.5,4.410375 4.410375,1.5 8,1.5 C11.589625,1.5 14.5,4.410375 14.5,8 L12.875,8 L12.875,8 C12.875,5.30761184 10.6923882,3.125 8,3.125 C5.30761184,3.125 3.125,5.30761184 3.125,8 C3.125,10.6923882 5.30761184,12.875 8,12.875 L8,14.5 C4.410375,14.5 1.5,11.589625 1.5,8 Z"/></svg>;
  },

});
