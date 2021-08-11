import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-chevron-down-rectangle`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

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

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M768 832C803.3462208 832 832 803.346224 832 768L832 192C832 156.65377920000003 803.3462208 128 768 128L192 128C156.653776 128 128 156.65377920000003 128 192L128 768C128 803.346224 156.653776 832 192 832L768 832ZM768 768L192 768 192 192 768 192 768 768ZM482.58178688 640.01855488L708.8559552 413.74438464 663.60112 368.48955072 482.54761728 549.5225548799999 301.5624512 368.48955072 256.30761728 413.74438464 482.58178688 640.01855488Z"/></svg>;
  },

});
