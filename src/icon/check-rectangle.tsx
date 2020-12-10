import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-check-rectangle`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M768 128C803.3462208 128 832 156.653776 832 192L832 768C832 803.3462208 803.3462208 832 768 832L192 832C156.653776 832 128 803.3462208 128 768L128 192C128 156.653776 156.653776 128 192 128L768 128ZM768 192L192 192 192 768 768 768 768 192ZM641.7312 322.91147456L686.9860352 368.16630848 415.45703104 639.69531264 370.20219712 594.44047872 268.61821312 492.78413056 313.87304704 447.52929664 415.488 549.12 641.7312 322.91147456Z"/></svg>;
  },

});