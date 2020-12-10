import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-order-ascending`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M576 768L576 832 128 832 128 768 576 768ZM736 128C748.7387392 128 759.7389504 135.44352512 764.88848 146.21842752L899.019456 280.47570816C911.5162368 292.97248512 911.5162368 313.23376448 899.019456 325.73054208 886.5226816 338.22731904 866.2614016 338.22731904 853.7646272 325.73054208L768 240 768 832 704 832 704 160C704 142.32688832 718.3268864 128 736 128ZM576 448L576 512 128 512 128 448 576 448ZM576 128L576 192 128 192 128 128 576 128Z"/></svg>;
  },

});