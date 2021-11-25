import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-qrcode`;

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
          d="M544.25974592 768.84288L544.25974592 896.84288 480.25974592 896.84288 480.25974592 768.84288 544.25974592 768.84288ZM320 640C355.346224 640 384 668.6537792 384 704L384 832C384 867.3462208 355.346224 896 320 896L192 896C156.653776 896 128 867.3462208 128 832L128 704C128 668.6537792 156.653776 640 192 640L320 640ZM832 640C867.3462208 640 896 668.6537792 896 704L896 832C896 867.3462208 867.3462208 896 832 896L704 896C668.6537792 896 640 867.3462208 640 832L640 704C640 668.6537792 668.6537792 640 704 640L832 640ZM320 704L192 704 192 832 320 832 320 704ZM832 704L704 704 704 832 832 832 832 704ZM544.25974592 640L544.25974592 704 480.25974592 704 480.25974592 640 544.25974592 640ZM512 128C547.346224 128 576 156.653776 576 192L576 512C576 547.346224 547.346224 576 512 576L192 576C156.653776 576 128 547.346224 128 512L128 192C128 156.653776 156.653776 128 192 128L512 128ZM704 478.76671872L704 542.76671872 640 542.76671872 640 478.76671872 704 478.76671872ZM896 478.76671872L896 542.76671872 768 542.76671872 768 478.76671872 896 478.76671872ZM512 192L192 192 192 512 512 512 512 192ZM448 256L448 448 256 448 256 256 448 256ZM832 128C867.3462208 128 896 156.653776 896 192L896 320C896 355.346224 867.3462208 384 832 384L704 384C668.6537792 384 640 355.346224 640 320L640 192C640 156.653776 668.6537792 128 704 128L832 128ZM832 192L704 192 704 320 832 320 832 192Z"
        />
      </svg>
    );
  },
});
