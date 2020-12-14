import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-enter`;

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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M235.4602336 704L341.02356992 809.5795904 295.768736 854.8344256 137.37681664 696.4425024C130.36804224 689.433728 127.29011456 679.9826432 128.14303424 670.8287616 127.46124544 663.5293696 129.29482176 656.0216384 133.64361792 649.7224256L137.37681664 645.246752 295.768736 486.85483392 341.02356992 532.10966784 233.0282336 640 800 640C815.7094336 640 828.7749376 628.67998976 831.4844352 613.75204032L832 608 832 256 896 256 896 640C896 675.3462208 867.3462208 704 832 704L235.4602336 704Z"/></svg>;
  },

});
