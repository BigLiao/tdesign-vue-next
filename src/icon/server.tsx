import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-server`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M896 576C931.3462208 576 960 604.653776 960 640L960 768C960 803.3462208 931.3462208 832 896 832L128 832C92.653776 832 64 803.3462208 64 768L64 640C64 604.653776 92.653776 576 128 576L896 576ZM128 640L128 768 640 768 640 640 128 640ZM896 192C931.3462208 192 960 220.653776 960 256L960 384C960 419.346224 931.3462208 448 896 448L128 448C92.653776 448 64 419.346224 64 384L64 256C64 220.653776 92.653776 192 128 192L896 192ZM320 256L128 256 128 384 320 384 320 256ZM896 256L384 256 384 384 896 384 896 256ZM896 768L896 640 704 640 704 768 896 768Z"/></svg>;
  },

});
