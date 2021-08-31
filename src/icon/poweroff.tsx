import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-poweroff`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M742.5756992 157.3222816C836.2022016 233.60226112 896 349.81786816 896 480 896 709.7504576 709.7504576 896 480 896 250.24954432 896 64 709.7504576 64 480 64 349.81786816 123.79780096 233.60226112 217.42429952 157.3222816L262.34450048 203.34050688C180.5294656 267.79549248 128 367.76328896 128 480 128 674.4042304 285.59576832 832 480 832 674.4042304 832 832 674.4042304 832 480 832 367.76328896 779.4705344 267.79549248 697.6555008 203.34050688L742.5756992 157.3222816ZM512 64L512 448 448 448 448 64 512 64Z"/></svg>;
  },

});
