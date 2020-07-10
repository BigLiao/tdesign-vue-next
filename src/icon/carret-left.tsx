import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-carret-left`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.7,2.01027943 C3.31340068,2.01027943 3,2.3236801 3,2.71027943 L3,13.2933875 C3,13.4494924 3.05218008,13.601118 3.14824607,13.724163 C3.38615685,14.0288883 3.8260503,14.0830522 4.13077558,13.8451414 L10.606719,8.78912255 C10.6712247,8.73876039 10.7293045,8.68067031 10.7796551,8.61615553 C11.1194499,8.180773 11.0419607,7.55236762 10.6065782,7.21257284 L4.13067702,2.15844856 C4.00764862,2.06243091 3.85606209,2.01027943 3.7,2.01027943 Z M4,12.677 L4,3.325 L9.99132527,8.00090265 L4,12.677 Z" transform="matrix(-1 0 0 1 13.991 0)"/></svg>;
  },

});
