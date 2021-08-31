import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-chevron-left`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M266.45122048 489.6415328C253.98241280000002 502.1382944 254.00507328000003 522.37688704 266.50183488 534.84569536L266.50183488 534.84569536 641.5903552 909.0951936 686.8451904 863.8403584 334.4904192 512.2516633600001 686.8451904 160.83449728 641.5903552 115.57966336000001 267.2264192 488.89166336 266.50183488 489.59088959999997 266.47651392 489.6162112Z"/></svg>;
  },

});
