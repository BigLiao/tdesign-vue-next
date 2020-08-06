import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file-copy`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12,14 L12,15 L3,15 C2.44771525,15 2,14.5522847 2,14 L2,4 L3,4 L3,14 L12,14 Z M9.99449398,0.999303629 C10.2594284,0.999272852 10.5135478,1.10437682 10.7010589,1.29153942 L13.7064487,4.29134343 C13.8943876,4.478933 14,4.73356881 14,4.99910763 L14,12 C14,12.5522847 13.5522847,13 13,13 L5,13 C4.44771525,13 4,12.5522847 4,12 L4,2 C4.00011618,1.44776062 4.44776063,1.00006416 4.99999999,0.999883832 L9.99449398,0.999303629 Z M9,2 L5,2 L5,12 L13,12 L13,5.99930362 L9,6 L9,2 Z M10,2 L10,5 L13,5 L10,2 Z"/></svg>;
  },

});
