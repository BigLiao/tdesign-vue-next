import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-star-filled`;

export default Vue.extend({
  name,

  props: {
    // xs/small/medium/large/xl/18px/2em
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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M357.056 335.04L137.98961792 366.90956544 130.70793408 368.37710208C83.632928 380.61891392 66.34368704 440.81078848 102.51996224 476.07394176L260.992 630.592 223.60994304 848.7505792 222.77614144 855.798112C219.61520704 904.5236992 271.65274432 939.7800768 316.47070784 916.2178752L512.384 813.184 708.3261184 916.2178752 714.7710592 919.1886784C760.1350592 937.251936 809.7463488 898.6561152 801.18688 848.7505792L763.712 630.528 922.276864 476.07394176 927.3052736 470.60661312C958.1941952 433.03278464 936.8015872 374.17417472 886.8072064 366.90956544L667.648 335.04 569.78952192 136.58273472C546.31344512 89.01500864 478.48337984 89.01500864 455.00730368 136.58273472L357.056 335.04Z"/></svg>;
  },

});