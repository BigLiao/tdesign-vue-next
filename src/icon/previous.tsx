import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-previous`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3,2 L3,14 L2,14 L2,2 L3,2 Z M10.9741826,2.00944935 C11.3607819,2.00944935 11.6741826,2.32285002 11.6741826,2.70944935 L11.6741826,13.2925574 C11.6741826,13.4486623 11.6220025,13.600288 11.5259365,13.723333 C11.2880257,14.0280583 10.8481323,14.0822221 10.543407,13.8443113 L4.06746363,8.78829247 C4.00295784,8.73793032 3.94487814,8.67984024 3.8945275,8.61532546 C3.55473272,8.17994292 3.6322219,7.55153755 4.06760443,7.21174276 L10.5435056,2.15761848 C10.666534,2.06160083 10.8181205,2.00944935 10.9741826,2.00944935 Z M10.6749951,3.323 L4.68285731,8.00007257 L10.6749951,12.678 L10.6749951,3.323 Z"/></svg>;
  },

});
