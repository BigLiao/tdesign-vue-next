import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-secured`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M768.6804864 127.74031488C801.5019776 127.74031488 828.5529408 152.44688704 832.2499072 184.27656256L832.6804864 191.74031488 832.6804864 522.2274944C832.6804864 659.2476864 735.8699008 778.8064768 542.24872832 880.9038592 525.90195712 889.5235968 506.75509824 890.6010624 489.70830592 884.136256L482.54539968 880.9038592 462.86102528 870.27968C288.80928704 774.1023296 198.67535104 662.7890048 192.45921792 536.33970432L192.11387712 522.2274944 192.11387712 191.74031488C192.11387712 158.91882112 216.82044928 131.86785664 248.6501248 128.1708896L256.11387712 127.74031488 768.6804864 127.74031488ZM768.6804864 191.74031488L256.11387712 191.74031488 256.11387712 522.2274944C256.11387712 623.5978176 326.2265696 717.4838848 475.66336448 804.0083648L493.25862592 813.959296 512.39702016 824.292192 530.76187776 814.3877952C686.8424576 728.2650688 762.9447744 634.74225792 768.3678784 533.8960864L768.6804864 522.2274944 768.6804864 191.74031488ZM496.59134592 638.37202176L339.9132192 481.85729664 385.16805312 436.60246272 496.56187712 547.83631488 677.6106816 366.8430176 722.8655168 412.09785152 496.59134592 638.37202176Z"/></svg>;
  },

});
