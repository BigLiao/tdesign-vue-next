import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-secured`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.0106326,1.99594242 C12.5234684,1.99594242 12.9461397,2.38198261 13.0039048,2.87932129 L13.0106326,2.99594242 L13.0106326,8.1598046 C13.0106326,10.3007451 11.4979672,12.1688512 8.47263638,13.7641228 C8.21721808,13.8988062 7.91804841,13.9156416 7.65169228,13.814629 L7.53977187,13.7641228 L7.23220352,13.59812 C4.51264511,12.0953489 3.10430236,10.3560782 3.00717528,8.38030788 L3.00177933,8.1598046 L3.00177933,2.99594242 C3.00177933,2.48310658 3.38781952,2.06043526 3.8851582,2.00267015 L4.00177933,1.99594242 L12.0106326,1.99594242 Z M12.0106326,2.99594242 L4.00177933,2.99594242 L4.00177933,8.1598046 C4.00177933,9.7437159 5.09729015,11.2106857 7.43224007,12.5626307 L7.70716603,12.718114 L8.00620344,12.8795655 L8.29315434,12.7248093 C10.7319134,11.3791417 11.9210121,9.91784778 12.0057481,8.34212635 L12.0106326,8.1598046 L12.0106326,2.99594242 Z M7.75923978,9.97456284 L5.31114405,7.52902026 L6.01825083,6.82191348 L7.75877933,8.55994242 L10.5876669,5.73192215 L11.2947737,6.43902893 L7.75923978,9.97456284 Z"/></svg>;
  },

});
