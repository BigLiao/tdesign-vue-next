import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-cloud-download`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M468.50289536 179.12714432C608.79153792 154.39047104 745.2460352 247.01926976 794.2539584 391.6582944L794.2539584 391.6582944 807.2647168 395.574496C896.038208 425.3438656 960 509.20239488 960 608 960 731.7117824 859.7117824 832 736.128 831.9688384L736.128 831.9688384 288 832C164.28821632 832 64 731.7117824 64 608 64 497.83116352 143.53262016 406.23816576 248.32945216 387.5465056 279.1437664 281.07169152 360.97337664 198.08749952 468.50289536 179.12714432ZM729.1151104 399.78404736C686.1123968 289.70146816 582.09134912 224.08573824 479.61637888 242.15484032 399.60371328 256.263232 334.87417408 318.72093696 309.80669696 405.3383104L309.80669696 405.3383104 298.74383296 443.56458304 259.5672 450.55216384 248.90208576 452.83288128C178.74574144 470.36751488 128 533.90822464 128 608 128 696.3655616 199.63444032 768 288 768L288 768 736.123552 767.9688384 746.6312256 767.6310528C829.9972864 762.2332352 896 692.81808 896 608 896 535.53089472 847.3794624 472.63577984 778.5740992 453.709552L778.5740992 453.709552 744.6580736 444.71774528 733.6389056 412.19644352ZM576 384L575.97949824 581.696 634.50966784 523.28828096 679.7644992 568.54311488 544 704.2705088 408.23549824 568.50600576 453.49033216 523.25117184 511.97949824 581.76 512 384 576 384Z"/></svg>;
  },

});
