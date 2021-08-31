import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-notification-filled`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M160 768C142.32688832 768 128 753.6731136 128 736 128 718.3268864 142.32688832 704 160 704L192 703.936 192 479.97558592C192 331.75010048 304.0114432 209.66508096 448.01901056 193.75561216L448 128 512 128 512.06112576 193.76448448C651.6159552 209.22157632 761.1038272 324.39365504 767.686528 466.4425152L768 479.97558592 768 704 800 704C817.6731136 704 832 718.3268864 832 736 832 753.6731136 817.6731136 768 800 768L640.0013632 768.0345152C624.85982976 841.0490048 558.9791232 896 480.00136256 896 401.02360192 896 335.14289536 841.0490048 320.00136256 768.0345152L160 768Z"/></svg>;
  },

});
