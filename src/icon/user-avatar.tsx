import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-user-avatar`;

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
          d="M832 64C867.3462208 64 896 92.653776 896 128L896 896C896 931.3462208 867.3462208 960 832 960L128 960C92.653776 960 64 931.3462208 64 896L64 128C64 92.653776 92.653776 64 128 64L832 64ZM832 128L128 128 128 896 832 896 832 128ZM480 576.66875008C591.80164352 576.66875008 693.3022272 620.77283648 768.052448 692.531712L768.025536 790.2679552 767.8345664 790.1087488 767.5512128 794.274176C763.9969152 815.5439424 739.7645568 832 710.4 832L249.6 832C218.36417408 832 192.93548992 813.379776 192.02522688 790.1522624L191.97446272 790.2679552 191.96256448 692.5172992C266.71136448 620.7669312 368.20584128 576.66875008 480 576.66875008ZM480 640.6687488C394.8852544 640.6687488 316.82630208 670.8781952 255.96035648 721.159872L256 768 704 768 704.0396416 721.159872C643.173696 670.8781952 565.11474624 640.6687488 480 640.6687488ZM480 224.27104512C568.36555968 224.27104512 640 295.90548544 640 384.27104512 640 472.63660544 568.36555968 544.27104512 480 544.27104512 391.63444032 544.27104512 320 472.63660544 320 384.27104512 320 295.90548544 391.63444032 224.27104512 480 224.27104512ZM480 288.27104512C426.98066432 288.27104512 384 331.25170944 384 384.27104512 384 437.29038144 426.98066432 480.27104512 480 480.27104512 533.01933568 480.27104512 576 437.29038144 576 384.27104512 576 331.25170944 533.01933568 288.27104512 480 288.27104512Z"
        />
      </svg>
    );
  },
});
