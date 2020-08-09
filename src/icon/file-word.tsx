import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file-word`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.58578644,0.999970205 C8.05728243,0.999970205 8.51161285,1.16648357 8.87017982,1.46691212 L9.00000001,1.58578644 L11.4142136,4 C11.7517791,4.33756548 11.9562137,4.47562772 11.993725,4.86156135 L12,5 L12,8 L12,8 L12,7 L11,7 L11,8 L10.999,7.99997021 L10.999,5.99997021 L7,6 L7,2 L3.00000001,2 L3.00000001,13 L6,13 L6,14 L3.00000001,14 C2.6925724,14 2.08789855,13.7964904 2.00864171,13.146261 L2.00000001,13 L2.00000001,2 C2.00000001,1.67705027 2.2151901,1.08580297 2.85607506,1.00840533 L3.00000001,0.999970205 L7.58578644,0.999970205 Z M11.9403308,8 L13,8.00411987 L11.6084161,14 L10.5542161,14 L9.5094035,9.55946219 L8.44581608,14 L7.39161607,14 L6,8.00411987 L7.04618927,8 L7.91861569,11.6018622 L8.7643474,8 L10.221851,8.00411987 L11.0812157,11.6018622 L11.9403308,8 Z M8.00000001,2 L8,5 L11,5 L8.00000001,2 Z"/></svg>;
  },

});
