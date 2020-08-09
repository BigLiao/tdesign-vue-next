import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-rollback`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.61759446,2.67939069 L5.32470124,3.38649747 L3.69812293,5.0112202 C3.79777578,5.00378451 3.89844588,5 3.99999991,5 L9.99999991,5 C12.2091389,5 13.9999999,6.790861 13.9999999,9 C13.9999999,11.209139 12.2091389,13 9.99999991,13 L4.99933421,13 L4.99999996,12 L9.99999991,12 C11.6568542,12 12.9999999,10.6568542 12.9999999,9 C12.9999999,7.40231912 11.7510799,6.09633912 10.1762727,6.00509269 L9.99999991,6 L3.99999991,6 C3.90385618,6 3.80876879,6.00452269 3.71493887,6.01336691 L5.33163818,7.63078026 L4.6245314,8.33788704 L2.49827412,6.21139069 L2.49627412,6.21492459 L2.14272073,5.8613712 C1.94745858,5.66610906 1.94745858,5.34952657 2.14272073,5.15426442 L2.14272073,5.15426442 L4.61759446,2.67939069 Z"/></svg>;
  },

});
