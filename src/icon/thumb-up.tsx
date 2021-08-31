import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-thumb-up`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M192 896C156.653776 896 128 867.3462208 128 832L128 512C128 476.653776 156.653776 448 192 448L320 448 373.71028672 179.44856704C379.69331648 149.53341888 405.95986432 128 436.4674496 128L551.50193792 128C583.7786272 128 611.00429184 152.03433216 615.00772224 184.06177728L632 320 831.9520768 320C867.298304 320 895.9520768 348.653776 895.9520768 384 895.9520768 387.93422592 895.589312 391.86007104 894.868384 395.72768L811.3606144 843.72768C805.712384 874.02912 779.2676736 896 748.4443072 896L192 896ZM319.936 512L192 512 192 832 320 832 320 832 319.936 512ZM551.50193792 192L436.4674496 192 384 454.08 384 832 748.4443072 832 831.9520768 384 575.50193792 384 551.50193792 192Z"/></svg>;
  },

});
