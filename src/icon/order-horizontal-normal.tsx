import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-order-horizontal-normal`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.5,11.5 L6.5,12.5 L0.5,12.5 L0.5,11.5 L6.5,11.5 Z M10.5,7.5 L10.5,8.5 L0.5,8.5 L0.5,7.5 L10.5,7.5 Z M14.5,3.5 L14.5,4.5 L0.5,4.5 L0.5,3.5 L14.5,3.5 Z" transform="rotate(-90 7.5 8)"/></svg>;
  },

});
