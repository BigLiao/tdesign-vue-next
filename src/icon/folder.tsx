import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-folder`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    classes(): ClassName {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): Record<string, any> {
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M370.54486528 191.99083136L191.99999232 191.99083136C142.05988032 191.99083136 127.99999232 228.9703232 127.99999232 245.32492864L127.99999232 778.6659008C127.99999232 819.9248384 172.21690304 832 191.99999232 832L767.9999936 832C802.1428672 831.7917248 831.7596864 802.4084352 831.9999936 778.6659008L831.9999936 351.99312384C831.9999936 338.87837312 814.3145408 298.65902592 767.9999936 298.65902592L538.5096608 298.65902592 423.91423552 204.9415808C406.50754496 190.47036608 391.68933824 191.99083136 370.54486528 191.99083136ZM383.70409408 256L512.26743232 358.4 767.9999936 358.4 767.9999936 768 191.99999232 768 191.99999232 256 383.70409408 256Z"/></svg>;
  },

});
