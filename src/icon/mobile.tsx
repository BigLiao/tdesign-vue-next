import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-mobile`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12,1 C12.5522847,1 13,1.44771525 13,2 L13,14 C13,14.5522847 12.5522847,15 12,15 L4,15 C3.44771525,15 3,14.5522847 3,14 L3,2 C3,1.44771525 3.44771525,1 4,1 L12,1 Z M12,2 L4,2 L4,14 L12,14 L12,2 Z M8,11.5521799 C8.55228475,11.5521799 9,11.9998952 9,12.5521799 C9,13.1044647 8.55228475,13.5521799 8,13.5521799 C7.44771525,13.5521799 7,13.1044647 7,12.5521799 C7,11.9998952 7.44771525,11.5521799 8,11.5521799 Z"/></svg>;
  },

});
