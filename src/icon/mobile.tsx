import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-mobile`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M768 64C803.3462208 64 832 92.653776 832 128L832 896C832 931.3462208 803.3462208 960 768 960L256 960C220.653776 960 192 931.3462208 192 896L192 128C192 92.653776 220.653776 64 256 64L768 64ZM768 128L256 128 256 896 768 896 768 128ZM512 739.3395136C547.346224 739.3395136 576 767.9932928 576 803.3395136 576 838.6857408 547.346224 867.3395136 512 867.3395136 476.653776 867.3395136 448 838.6857408 448 803.3395136 448 767.9932928 476.653776 739.3395136 512 739.3395136Z"/></svg>;
  },

});
