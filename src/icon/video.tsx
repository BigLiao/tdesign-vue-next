import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-video`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13,2 C13.5522847,2 14,2.44771525 14,3 L14,13 C14,13.5522847 13.5522847,14 13,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,3 C2,2.44771525 2.44771525,2 3,2 L13,2 Z M13,3 L3,3 L3,13 L13,13 L13,3 Z M6.10185632,5.1852916 C6.26889997,4.96540292 6.5825706,4.92256356 6.80245928,5.0896072 L6.80245928,5.0896072 L10.1842952,7.658699 C10.2223913,7.68763961 10.2561366,7.72189808 10.284499,7.76042663 C10.448205,7.98281129 10.4006366,8.29579966 10.178252,8.45950572 L10.178252,8.45950572 L6.79641605,10.9490077 C6.71052148,11.012238 6.60665811,11.0463446 6.5,11.0463446 C6.22385763,11.0463446 6,10.822487 6,10.5463446 L6,10.5463446 L6,5.48775088 C6,5.37851138 6.03577533,5.27227763 6.10185632,5.1852916 Z M6.99953223,6.49484267 L6.99953223,9.55684267 L9.04653223,8.05084267 L6.99953223,6.49484267 Z"/></svg>;
  },

});
