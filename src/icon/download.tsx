import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-download`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M896 896L192 896 192 704 256 704 255.937328 831.9609152 831.9373312 831.9609152 832 704 896 704 896 896ZM576 75.4169184L575.937328 659.968 853.184352 381.09423936 897.6297088 425.53959744 565.92213248 758.7649856 563.20206976 761.182432 560.27266048 763.2049344 559.58821952 763.6247552C550.50648384 769.5321728 538.68397632 769.4512128 529.68399616 763.419968L525.4449728 759.908672 524.72661888 759.2139008 524.54518144 759.0378112 524.36488768 758.8598464 523.24472192 757.681312 191.873328 421.73694912 234.68549824 378.92477952 511.937328 662.144 512 75.4169184 576 75.4169184Z"/></svg>;
  },

});