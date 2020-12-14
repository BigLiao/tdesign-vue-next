import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-calendar`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M384 128L384 192 640 192 640 128 704 128 704 192 832 192C867.3462208 192 896 220.653776 896 256L896 832C896 867.3462208 867.3462208 896 832 896L192 896C156.653776 896 128 867.3462208 128 832L128 256C128 220.653776 156.653776 192 192 192L320 192 320 128 384 128ZM320 256L192 256 192 832 832 832 832 256 704 256 704 320 640 320 640 256 384 256 384 320 320 320 320 256ZM192 384L832 384 832 448 192 448 192 384Z"/></svg>;
  },

});
