import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-internet`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M9.97228232,9.00115922 L6.02771768,9.00115922 C6.18656956,11.8383022 7.00913618,14 8,14 C8.99086382,14 9.81343044,11.8383022 9.97228232,9.00115922 Z M5.02417815,9.00103706 L2.08309386,9.00080686 C2.4548823,11.2150347 4.03944838,13.0179087 6.13032782,13.7029645 C5.49461839,12.6162343 5.11937732,10.935825 5.02417815,9.00103706 Z M13.9169061,9.00080686 L10.9758218,9.00103706 C10.8806227,10.935825 10.5053816,12.6162343 9.86936376,13.7023781 C11.9605516,13.0179087 13.5451177,11.2150347 13.9169061,9.00080686 Z M6.13107997,2.2968643 L6.06295891,2.31955425 C3.6997454,3.12518783 2,5.36409551 2,8 L2,8 L5,8 L5.00186392,7.71864341 C5.03161333,5.48305007 5.41709806,3.51560663 6.13107997,2.2968643 Z M8,2 L7.9058508,2.00653065 C6.84499401,2.15401455 6,4.78096889 6,8 L6,8 L10,8 C10,4.6862915 9.1045695,2 8,2 L8,2 Z M9.86967218,2.29703552 L9.95263462,2.44596164 C10.6417461,3.72602961 11,5.73849051 11,8 L11,8 L14,8 C14,5.33911412 12.2678838,3.08278566 9.86967218,2.29703552 Z"/></svg>;
  },

});
