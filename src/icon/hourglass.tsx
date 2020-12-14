import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-hourglass`;

export default Vue.extend({
  name,

  props: {
    // xs/small/medium/large/xl/18px/2em
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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M896 128L896 192 833.6 192 559.47978368 494.36582016C557.27752384 496.71382784 557.27752384 496.71382784 554.9229056 498.90901952 548.90100608 504.33731776 542.13128448 508.41014912 534.98802752 511.14691648 542.41952 513.82283904 549.44393088 517.96749568 555.67414976 523.55909248 558.203136 525.9123776 558.203136 525.9123776 560.55642112 528.44136384L560.55642112 528.44136384 833.024 832 896 832 896 896 128 896 128 832 192.768 832 465.29625728 528.44136384 471.02955776 522.79981376C476.77909376 517.80905536 483.23517632 514.00238656 490.06315264 511.39788544 482.95576768 508.8856864 476.24104768 505.00373888 470.2801632 499.85218944L464.53461952 494.22310848 192.128 192 128 192 128 128 896 128ZM512.9263392 571.1891744L278.784 832 747.008 832 512.9263392 571.1891744ZM747.264 192L278.272 192 512.0717184 451.37192064 747.264 192Z"/></svg>;
  },

});
