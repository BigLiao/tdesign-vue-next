import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-notification`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.9498814,12.0005393 C10.7180379,13.1413907 9.70928843,14 8.5,14 C7.29071157,14 6.28196209,13.1413907 6.05011858,12.0005393 L7.08581575,12.0013077 C7.29210273,12.5832207 7.84737936,13 8.5,13 C9.15262064,13 9.70789727,12.5832207 9.91418425,12.0013077 L10.9498814,12.0005393 Z M9,1 L9.00070744,2.02754265 C11.2503421,2.2765864 13,4.18396594 13,6.5 L13,11 L13.5,11 C13.7761424,11 14,11.2238576 14,11.5 C14,11.7761424 13.7761424,12 13.5,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L12,11 L12,6.5 C12,4.56700338 10.4329966,3 8.5,3 C6.56700338,3 5,4.56700338 5,6.5 L5,11 L4,11 L4,6.5 C4,4.18362124 5.7501788,2.27601865 8.00029704,2.02743156 L8,1 L9,1 Z"/></svg>;
  },

});
