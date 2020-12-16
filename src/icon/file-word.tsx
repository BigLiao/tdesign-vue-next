import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file-word`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M549.49033216 63.99809312C579.66607552 63.99809312 608.7432224 74.65494848 631.69150848 93.88237568L640 101.49033216 794.5096704 256C816.1138624 277.60419072 829.1976768 286.44017408 831.5984 311.1399264L832 320 832 512 832 512 832 448 768 448 768 512 767.936 511.99809344 767.936 383.99809344 512 384 512 128 256.00000064 128 256.00000064 832 448 832 448 896 256.00000064 896C236.3246336 896 197.6255072 882.9753856 192.55306944 841.360704L192.00000064 832 192.00000064 128C192.00000064 107.33121728 205.7721664 69.49139008 246.78880384 64.53794112L256.00000064 63.99809312 549.49033216 63.99809312ZM828.1811712 512L896 512.26367168 806.9386304 896 739.4698304 896 672.601824 611.80558016 604.53222912 896 537.06342848 896 448 512.26367168 514.95611328 512 570.79140416 742.5191808 624.9182336 512 718.198464 512.26367168 773.1978048 742.5191808 828.1811712 512ZM576.00000064 128L576 320 768 320 576.00000064 128Z"/></svg>;
  },

});