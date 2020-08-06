import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-arrow-up`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.95687636,4.002553 L8.04243257,4.00210881 C8.155855,4.01168433 8.26663979,4.05974021 8.3535655,4.14628473 L8.3535655,4.14628473 L14.2241622,10.0077149 L13.5170555,10.7148217 L7.99998014,5.20700769 L2.50008692,10.7148217 L1.79298014,10.0077149 L7.29298014,4.50100769 L7.29262919,4.50011447 L7.64618258,4.14656108 C7.71132612,4.08160177 7.78990731,4.03828183 7.87297336,4.01660476 L7.95687636,4.002553 L7.95687636,4.002553 Z"/></svg>;
  },

});
