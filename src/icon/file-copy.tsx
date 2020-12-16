import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file-copy`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M768 896L768 960 192 960C156.653776 960 128 931.3462208 128 896L128 256 192 256 192 896 768 896ZM639.64761472 63.955432256C656.6034176 63.953462528 672.8670592 70.68011648 684.8677696 82.65852288L877.2127168 274.64597952C889.2408064 286.651712 896 302.94840384 896 319.94288832L896 768C896 803.3462208 867.3462208 832 832 832L320 832C284.653776 832 256 803.3462208 256 768L256 128C256.00743552 92.65667968 284.65668032 64.00410624 319.99999936 63.992565248L639.64761472 63.955432256ZM576 128L320 128 320 768 832 768 832 383.95543168 576 384 576 128ZM640 128L640 320 832 320 640 128Z"/></svg>;
  },

});