import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-service`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 126.32552064C651.1723008 126.32552064 764.4061184 244.32235776 767.916128 391.29412544 802.7266688 407.56353472 828.3817088 449.9965344 831.6476672 500.95602816L832 512 832 576C832 633.01904 804.0380864 681.330272 765.4001024 697.8859136 751.6915712 809.4077504 650.1954624 896 527.03002304 896 521.57021504 896 516.15298944 895.8298432 510.78410048 895.4948928L510.76873088 831.3559104C516.12504064 831.7822336 521.54892224 832 527.03002304 832 616.8450176 832 691.2960192 773.5279296 704.8327488 697.072928 669.4413248 680.8599616 643.4529472 637.98641664 640.31824 586.4979904L640 576 640 512C640 456.35401792 666.6314432 409.00151168 703.827424 391.36502144L704 398.32552064C704 281.48661376 618.038672 186.76996544 512 186.76996544 408.05355328 186.76996544 323.39998336 277.78582144 320.09988928 391.43594816 354.88397888 407.83047424 380.40186432 450.17273664 383.64965312 500.98775168L384 512 384 576C384 646.692448 341.01933568 704 288 704 237.63163072 704 196.32316288 652.279936 192.31823744 586.4979904L192 576 192 512C192 456.19187968 218.786864 408.7256352 256.15283264 391.21161344L256 398.32552064C256 248.10406912 370.615104 126.32552064 512 126.32552064ZM288.192 447.98952064C271.71925888 448.19234176 258.39632064 472.2184544 256.29022528 503.34689664L256 512 256 576C256 611.346224 270.32688832 640 288 640 304.20035264 640 317.58894784 615.92286848 319.70787776 584.68442112L320 576 320 512C320 476.653776 305.67311168 448 288 448L288.192 447.98952064ZM736.128 447.98952064C719.7124864 448.19522688 706.3956352 472.22056512 704.2901568 503.34736448L704 512 704 576C704 610.86263168 717.9375424 639.21468864 735.2765184 639.98396544L736.704 639.86152064 740.342208 639.41575552C754.541504 635.5631552 765.7815808 613.08300992 767.7078784 584.68442112L768 576 768 512C768 476.653776 753.6731136 448 736 448L736.128 447.98952064Z"/></svg>;
  },

});
