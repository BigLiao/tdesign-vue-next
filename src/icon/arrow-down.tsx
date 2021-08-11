import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-arrow-down`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M493.82803072 957.22944512L498.68635776 954.46302336 498.68635776 954.46302336 503.1197344 950.7611936000001 846.1220672 607.97006976 800.867232 562.71523584 511.99662208 851.46956992 512 64.18398720000005 448 64.18398720000005 447.99662208 850.44556992 160.131456 562.71523584 114.87662208 607.97006976 457.87895616 950.7611936000001C460.65781632 953.53524608 463.81944384 955.692688 467.19367744 957.23354624L472.3689312 959.08711168C474.14105408 959.5501984 475.94514432 959.85901888 477.75990592 960.01356992L483.23852672 960.00555584C486.86771712 959.69672128 490.454272 958.7713420800001 493.82803072 957.22944512Z"/></svg>;
  },

});
