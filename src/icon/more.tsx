import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-more`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M576 192.00000000000003C576 227.34622400000003 547.346224 256.00000000000006 512 256.00000000000006 476.653776 256.00000000000006 448 227.34622400000003 448 192.00000000000003 448 156.65377600000002 476.653776 128.00000000000003 512 128.00000000000003 547.346224 128.00000000000003 576 156.65377600000002 576 192.00000000000003ZM576 512C576 547.346224 547.3462240000001 576 512 576 476.653776 576 448 547.346224 448 512 448 476.65377600000005 476.653776 448.00000000000006 512 448.00000000000006 547.346224 448.00000000000006 576 476.653776 576 512ZM576 832C576 867.3462208 547.3462240000001 896 512 896 476.653776 896 448 867.3462208 448 832 448 796.6537792 476.653776 768 512 768 547.3462240000001 768 576 796.6537792 576 832Z"/></svg>;
  },

});