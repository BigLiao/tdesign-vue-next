import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-thumb-down`;

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
          d="M192 576C156.653776 576 128 547.346224 128 512L128 192C128 156.653776 156.653776 128 192 128L748.4443072 128C779.2676736 128 805.712384 149.97087872 811.3606144 180.27232L811.3606144 180.27232 894.868384 628.27232C895.589312 632.13992896 895.9520768 636.06577408 895.9520768 640 895.9520768 675.3462208 867.298304 704 831.9520768 704L831.9520768 704 632 704 615.00772224 839.9382208C611.00429184 871.9656704 583.7786272 896 551.50193792 896L551.50193792 896 436.4674496 896C405.95986432 896 379.69331648 874.4665792 373.71028672 844.5514304L373.71028672 844.5514304 320 576 192 576ZM748.4443072 192L384 192 384 570.176 436.4674496 832 551.50193792 832 575.50193792 640 831.9520768 640 748.4443072 192ZM320 192L192 192 192 512 319.936 512 320 192 320 192Z"
        />
      </svg>
    );
  },
});
