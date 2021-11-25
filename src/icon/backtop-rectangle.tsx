import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-backtop-rectangle`;

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
          d="M826.6666688 128C864.9584064 128 896 156.653776 896 192L896 832C896 867.3462208 864.9584064 896 826.6666688 896L133.33333312 896C95.0415904 896 64 867.3462208 64 832L64 192C64 156.653776 95.0415904 128 133.33333312 128L826.6666688 128ZM832 192L128 192 128 832 832 832 832 192ZM480 391.33072896L525.25483392 436.53608384 525.184 436.544 670.3162112 579.88225088 625.06137728 625.1370848 512 512.064 512 768 448 768 448 513.728 344.23549824 617.55542016 298.98066432 572.30058624 480 391.33072896ZM768 256L768 320 192 320 192 256 768 256Z"
        />
      </svg>
    );
  },
});
