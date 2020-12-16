import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-queue`;

export default Vue.extend({
  name,

  props: {
    // xs/small/medium/large/xl/18px/2em
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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M704 256C739.3462208 256 768 284.653776 768 320L768 832C768 867.3462208 739.3462208 896 704 896L192 896C156.653776 896 128 867.3462208 128 832L128 320C128 284.653776 156.653776 256 192 256L704 256ZM704 320L192 320 192 832 704 832 704 320ZM896 832L832 832 832 192 192 192 192 128 832 128C867.3462208 128 896 156.653776 896 192L896 832ZM576 576L576 640 320 640 320 576 576 576Z"/></svg>;
  },

});