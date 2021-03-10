import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-logo-windows`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M495.11803008 539.80960832L832.2747264 541.09306304 832.2747264 896.2537344 494.89348288 820.308256 495.11803008 539.80960832ZM448 541.09306304L448 808.6050816 191.943232 746.2743168 192 541.09306304 448 541.09306304ZM448 226.28817408L448 496.35545408 192 498.40061312 192 280.9583872 448 226.28817408ZM831.9996416 129.56132032L831.9996416 494.3102944 494.89348288 492.95342592 494.89348288 211.11189952 831.9996416 129.56132032Z"/></svg>;
  },

});