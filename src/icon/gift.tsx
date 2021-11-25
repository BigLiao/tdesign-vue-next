import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-gift`;

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
          d="M192 896C156.653776 896 128 867.3462208 128 832L128 512C92.653776 512 64 483.346224 64 448L64 320C64 284.653776 92.653776 256 128 256L325.44 255.94408128 244.35324672 174.8629152 289.60808128 129.60808128 415.936 255.94408128 530.688 255.94408128 653.2548352 133.49033216 698.5096704 178.74516608 621.248 255.94408128 832 256C867.3462208 256 896 284.653776 896 320L896 448C896 483.346224 867.3462208 512 832 512L832 832C832 867.3462208 803.3462208 896 768 896L192 896ZM192 832L448 831.9440832 448 511.94408128 192 512 192 832ZM768 512L512 511.94408128 512 831.9440832 768 832 768 512ZM448 319.94408128L128 320 128 448 448 447.94408128 448 319.94408128ZM832 320L512 319.94408128 512 447.94408128 832 448 832 320Z"
        />
      </svg>
    );
  },
});
