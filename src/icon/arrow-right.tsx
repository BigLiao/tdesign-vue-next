import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-arrow-right`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M607.16167744 115.54204096L561.9068435199999 160.79687488 850.130208 447.95804096 64.19200000000001 448 64.19200000000001 512 851.218208 511.95804096 562.8082112 799.9843776 608.06304512 845.2392064 950.6120768000001 503.23153728 954.33585472 498.79037248C960.8499056 489.41276032 961.763021824 477.3222624 957.07687872 467.17751616L957.07687872 467.17751616C955.33644096 463.51891584 953.1747936 460.3675616 950.39774016 457.60003968L950.39774016 457.60003968 607.16167744 115.54204096Z"/></svg>;
  },

});
