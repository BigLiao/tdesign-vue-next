import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chevron-up`;

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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M509.24008704 256.163392L514.71568448 256.13496384C521.97472 256.74779712 529.06494656 259.82337344 534.628192 265.36222272L534.628192 265.36222272 910.3463808 640.4937536 865.091552 685.7485888 511.99872896 333.24849216 160.00556288 685.7485888 114.75072896 640.4937536 466.75072896 288.06449216 466.72826816 288.00732608 489.35568512 265.37990912C493.52487168 261.22251328 498.55406784 258.45003712 503.87029504 257.06270464L509.24008704 256.163392 509.24008704 256.163392Z"/></svg>;
  },

});
