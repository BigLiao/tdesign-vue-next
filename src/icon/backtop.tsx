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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M842.432 127.96084352L842.432 191.96084352 493.76 191.96084352 842.477344 540.66812736 797.2225088 585.92296128 512.384 301.06145536 512.438672 882.6294528 448.438672 882.6294528 448.384 301.12545536 163.65483392 585.92296128 118.4 540.66812736 467.008 191.96084352 118.4 191.96084352 118.4 127.96084352 842.432 127.96084352Z"/></svg>;
  },

});
