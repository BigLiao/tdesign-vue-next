import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-arrow-right`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M607.16167744 115.54204096L561.9068435199999 160.79687488 850.130208 447.95804096 64.19200000000001 448 64.19200000000001 512 851.218208 511.95804096 562.8082112 799.9843776 608.06304512 845.2392064 950.6120768000001 503.23153728 954.33585472 498.79037248C960.8499056 489.41276032 961.763021824 477.3222624 957.07687872 467.17751616L957.07687872 467.17751616C955.33644096 463.51891584 953.1747936 460.3675616 950.39774016 457.60003968L950.39774016 457.60003968 607.16167744 115.54204096Z"/></svg>;
  },

});
