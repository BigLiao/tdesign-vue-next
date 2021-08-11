import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-caret-down`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    classes(): ClassName {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): Record<string, any> {
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M118.66338432 300.80937472000005C118.66338432 276.06701824000004 138.72102784 256.00937472 163.46338432000002 256.00937472L840.7822976 256.00937472C850.7730176 256.00937472 860.477056 259.34889984 868.351936 265.49712320000003 887.8543552 280.72341376 891.3208384 308.87659392 876.0945535999999 328.37901248000003L552.5093439999999 742.8393856C549.2861664 746.9677568000001 545.56840128 750.6848576 541.43945536 753.9073024 513.5749728 775.6541696 473.35702912 770.6948608 451.61016256 742.8303744L128.14620864 328.372704C122.00107904000001 320.4988864 118.66338432 310.79734848000004 118.66338432 300.80937472000005ZM801.3475648 320L202.81956352 320 502.06327039999996 703.4541952000001 801.3475648 320Z"/></svg>;
  },

});
