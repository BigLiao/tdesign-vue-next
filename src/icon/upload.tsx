import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-upload`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M896 896L192 896 192 704 256 704 255.937328 831.9609152 831.9373312 831.9609152 832 704 896 704 896 896ZM559.58821952 79.79216512L560.27266048 80.21198272 563.20206976 82.23448768 565.92213248 84.65193344 897.6297088 417.87732032 853.184352 462.3226784 575.937328 183.4489184 576 768 512 768 511.937328 181.2729184 234.68549824 464.49213888 191.873328 421.67996864 523.24472192 85.73560768 523.7966432 85.13860032 524.72661888 84.20301632 525.4449728 83.50824832C534.667008 74.15903808 548.9928608 72.90017728 559.58821952 79.79216512Z"/></svg>;
  },

});