import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chart-bubble`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M192 704C227.346224 704 256 732.6537792 256 768 256 803.3462208 227.346224 832 192 832 156.653776 832 128 803.3462208 128 768 128 732.6537792 156.653776 704 192 704ZM672 448C725.0193344 448 768 490.98066432 768 544 768 597.01933568 725.0193344 640 672 640 618.98066432 640 576 597.01933568 576 544 576 490.98066432 618.98066432 448 672 448ZM352 256C440.36555968 256 512 327.63444032 512 416 512 504.36555968 440.36555968 576 352 576 263.63444032 576 192 504.36555968 192 416 192 327.63444032 263.63444032 256 352 256ZM352 320C298.98066432 320 256 362.98066432 256 416 256 469.01933568 298.98066432 512 352 512 405.01933568 512 448 469.01933568 448 416 448 362.98066432 405.01933568 320 352 320ZM832 192C867.3462208 192 896 220.653776 896 256 896 291.346224 867.3462208 320 832 320 796.6537792 320 768 291.346224 768 256 768 220.653776 796.6537792 192 832 192Z"/></svg>;
  },

});