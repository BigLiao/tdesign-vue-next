import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-scan`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M256 609.216L256 768 768 768 768 609.216 832 609.216 832 778.6666688C832 808.121856 808.121856 832 778.6666688 832L245.33333312 832C215.87814656 832 192 808.121856 192 778.6666688L192 609.216 256 609.216ZM832 480L832 544 192 544 192 480 832 480ZM778.6666688 192C808.121856 192 832 215.87814656 832 245.33333312L832 420.544 768 420.544 768 256 256 256 256 420.544 192 420.544 192 245.33333312C192 215.87814656 215.87814656 192 245.33333312 192L778.6666688 192Z"/></svg>;
  },

});
