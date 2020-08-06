import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-circle-time_full`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,1.5 C11.5898509,1.5 14.5,4.41014913 14.5,8 C14.5,11.5898509 11.5898509,14.5 8,14.5 C4.41014913,14.5 1.5,11.5898509 1.5,8 C1.5,4.41014913 4.41014913,1.5 8,1.5 Z M8.5,4 L7.5,4 L7.5,8.5 L7.501,8.5 L10.5641778,11.0711504 L11.2069654,10.305106 L8.5,8.034 L8.5,4 Z"/></svg>;
  },

});
