import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-filter`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M767.835392 128L192.18497728 128C174.60572096 128 157.80027776 135.2310144 145.71328768 147.99581632L140.5555776 154.168C121.72574912 179.79754112 124.48953856 216.03844864 148.18094272 238.47183872L383.936 461.696 384 960 576 816 576 461.696 811.8376384 238.47367296C824.6036224 226.38657728 831.835392 209.58033216 831.835392 192 831.835392 156.653776 803.1816192 128 767.835392 128ZM192.1851264 192L767.835392 192 512 434.23030912 512 783.936 447.936 831.936 448 434.23109952 192.1851264 192Z"/></svg>;
  },

});