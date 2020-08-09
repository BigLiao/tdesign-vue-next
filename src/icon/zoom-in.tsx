import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-zoom-in`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12,9 L12,11 L14,11 L14,12 L12,12 L12,14 L11,14 L11,12 L9,12 L9,11 L11,11 L11,9 L12,9 Z M5.5,2 C7.43299662,2 9,3.56700338 9,5.5 C9,6.41355319 8.64999406,7.2453581 8.07676339,7.86863354 L10.267767,10.0606602 L9.56066017,10.767767 L7.29691956,8.50413109 C6.77165605,8.81899367 6.15696617,9 5.5,9 C3.56700338,9 2,7.43299662 2,5.5 C2,3.56700338 3.56700338,2 5.5,2 Z M5.5,3 C4.11928813,3 3,4.11928813 3,5.5 C3,6.88071187 4.11928813,8 5.5,8 C6.88071187,8 8,6.88071187 8,5.5 C8,4.11928813 6.88071187,3 5.5,3 Z"/></svg>;
  },

});
