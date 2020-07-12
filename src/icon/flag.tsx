import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-flag`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.88319131,1.1787896 L12.6223445,5.38245121 C12.9707295,5.55004276 13.1172915,5.9683244 12.9497,6.3167094 C12.8908386,6.43906896 12.7980158,6.54098571 12.683299,6.61092922 L12.5933447,6.65721171 L4,10.319 L4,15 L3,15 L3,1.5 C3,1.22385763 3.22385763,1 3.5,1 C3.65385075,1 3.79147189,1.06948723 3.88319131,1.1787896 Z M4,2.344 L4,9.232 L11.592,5.996 L4,2.344 Z"/></svg>;
  },

});
