import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-usb`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12,2 C12.5522847,2 13,2.44771525 13,3 L13,10 C13.5522847,10 14,10.4477153 14,11 L14,13 C14,13.5522847 13.5522847,14 13,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,11 C2,10.4477153 2.44771525,10 3,10 L3,3 C3,2.44771525 3.44771525,2 4,2 L12,2 Z M13,11 L3,11 L3,13 L13,13 L13,11 Z M12,3 L4,3 L4,10 L12,10 L12,3 Z M10.4977241,5.00560471 L10.4977241,7.00560471 L8.49772411,7.00560471 L8.49772411,5.00560471 L10.4977241,5.00560471 Z M7.52322405,5 L7.52322405,7 L5.52322405,7 L5.52322405,5 L7.52322405,5 Z"/></svg>;
  },

});
