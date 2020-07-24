import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-fullsreen-exit`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.49915061,8.00000072 L8.49999938,8.0007853 L12.06,8.00637665 L12.06,9.00637665 L9.70209576,9.0023566 L13.2080541,12.5073667 L12.5009473,13.2144735 L9.00488847,9.71936288 L9.01387542,12.07 L8.01387542,12.07 L8.00079684,8.51728135 L8.00000062,8.49921593 L8.00913078,8.40447295 C8.0388462,8.25112175 8.13873382,8.12285234 8.27399114,8.05435807 L8.27399114,8.05435807 L8.34036157,8.02615387 L8.40950456,8.00816447 L8.41081267,8.00850854 L8.41128669,8.00787559 L8.49830121,8.0000029 L8.49915061,8.00000072 Z M2.55304632,1.85033923 L6.0057842,5.30266684 L5.99649427,2.93475617 L6.99649427,2.93475617 L7.0086651,6.50475908 L7.00093759,6.59435569 C6.95950113,6.82695358 6.75631372,7.00391963 6.508668,7.00475617 L6.508668,7.00475617 L6.50168027,7.00347286 L2.94833141,6.99821882 L2.94833141,5.99821882 L5.29089925,6.00199545 L1.84593953,2.55744601 L2.55304632,1.85033923 Z"/></svg>;
  },

});
