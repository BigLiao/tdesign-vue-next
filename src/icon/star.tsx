import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-star`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M357.056 335.04L137.98961792 366.90956544 130.70793408 368.37710208C83.632928 380.61891392 66.34368704 440.81078848 102.51996224 476.07394176L260.992 630.592 223.60994304 848.7505792 222.77614144 855.798112C219.61520704 904.5236992 271.65274432 939.7800768 316.47070784 916.2178752L512.384 813.184 708.3261184 916.2178752 714.7710592 919.1886784C760.1350592 937.251936 809.7463488 898.6561152 801.18688 848.7505792L763.712 630.528 922.276864 476.07394176 927.3052736 470.60661312C958.1941952 433.03278464 936.8015872 374.17417472 886.8072064 366.90956544L667.648 335.04 569.78952192 136.58273472C546.31344512 89.01500864 478.48337984 89.01500864 455.00730368 136.58273472L357.056 335.04ZM512.3984128 164.90694016L617.80772288 378.48953152C622.46890752 387.93412288 631.47900608 394.4803424 641.9017344 395.99485312L877.6041152 430.24441408 707.0482688 596.49527616C699.5063104 603.84686528 696.0647616 614.43887168 697.8451776 624.8194816L738.1079488 859.5694656 527.28932864 748.7355584C517.96696 743.834496 506.8298656 743.834496 497.50749696 748.7355584L286.68887552 859.5694656 326.95164992 624.8194816C328.732064 614.43887168 325.290512 603.84686528 317.74855744 596.49527616L147.1927104 430.24441408 382.89509376 395.99485312C393.31781888 394.4803424 402.32791808 387.93412288 406.98910208 378.48953152L512.3984128 164.90694016Z"/></svg>;
  },

});
