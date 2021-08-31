import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-caret-right`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M366.99374976 128.6047584C342.25139328 128.6047584 322.19374976 148.66240128 322.19374976 173.4047584L322.19374976 850.7236736C322.19374976 860.7143872 325.53327488 870.418432 331.68149824 878.293312 346.9077888 897.7957312 375.06096896 901.2622144 394.56338688 886.0359232L809.0237632 562.45071808C813.1521344 559.22754048 816.8692352 555.50977536 820.0916736 551.38082944 841.8385408 523.51634688 836.879232 483.2984032 809.014752 461.55153664L394.55707904 138.08758272C386.68326144 131.94245312 376.98172352 128.6047584 366.99374976 128.6047584ZM386.176 811.328L386.176 212.736 769.6385664 512.00464448 386.176 811.328Z"/></svg>;
  },

});
