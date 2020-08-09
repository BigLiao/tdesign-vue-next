import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-edit`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.99760805,12.2352838 C6.83759261,12.3952992 6.62803464,12.4963098 6.4031798,12.5218085 L4.0105314,12.7931365 C3.46176388,12.8553672 2.96645201,12.4609511 2.90422137,11.9121836 C2.89573004,11.8373045 2.89573004,11.7617056 2.90422137,11.6868265 L3.17554943,9.29417812 C3.20104813,9.06932328 3.30205871,8.8597653 3.46207415,8.69974986 L8.16467939,3.99714462 L9.57889295,2.58293106 C9.96941724,2.19240677 10.565173,2.15499755 10.9095507,2.49937523 L13.1979827,4.78780723 C13.5423604,5.13218492 13.5049511,5.72794068 13.1144269,6.11846497 L6.99760805,12.2352838 Z M8.16385287,5.41070026 L4.16918093,9.40685665 L3.89785287,11.799505 L6.29050127,11.528177 L10.2858529,7.53270026 L8.16385287,5.41070026 Z M10.2864623,3.30194092 L8.87785287,4.70970026 L11.1658529,6.99770026 L12.5748943,5.59037292 L10.2864623,3.30194092 Z"/></svg>;
  },

});
