import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-login`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.6027453,2.45816065 C13.0656594,3.65003533 14,5.46590419 14,7.5 C14,11.0898509 11.0898509,14 7.5,14 C3.91014913,14 1,11.0898509 1,7.5 C1,5.46590419 1.93434064,3.65003533 3.39725468,2.45816065 L4.09913282,3.17719542 C2.8207729,4.18430457 2,5.74630139 2,7.5 C2,10.5375661 4.46243388,13 7.5,13 C10.5375661,13 13,10.5375661 13,7.5 C13,5.74630139 12.1792271,4.18430457 10.9008672,3.17719542 L11.6027453,2.45816065 Z M8,1 L8,7 L7,7 L7,1 L8,1 Z"/></svg>;
  },

});
