import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-close-rectangle`;

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
      return [`${prefix}-icon`, name, CLASSNAMES.SIZE[this.size]];
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
    return (
      <svg
        onClick={this.handleClick}
        class={this.classes}
        style={this.iconStyle}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-opacity=".9"
          fill-rule="evenodd"
          d="M768 128C803.3462208 128 832 156.653776 832 192L832 768C832 803.3462208 803.3462208 832 768 832L192 832C156.653776 832 128 803.3462208 128 768L128 192C128 156.653776 156.653776 128 192 128L768 128ZM768 192L192 192 192 768 768 768 768 192ZM615.76450176 298.98066432L661.0193344 344.23549824 525.248 480 661.0193344 615.76450176 615.76450176 661.0193344 480 525.248 344.23549824 661.0193344 298.98066432 615.76450176 434.752 480 298.98066432 344.23549824 344.23549824 298.98066432 480 434.752 615.76450176 298.98066432Z"
        />
      </svg>
    );
  },
});
