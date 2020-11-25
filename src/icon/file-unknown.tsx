import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file-unknown`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10,14 L10,15 L9,15 L9,14 L10,14 Z M7.58578644,0.999970205 C8.05728243,0.999970205 8.51161285,1.16648357 8.87017982,1.46691212 L9.00000001,1.58578644 L11.4142136,4 C11.7517791,4.33756548 11.9562137,4.47562772 11.993725,4.86156135 L12,5 L12,8 L12,8 L12,7 L11,7 L11,8 L10.999,7.99997021 L10.999,5.99997021 L7,6 L7,2 L3.00000001,2 L3.00000001,13 L6,13 L6,14 L3.00000001,14 C2.6925724,14 2.08789855,13.7964904 2.00864171,13.146261 L2.00000001,13 L2.00000001,2 C2.00000001,1.67705027 2.2151901,1.08580297 2.85607506,1.00840533 L3.00000001,0.999970205 L7.58578644,0.999970205 Z M9.50224705,7.50030164 C10.5854049,7.5199879 11.4842333,8.38192792 11.4997728,9.65225399 C11.5089084,10.3990675 11.3086671,10.8395287 10.7990146,11.4414101 L10.6209687,11.6449826 C10.1821025,12.1367583 10.0245349,12.4026121 9.99951328,12.8574607 L9.99583441,12.9999936 L8.99583441,12.9999936 C8.99583441,12.217525 9.20711908,11.7602521 9.73597435,11.1383427 L9.90615074,10.9441029 C10.3734204,10.4204705 10.5060427,10.1709151 10.4998476,9.66448579 C10.4910518,8.9454403 10.037173,8.510189 9.48407517,8.50013652 C9.05745554,8.49238276 8.6585579,8.80667926 8.53279065,9.3024251 C8.51842597,9.35904743 8.50716357,9.4653249 8.50243016,9.56414747 L8.5,9.65836989 L7.5,9.65836989 C7.5,9.46580248 7.51970908,9.22912103 7.56349626,9.05652191 C7.80192952,8.11667228 8.60491142,7.48399267 9.50224705,7.50030164 Z M8.00000001,2 L8,5 L11,5 L8.00000001,2 Z"/></svg>;
  },

});