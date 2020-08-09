import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-bulletpoint`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14,12 L14,13 L5,13 L5,12 L14,12 Z M3,12 L3,13 L2,13 L2,12 L3,12 Z M14,7 L14,8 L5,8 L5,7 L14,7 Z M3,7 L3,8 L2,8 L2,7 L3,7 Z M14,2 L14,3 L5,3 L5,2 L14,2 Z M3,2 L3,3 L2,3 L2,2 L3,2 Z"/></svg>;
  },

});
