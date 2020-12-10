import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-swap-left`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M367.49816832 290.2775232L412.75300224 335.53235712 172.25716416 575.9735232 960 576 960 640 96 640C79.30872768 640 65.60220416 627.22076992 64.13077376 610.91265216 64.11029568 610.1606912 64.04806848 609.43020736 64.01082048 608.69868864 64.00264192 608.47939328 64 608.24000512 64 608L63.96994912 607.28617024C63.912251136 599.02188288 67.03618368 590.73950784 73.3417472 584.43394432L367.49816832 290.2775232Z"/></svg>;
  },

});