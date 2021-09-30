import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-control-platform`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M582.32658048 127.91995584L644.1458304 144.48437504 445.3728064 886.3154112 383.55355392 869.7509888 582.32658048 127.91995584ZM751.9765632 238.60743936L937.1946176 450.51445824C966.5849088 484.13974144 968.67616 533.17379968 943.3876992 568.997456L937.5496384 576.46132416 752.0949056 791.068896 703.67072 749.2227712C836.840224 599.94243008 901.1253312 521.42316608 896.5260416 513.66497984L703.789056 280.72589376 751.9765632 238.60743936ZM247.8902304 239.23559808L299.1055264 277.61519488 128.77083328 512C125.29200256 519.09518592 182.0702336 598.33344128 299.1055264 749.7147648L299.1055264 749.7147648 247.8902304 788.0943616 85.38020864 571.23437504 79.93347072 563.1451648C59.962098496 529.97418112 61.77767776 487.59176128 85.38020864 456.095584L85.38020864 456.095584 247.8902304 239.23559808Z"/></svg>;
  },

});