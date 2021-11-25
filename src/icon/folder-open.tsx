import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-folder-open`;

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
          d="M191.99999232 832C173.53577536 832 133.7869856 821.4811904 128.56921024 786.5336384L127.99999232 778.6659008 127.99999232 245.32492864C127.99999232 230.0606304 140.24771712 196.82976448 182.48390784 192.46682368L191.99999232 191.99083136 385.35633792 191.97937152C396.94290752 192.1882944 406.9288608 193.51345536 417.49065024 200.2302816L423.91423552 204.9415808 533.37599232 294.44337152 878.9153792 294.48257408C914.2616 294.48257408 942.9153792 323.13635008 942.9153792 358.48257408 942.9153792 363.41800064 942.34448 368.33686272 941.2140736 373.14109184L843.60976 782.6585152C836.807456 811.56832 811.0103552 832 781.3110592 832L191.99999232 832ZM878.9153792 358.48257408L306.41090048 358.48257408 208.80658496 768 781.2479936 767.9153728 878.9153792 358.48257408ZM383.70409408 256L191.99999232 256 191.99999232 562.41137152 244.1122016 343.82405696C250.9145088 314.91425344 276.71160576 294.48257408 306.41090048 294.48257408L431.99999232 294.44337152 383.70409408 256Z"
        />
      </svg>
    );
  },
});
