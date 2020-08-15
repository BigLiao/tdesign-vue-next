import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-setting`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,1.43045618 L14,4.70318345 L14,11.2968165 L8,14.5695438 L2,11.2968165 L2,4.70318345 L8,1.43045618 Z M8,2.569 L3,5.296 L3,10.703 L8,13.43 L13,10.703 L13,5.296 L8,2.569 Z M8,5 C9.65685425,5 11,6.34314575 11,8 C11,9.65685425 9.65685425,11 8,11 C6.34314575,11 5,9.65685425 5,8 C5,6.34314575 6.34314575,5 8,5 Z M8,6 C6.8954305,6 6,6.8954305 6,8 C6,9.1045695 6.8954305,10 8,10 C9.1045695,10 10,9.1045695 10,8 C10,6.8954305 9.1045695,6 8,6 Z"/></svg>;
  },

});
