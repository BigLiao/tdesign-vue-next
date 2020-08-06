import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-loading-2`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14,2 L14,3 L13.025,3 L8.74187162,7.72446594 C8.70746131,7.76115356 8.70746131,7.76115356 8.6706704,7.79545343 C8.57657822,7.88027059 8.47080132,7.94390858 8.35918793,7.98667057 C8.475305,8.02848186 8.58506142,8.09324212 8.68240859,8.18061082 C8.721924,8.2173809 8.721924,8.2173809 8.75869408,8.25689631 L8.75869408,8.25689631 L13.016,13 L14,13 L14,14 L2,14 L2,13 L3.012,13 L7.27025402,8.25689631 L7.35983684,8.16874709 C7.44967334,8.09076649 7.55054963,8.03128729 7.65723676,7.99059196 C7.54618387,7.95133885 7.44126637,7.89068342 7.34812755,7.81019046 L7.25835343,7.72223607 L3.002,3 L2,3 L2,2 L14,2 Z M8.01447405,8.92483085 L4.356,13 L11.672,13 L8.01447405,8.92483085 Z M11.676,3 L4.348,3 L8.0011206,7.05268626 L11.676,3 Z"/></svg>;
  },

});
