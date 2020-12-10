import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-order-descending`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M704 128L704 725.632 831.9715392 597.66908352C844.46832 585.17230656 864.7296 585.17230656 877.2263744 597.66908352 889.7231552 610.16586112 889.7231552 630.42714048 877.2263744 642.9239168L696.20704 823.9432512C684.3139712 835.83632 665.3884736 836.4108672 652.8159424 825.6668864 645.0491008 819.804032 640 810.4916544 640 800L640 800 640 128 704 128ZM512 768L512 832 128 832 128 768 512 768ZM512 448L512 512 128 512 128 448 512 448ZM512 128L512 192 128 192 128 128 512 128Z"/></svg>;
  },

});