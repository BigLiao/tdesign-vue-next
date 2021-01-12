import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-history`;

export default Vue.extend({
  name,

  props: {
    // small/medium/large/xl/18px/2em
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
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 128C724.077344 128 896 299.922656 896 512 896 724.077344 724.077344 896 512 896 363.51574784 896 234.71527488 811.7237184 170.82250304 688.3950848L218.81128384 640.384 224.6189312 652.9189056C276.73049984 758.9912896 385.83920128 832 512 832 688.7311168 832 832 688.7311168 832 512 832 335.26888 688.7311168 192 512 192 361.96026816 192 236.03854784 295.2614848 201.4254144 434.59388096L338.17299136 397.93496128 354.73740992 459.75421376 138.37002496 517.72968C128.79586048 520.29506944 119.0720128 518.235088 111.57098304 512.91949952 104.90862656 509.86024832 99.32352832 504.51845888 96.0426496 497.60268544L94.0332032 492.13180416 36.057737024 275.7644192 97.87699008 259.2 139.94078336 416.61167808C182.35577536 250.67958976 332.85121088 128 512 128ZM512 320L512 514.304 636.28046336 618.53583744 595.14205632 667.5626816 448.0615232 544.14746112 448.128 544 448 544 448 320 512 320Z"/></svg>;
  },

});
