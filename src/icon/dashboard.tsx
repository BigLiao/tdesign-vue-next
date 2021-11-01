import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-dashboard`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M512 224C598.05888 224 678.8288 246.64768 748.672 286.30848L701.44 333.5392C644.6208 304.42624 580.22976 288 512 288 287.24416 288 104.1184 466.24 96.2624 689.0816L96 704H32C32 438.90304 246.90304 224 512 224ZM928 704C928 635.77024 911.5712 571.37664 882.4576 514.55872L929.6896 467.32736C966.9568 532.9536 989.2032 608.224 991.7504 688.4672L992 704H928ZM941.92 319.33376L896.6656 274.07936 489.3728 681.3696 534.6272 726.6304 941.92 319.33376Z" clip-rule="evenodd" opacity=".9"/></svg>;
  },

});