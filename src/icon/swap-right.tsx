import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-swap-right`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M656.50183168 290.2775232L611.24699776 335.53235712 851.74283584 575.9735232 64 576 64 640 928 640C944.69127232 640 958.39779584 627.22076992 959.86922624 610.91265216 959.88970432 610.1606912 959.95193152 609.43020736 959.98917952 608.69868864 959.99735808 608.47939328 960 608.24000512 960 608L960.03005088 607.28617024C960.087748864 599.02188288 956.96381632 590.73950784 950.6582528 584.43394432L656.50183168 290.2775232Z"/></svg>;
  },

});
