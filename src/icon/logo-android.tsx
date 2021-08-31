import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-logo-android`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

  emits: ['click'],

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

  methods: {
    handleClick(e: MouseEvent) {
      this.$emit('click', { e });
    },
  },

  render() {
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M851.4600128 256L896.7148416 301.25483392 819.6567232 378.34320192C906.0757184 460.01440128 960 575.70985536 960 704 960 725.7517696 958.4498048 747.1414656 955.4538624 768.0646464L68.54613824 768.0646464C65.55019712 747.1414656 64 725.7517696 64 704 64 575.58178944 118.03199424 459.7834272 204.6021792 378.09871808L127.81840832 301.25483392 173.07324224 256 254.4436448 337.390608C327.30189248 286.11076544 416.13457344 256 512 256 608.00549888 256 696.9576832 286.19882112 769.8756224 337.61552384L851.4600128 256ZM512 320C304.74259584 320 135.83540736 484.19679296 128.26486208 689.6039488L128 704.064 896 704.064C896 496.74259584 731.8032064 327.83540736 526.39604864 320.26486208L512 320ZM656 512.22055104C682.5096704 512.22055104 704 533.7108832 704 560.22055104 704 586.73021952 682.5096704 608.22055104 656 608.22055104 629.49033216 608.22055104 608 586.73021952 608 560.22055104 608 533.7108832 629.49033216 512.22055104 656 512.22055104ZM368 512C394.50966784 512 416 533.49033216 416 560 416 586.50966784 394.50966784 608 368 608 341.49033216 608 320 586.50966784 320 560 320 533.49033216 341.49033216 512 368 512Z"/></svg>;
  },

});
