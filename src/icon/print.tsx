import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-print`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 192C867.3462208 192 896 220.653776 896 256L896 640C896 675.3462208 867.3462208 704 832 704L768 704 768 832C768 867.3462208 739.3462208 896 704 896L320 896C284.653776 896 256 867.3462208 256 832L256 704 192 704C156.653776 704 128 675.3462208 128 640L128 256C128 220.653776 156.653776 192 192 192L832 192ZM320 832L704 832 704 512 320 512 320 832ZM832 256L192 256 192 640 256 640 256 512C256 476.653776 284.653776 448 320 448L704 448C739.3462208 448 768 476.653776 768 512L768 640 832 640 832 256ZM768 320L768 384 576 384 576 320 768 320ZM832 64L832 128 192 128 192 64 832 64Z"/></svg>;
  },

});
