import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-file-powerpoint`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M767.936 512L767.936 384 512 384.00190656 512 128.00190656 256 128.00190656 256 832.0019072 448 832.0019072 448 896.0019072 256 896.0019072C236.3246336 896.0019072 197.62550656 882.9772928 192.55306944 841.3626112L192 832.0019072 192 128.00190656C192 107.33312384 205.77216576 69.49329664 246.78880384 64.53984768L256 64 549.49033216 64C579.66607488 64 608.7432224 74.65685504 631.69150784 93.88428288L640 101.49223872 794.5096704 256.00190656C816.113856 277.60609792 829.1976768 286.44208128 831.5983936 311.1418336L832 320.00190656 832 512.00190656 832 512.00190656 832 448.00190656 768 448.00190656 768 512.00190656C803.3462208 512.00190656 832 540.6556832 832 576.00190656L832 704.0019072C832 739.348128 803.3462208 768.0019072 768 768.0019072L575.99999936 768.0019072 575.99999936 896.0019072 511.99999936 896.0019072 511.99999936 576.00190656C511.99999936 540.6556832 540.65377536 512.00190656 575.99999936 512.00190656L767.936 512ZM768 576.00190656L575.99999936 576.00190656 575.99999936 704.0019072 768 704.0019072 768 576.00190656ZM576 128.00190656L576 320.00190656 768 320.00190656 576 128.00190656Z"/></svg>;
  },

});
