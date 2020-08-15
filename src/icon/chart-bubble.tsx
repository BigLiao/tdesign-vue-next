import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chart-bubble`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3,11 C3.55228475,11 4,11.4477153 4,12 C4,12.5522847 3.55228475,13 3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 Z M10.5,7 C11.3284271,7 12,7.67157288 12,8.5 C12,9.32842712 11.3284271,10 10.5,10 C9.67157288,10 9,9.32842712 9,8.5 C9,7.67157288 9.67157288,7 10.5,7 Z M5.5,4 C6.88071187,4 8,5.11928813 8,6.5 C8,7.88071187 6.88071187,9 5.5,9 C4.11928813,9 3,7.88071187 3,6.5 C3,5.11928813 4.11928813,4 5.5,4 Z M5.5,5 C4.67157288,5 4,5.67157288 4,6.5 C4,7.32842712 4.67157288,8 5.5,8 C6.32842712,8 7,7.32842712 7,6.5 C7,5.67157288 6.32842712,5 5.5,5 Z M13,3 C13.5522847,3 14,3.44771525 14,4 C14,4.55228475 13.5522847,5 13,5 C12.4477153,5 12,4.55228475 12,4 C12,3.44771525 12.4477153,3 13,3 Z"/></svg>;
  },

});
