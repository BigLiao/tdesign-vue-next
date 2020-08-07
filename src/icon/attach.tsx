import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-attach`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.17636011,2.58820454 C8.95639503,1.83397426 10.1970826,1.84440701 10.9643237,2.61164811 C11.6907332,3.3380576 11.7289653,4.49204572 11.07902,5.2634635 L10.9643237,5.38835189 L6.46597753,9.8866981 L5.75887075,9.17959132 L10.257217,4.68124511 C10.6334582,4.30500382 10.6334582,3.69499618 10.257217,3.31875489 C9.90519905,2.96673699 9.35266853,2.93524024 8.96480093,3.22733535 L8.87147583,3.3071024 L3.55754515,8.44668263 C2.79326446,9.23499116 2.81274287,10.4936134 3.6010514,11.2578941 C4.38712348,12.0200065 5.6159989,12.0489078 6.43562317,11.3511907 L6.56151232,11.2349874 L12.5530364,5.24346336 L13.2601432,5.95057015 L7.26861911,11.9420942 C6.06742971,13.1432836 4.12460407,13.1583163 2.90497114,11.9758581 C1.76753522,10.8730915 1.69505694,9.08557958 2.70738827,7.89608211 L2.83958117,7.75060238 L2.90785324,7.68242191 L8.17636011,2.58820454 Z"/></svg>;
  },

});
