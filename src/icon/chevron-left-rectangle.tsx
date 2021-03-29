import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chevron-left-rectangle`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
    },
  },

  computed: {
    classes(): Array<string|object> {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): object {
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M192 128C156.65377920000003 128 128 156.653776 128 192L128 768C128 803.3462208 156.65377920000003 832 192 832L768 832C803.346224 832 832 803.3462208 832 768L832 192C832 156.653776 803.346224 128 768 128L192 128ZM192 192L768 192 768 768 192 768 192 192ZM546.15996096 253.79536128L319.88579200000004 480.06953152 546.15996096 706.3436992 591.41479488 661.088864 410.38179072 480.03536128 591.41479488 299.0501952 546.15996096 253.79536128Z"/></svg>;
  },

});
