import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-money-circle`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M480 64C709.7504576 64 896 250.24954432 896 480 896 709.7504576 709.7504576 896 480 896 250.24954432 896 64 709.7504576 64 480 64 250.24954432 250.24954432 64 480 64ZM480 128C285.59576832 128 128 285.59576832 128 480 128 674.4042304 285.59576832 832 480 832 674.4042304 832 832 674.4042304 832 480 832 285.59576832 674.4042304 128 480 128ZM434.752 384L348.11774912 297.37258304 393.37258304 252.11774912 480 338.752 566.62741696 252.11774912 611.88225088 297.37258304 525.248 384 640 384 640 448 512 448 512 512 640 512 640 576 512 576 512 704 448 704 448 576 320 576 320 512 448 512 448 448 320 448 320 384 434.752 384Z"/></svg>;
  },

});
