import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-usb`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

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

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M768 128C803.3462208 128 832 156.653776 832 192L832 640C867.3462208 640 896 668.6537792 896 704L896 832C896 867.3462208 867.3462208 896 832 896L192 896C156.653776 896 128 867.3462208 128 832L128 704C128 668.6537792 156.653776 640 192 640L192 192C192 156.653776 220.653776 128 256 128L768 128ZM832 704L192 704 192 832 832 832 832 704ZM768 192L256 192 256 640 768 640 768 192ZM671.8543424 320.35870144L671.8543424 448.35870144 543.85434304 448.35870144 543.85434304 320.35870144 671.8543424 320.35870144ZM481.4863392 320L481.4863392 448 353.4863392 448 353.4863392 320 481.4863392 320Z"/></svg>;
  },

});
