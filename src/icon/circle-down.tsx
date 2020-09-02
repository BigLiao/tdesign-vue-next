import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-circle-down`;

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
      if (['xs', 'small', 'middle', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M514.58178688 687.5065548800001L740.8559552 461.2323846400001 695.6011232 415.97755072000007 514.5476172799999 597.01055488 333.5624512 415.97755072000007 288.30761728 461.2323846400001 514.58178688 687.5065548800001Z"/><path d="M512 96C741.7504576 96 928 282.24954432000004 928 512 928 741.7504576 741.7504576 928 512 928 282.24954432000004 928 96 741.7504576 96 512 96 282.24954432000004 282.24954432000004 96 512 96ZM512 160C317.59576832 160 160 317.59576832 160 512 160 706.40423168 317.59576832 864 512 864 706.40423168 864 864 706.40423168 864 512 864 317.59576832 706.40423168 160 512 160Z"/></g></svg>;
  },

});
