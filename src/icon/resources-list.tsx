import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-resources-list`;

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
          fill-rule="evenodd"
          d="M960 416C960 451.34592 931.3472 480 896 480H128C92.65408 480 64 451.34592 64 416V96H960V416ZM895.936 159.936H127.936L128 416H896L895.936 159.936ZM64 544H960V864C960 899.3472 931.3472 928 896 928H128C92.65408 928 64 899.3472 64 864V544ZM895.936 607.936H127.936L128 864H896L895.936 607.936ZM192 320V256H448V320H192ZM192 704V768H448V704H192Z"
          clip-rule="evenodd"
          opacity=".9"
        />
      </svg>
    );
  },
});
