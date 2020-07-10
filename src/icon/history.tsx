import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-history`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C5.67993356,14 3.66742617,12.6831831 2.66910161,10.7561732 L3.41892631,10.006 L3.5096708,10.2018579 C4.32391406,11.8592389 6.02873752,13 8,13 C10.7614237,13 13,10.7614237 13,8 C13,5.23857625 10.7614237,3 8,3 C5.65562919,3 3.68810231,4.6134607 3.1472721,6.79052939 L5.28395299,6.21773377 L5.54277203,7.18365959 L2.16203164,8.08952625 C2.01243532,8.12961046 1.8605002,8.09742325 1.74329661,8.01436718 C1.63919729,7.96656638 1.55193013,7.88310092 1.5006664,7.77504196 L1.4692688,7.68955944 L0.563402141,4.30881905 L1.52932797,4.05 L2.18657474,6.50955747 C2.84930899,3.91686859 5.20080017,2 8,2 Z M8,5 L8,8 L11,8 L11,9 L7,9 L7,5 L8,5 Z"/></svg>;
  },

});
