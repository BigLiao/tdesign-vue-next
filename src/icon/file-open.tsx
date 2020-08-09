import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file-open`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3,13 C2.44771525,13 2,12.626904 2,12.1666667 L2,3.83333333 C2,3.37309604 2.44771525,3 3,3 L8.46874046,2.99760721 C8.64637732,2.93161083 8.85399444,2.96999448 8.99675812,3.11275816 L10.883,4.99931156 L13.6618118,5 C14.2140966,5 14.6618118,5.44771525 14.6618118,6 C14.6618118,6.09592547 14.6480097,6.19135191 14.6208295,6.28334614 L12.8481023,12.2833461 C12.7225365,12.7083379 12.3322378,13 11.8890846,13 L3,13 Z M13.6618118,6 L5.11,6 L3.33818816,12 L11.8890846,12 L13.6618118,6 Z M8.469,3.99931156 L3,4 L3,9.61431156 L4.36363636,5 L9.469,4.99931156 L8.469,3.99931156 Z"/></svg>;
  },

});
