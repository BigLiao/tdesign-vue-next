import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-backtop`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.163,1.99938818 L13.163,2.99938818 L7.715,2.99938818 L13.1637085,8.44793949 L12.4566017,9.15504627 L8.006,4.704 L8.00685425,13.7910852 L7.00685425,13.7910852 L7.006,4.705 L2.55710678,9.15504627 L1.85,8.44793949 L7.148,3.15 C7.15518745,3.14275204 7.15708537,3.14088367 7.15899439,3.13903354 L7.297,2.99938818 L1.85,2.99938818 L1.85,1.99938818 L13.163,1.99938818 Z"/></svg>;
  },

});
