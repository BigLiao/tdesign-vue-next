import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-lock-on`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,3 C6.9456382,3 6.08183488,3.81587779 6.00548574,4.85073766 L6,5 L5,5 C5,3.34314575 6.34314575,2 8,2 C9.59768088,2 10.9036609,3.24891996 10.9949073,4.82372721 L11,5 L12.2307692,5 C12.6556037,5 13,5.51167457 13,6.14285714 L13,11.8571429 C13,12.4883254 12.6556037,13 12.2307692,13 L3.76923077,13 C3.34439635,13 3,12.4883254 3,11.8571429 L3,6.14285714 C3,5.51167457 3.34439635,5 3.76923077,5 L10,5 C10,3.8954305 9.1045695,3 8,3 Z M12,6 L4,6 L4,12 L12,12 L12,6 Z M8.51103986,7.99887324 L8.51103986,10.9988732 L7.51103986,10.9988732 L7.51103986,7.99887324 L8.51103986,7.99887324 Z"/></svg>;
  },

});
