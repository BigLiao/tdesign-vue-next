import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-delete`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M593.87140992 64C621.41895616 64 645.87584 81.62752576 654.5871424 107.76142272L675.9204736 171.76142272C678.1602048 178.48061504 679.2235008 185.30870336 679.2221056 192.02218816L896 192 896 256 832 256 832 832C832 867.3462208 803.3462208 896 768 896L256 896C220.653776 896 192 867.3462208 192 832L192 256 128 256 128 192 344.79525696 192 344.79525696 192C344.79525696 185.1211456 345.90424128 178.2872768 348.07952576 171.76142272L369.41285888 107.76142272C378.12415808 81.62752576 402.58104384 64 430.12859008 64L593.87140992 64ZM768 256L256 256 256 832 768 832 768 256ZM448 384L448 704 384 704 384 384 448 384ZM640 384L640 704 576 704 576 384 640 384ZM593.87140992 128L430.12859008 128 408.79525696 192 615.20474304 192 593.87140992 128Z"/></svg>;
  },

});
