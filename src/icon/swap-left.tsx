import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-swap-left`;

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
      return [`${prefix}-icon`, name, CLASSNAMES.SIZE[this.size]];
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
    return (
      <svg
        onClick={this.handleClick}
        class={this.classes}
        style={this.iconStyle}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-opacity=".9"
          fill-rule="evenodd"
          d="M367.49816832 290.2775232L412.75300224 335.53235712 172.25716416 575.9735232 960 576 960 640 96 640C79.30872768 640 65.60220416 627.22076992 64.13077376 610.91265216 64.11029568 610.1606912 64.04806848 609.43020736 64.01082048 608.69868864 64.00264192 608.47939328 64 608.24000512 64 608L63.96994912 607.28617024C63.912251136 599.02188288 67.03618368 590.73950784 73.3417472 584.43394432L367.49816832 290.2775232Z"
        />
      </svg>
    );
  },
});
