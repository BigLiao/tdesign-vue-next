import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-home`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M256 896C220.653776 896 192 867.3462208 192 832L192 576C156.7830272 576 128.1292512 547.346224 128.1292512 512 128.1292512 494.82854144 135.02954176 478.37735616 147.27925248 466.34392L467.23307264 152.03904512C492.09830016 127.6128256 531.937904 127.57590208 556.84836544 151.95598976L877.9907456 466.26086528C903.251776 490.9840544 903.687776 531.50426752 878.9645888 556.76529408 868.93168 567.01646208 855.8101952 573.53978496 841.7540608 575.42947072L832 576 832 832C832 867.3462208 803.3462208 896 768 896L256 896ZM512.08307136 197.69512448L192.128 512 256 512 256 832 383.9372512 831.9991232 384 640 640 640 639.9372512 831.9991232 768 832 768 512 833.2254528 512 512.08307136 197.69512448ZM576 704L448 704 448 832 576 832 576 704Z"/></svg>;
  },

});
