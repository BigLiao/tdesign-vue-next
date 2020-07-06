import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-photo`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.90872878,2 C10.27342,2 10.6091931,2.19853299 10.7849447,2.51808125 L11.6,4 L14,4 C14.5522847,4 15,4.49746139 15,5.11111111 L15,12.8888889 C15,13.5025386 14.5522847,14 14,14 L2,14 C1.44771525,14 1,13.5025386 1,12.8888889 L1,5.11111111 C1,4.49746139 1.44771525,4 2,4 L4.4,4 L5.21505531,2.51808125 C5.39080685,2.19853299 5.72657999,2 6.09127122,2 L9.90872878,2 Z M10,3 L6,3 L5,5 L2,5 L2,13 L14,13 L14,5 L11,5 L10,3 Z M8,6 C9.65685425,6 11,7.34314575 11,9 C11,10.6568542 9.65685425,12 8,12 C6.34314575,12 5,10.6568542 5,9 C5,7.34314575 6.34314575,6 8,6 Z M8,7 C6.8954305,7 6,7.8954305 6,9 C6,10.1045695 6.8954305,11 8,11 C9.1045695,11 10,10.1045695 10,9 C10,7.8954305 9.1045695,7 8,7 Z"/></svg>;
  },

});
