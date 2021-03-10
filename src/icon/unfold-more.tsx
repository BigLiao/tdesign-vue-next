import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-unfold-more`;

export default Vue.extend({
  name,

  props: {
    // small/medium/large/xl/18px/2em
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
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M740.1318848 591.72563456L785.38672 636.98046848 537.29844096 886.6956096C527.56954752 896.4883008 513.063296 898.647712 501.22783168 893.1495104 497.73934848 891.6590272 494.47161024 889.489056 491.6018464 886.6683712L491.6018464 886.6683712 240.3567872 639.71997056 285.61162112 594.46513664 514.17210624 819.0885632 740.1318848 591.72563456ZM502.05641792 130.47991424C513.73431168 125.45667264 527.79542528 127.73906112 537.29844096 137.3043936L537.29844096 137.3043936 785.38672 387.01953152 740.1318848 432.27436544 514.17210624 204.81656256 285.61162112 429.53486336 240.3567872 384.28002944 491.6018464 137.33163008C494.3856896 134.5953952 497.544032 132.47149504 500.90926016 130.95920704Z"/></svg>;
  },

});