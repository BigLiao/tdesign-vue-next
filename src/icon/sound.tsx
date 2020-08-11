import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-sound`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.89442719,3.3618034 C8.94649798,3.46594497 8.97984729,3.57810647 8.99326752,3.69317239 L9,3.80901699 L9,11.190983 C9,11.7432678 8.55228475,12.190983 8,12.190983 C7.88356618,12.190983 7.76833162,12.1706514 7.65941182,12.1311958 L7.5527864,12.0854102 L3.382,9.99979794 L2,10 C1.44771525,10 1,9.44035594 1,8.75 L1,6.25 C1,5.55964406 1.44771525,5 2,5 L3.38,4.99979794 L7.5527864,2.9145898 C8.0467649,2.66760055 8.64743794,2.8678249 8.89442719,3.3618034 Z M11.7050025,3.11695134 C11.8439465,3.21668532 11.9794983,3.32375776 12.1111536,3.43820393 C14.4036338,5.43102662 14.6465543,8.90495103 12.6537316,11.1974313 C12.3438684,11.5538881 11.9981966,11.8607927 11.6267255,12.1174451 L10.9057815,11.3952188 C11.268034,11.1663181 11.6034404,10.8814 11.899022,10.5413723 C13.5295133,8.66570659 13.3307602,5.8234048 11.4550945,4.19291351 C11.3050109,4.06244781 11.1487383,3.94369402 10.9873928,3.83657408 L11.7050025,3.11695134 Z M8,3.80901699 L4,5.80879794 L4,9.19079794 L8,11.190983 L8,3.80901699 Z M10.2614631,4.56235541 C11.3028522,5.16874123 12.0028289,6.29717977 12.0028289,7.58910663 C12.0028289,8.91651254 11.2638786,10.0713274 10.1749019,10.6646272 L9.42491562,9.91356179 C10.349269,9.54656816 11.0028289,8.64416094 11.0028289,7.58910663 C11.0028289,6.57027644 10.3933771,5.69379135 9.51915244,5.3043304 L10.2614631,4.56235541 Z M3,6 L2,6 L2,9 L3,9 L3,6 Z"/></svg>;
  },

});
