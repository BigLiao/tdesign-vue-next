import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-edit-1`;

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
          d="M784.192 149.30432C772.6592 137.76896 757.8176 131.55712 742.72 130.67008H735.1616C720.064 131.55712 705.2224 137.76896 693.6832 149.30432L580.54848 262.44096 761.568 443.46048 874.7072 330.3232C899.6992 305.32992 899.6992 264.80768 874.7072 239.81376L784.192 149.30432ZM535.29344 307.696L716.3136 488.71552 309.01952 896.0064H128V714.9888L535.29344 307.696ZM535.296 398.20672L191.936 741.504V832H282.496L625.792 488.70272 535.296 398.20672ZM738.9376 194.55872L671.04 262.39872 761.536 352.89472 829.4528 285.0688 738.9376 194.55872ZM640 704H896V768H640V704ZM512 832H896V896H512V832Z"
          clip-rule="evenodd"
          opacity=".9"
        />
      </svg>
    );
  },
});
