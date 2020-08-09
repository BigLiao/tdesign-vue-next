import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-link`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.29133516,6.53333516 L5.99833516,7.24033516 L3.648496,9.59099894 L5.76981634,11.7123193 L8.11933516,9.36133516 L8.82733516,10.0693352 L6.64834295,12.2480062 C6.12764389,12.7687053 5.38895142,12.8742328 4.99842712,12.4837085 L2.87710678,10.3623882 C2.48658249,9.97186386 2.59210999,9.23317139 3.11280904,8.71247233 L5.29133516,6.53333516 Z M9.03410416,5.69144821 L9.74121094,6.39855499 L6.91278381,9.22698212 L6.20567703,8.51987534 L9.03410416,5.69144821 Z M11.3623882,1.87710678 L13.4837085,3.99842712 C13.8742328,4.38895142 13.7687053,5.12764389 13.2480062,5.64834295 L10.9483352,7.94833516 L10.2403352,7.24033516 L12.7123193,4.76981634 L10.5909989,2.648496 L8.11933516,5.11933516 L7.41233516,4.41233516 L9.71247233,2.11280904 C10.2331714,1.59210999 10.9718639,1.48658249 11.3623882,1.87710678 Z" transform="rotate(180 8.18 7.18)"/></svg>;
  },

});
