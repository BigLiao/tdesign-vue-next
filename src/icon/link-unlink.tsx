import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-link-unlink`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.9120509,10.9994953 L11.1213203,13.9921875 L10.1237563,14.061944 L9.91448687,11.0692518 L10.9120509,10.9994953 Z M5.29133516,7.53333516 L5.99833516,8.24033516 L3.648496,10.5909989 L5.76981634,12.7123193 L8.11933516,10.3613352 L8.82733516,11.0693352 L6.64834295,13.2480062 C6.12764389,13.7687053 5.38895142,13.8742328 4.99842712,13.4837085 L2.87710678,11.3623882 C2.48658249,10.9718639 2.59210999,10.2331714 3.11280904,9.71247233 L5.29133516,7.53333516 Z M11.2006722,9.9169587 L14.0984497,10.6934158 L13.8396307,11.6593417 L10.9418532,10.8828845 L11.2006722,9.9169587 Z M11.3623882,2.87710678 L13.4837085,4.99842712 C13.8742328,5.38895142 13.7687053,6.12764389 13.2480062,6.64834295 L10.9483352,8.94833516 L10.2403352,8.24033516 L12.7123193,5.76981634 L10.5909989,3.648496 L8.11933516,6.11933516 L7.41233516,5.41233516 L9.71247233,3.11280904 C10.2331714,2.59210999 10.9718639,2.48658249 11.3623882,2.87710678 Z M2.25881905,4.62880852 L5.15659652,5.40526565 L4.89777748,6.37119148 L2,5.59473435 L2.25881905,4.62880852 Z M6.08901484,2.07060802 L6.29828427,5.06330017 L5.30072021,5.13305664 L5.09145079,2.14036449 L6.08901484,2.07060802 Z"/></svg>;
  },

});