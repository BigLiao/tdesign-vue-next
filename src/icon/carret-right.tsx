import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-carret-right`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.73427734,2.00944935 C5.34767802,2.00944935 5.03427734,2.32285002 5.03427734,2.70944935 L5.03427734,13.2925574 C5.03427734,13.4486623 5.08645742,13.600288 5.18252341,13.723333 C5.4204342,14.0280583 5.86032764,14.0822221 6.16505292,13.8443113 L12.6409963,8.78829247 C12.7055021,8.73793032 12.7635818,8.67984024 12.8139324,8.61532546 C13.1537272,8.17994292 13.076238,7.55153755 12.6408555,7.21174276 L6.16495436,2.15761848 C6.04192596,2.06160083 5.89033943,2.00944935 5.73427734,2.00944935 Z M6.034,12.677 L6.034,3.324 L12.0256026,8.00007257 L6.034,12.677 Z"/></svg>;
  },

});
