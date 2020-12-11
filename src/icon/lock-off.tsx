import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-lock-off`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 128C568.17524864 128 618.71583808 152.12484672 653.826368 190.57914432L600.75908224 227.77276544C577.746992 205.62074304 546.46414336 192 512 192 444.5208448 192 389.23743232 244.21617856 384.35108736 310.4472096L384 320 782.7692288 320C809.9586368 320 832 352.74717248 832 393.14285696L832 758.8571456C832 799.2528256 809.9586368 832 782.7692288 832L241.23076928 832C214.0413664 832 192 799.2528256 192 758.8571456L192 393.14285696C192 352.74717248 214.0413664 320 241.23076928 320L320 320C320 213.961328 405.961328 128 512 128ZM768 384L256 384 256 768 768 768 768 384ZM544.70655104 511.92788736L544.70655104 703.9278848 480.70655104 703.9278848 480.70655104 511.92788736 544.70655104 511.92788736Z"/></svg>;
  },

});
