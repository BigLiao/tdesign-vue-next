import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-enter`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.67906615,11 L5.32849328,12.6496811 L4.6213865,13.3567879 L2.14651276,10.8819141 C2.03700066,10.772402 1.98890804,10.6247288 2.00223491,10.4816994 C1.99158196,10.3676464 2.02023159,10.2503381 2.08818153,10.1519129 L2.14651276,10.0819805 L4.6213865,7.60710678 L5.32849328,8.31421356 L3.64106615,10 L12.5,10 C12.7454599,10 12.9496084,9.82312484 12.9919443,9.58987563 L13,9.5 L13,4 L14,4 L14,10 C14,10.5522847 13.5522847,11 13,11 L3.67906615,11 Z"/></svg>;
  },

});
