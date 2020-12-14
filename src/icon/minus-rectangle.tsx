import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-minus-rectangle`;

export default Vue.extend({
  name,

  props: {
    // xs/small/middle/large/xl/18px/2em
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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M768 128C803.3462208 128 832 156.653776 832 192L832 768C832 803.3462208 803.3462208 832 768 832L192 832C156.653776 832 128 803.3462208 128 768L128 192C128 156.653776 156.653776 128 192 128L768 128ZM768 192L192 192 192 768 768 768 768 192ZM704 448L704 512 256 512 256 448 704 448Z"/></svg>;
  },

});
