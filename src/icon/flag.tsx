import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-flag`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M248.52424384 75.4425344L807.830048 344.47687744C830.126688 355.20273664 839.506656 381.9727616 828.7808 404.2694016 825.0136704 412.10041344 819.0730112 418.62308544 811.731136 423.09947008L805.9740608 426.06154944 256 660.416 256 960 192 960 192 96C192 78.32688832 206.32688832 64 224 64 231.85471616 64 239.04845056 66.83000256 244.61719296 71.52599872L248.52424384 75.4425344 248.52424384 75.4425344ZM256 150.016L256 590.848 741.888 383.744 256 150.016Z"/></svg>;
  },

});
