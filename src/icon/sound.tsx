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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M569.24334016 215.1554176C572.57587072 221.82047808 574.71022656 228.99881408 575.56912128 236.36303296L576 243.77708736 576 716.222912C576 751.5691392 547.346224 780.222912 512 780.222912 504.54823552 780.222912 497.17322368 778.9216896 490.20235648 776.3965312L483.3783296 773.4662528 216.448 639.98706816 128 640C92.653776 640 64 604.18278016 64 560L64 400C64 355.81721984 92.653776 320 128 320L216.32 319.98706816 483.3783296 186.5337472C514.9929536 170.7264352 553.43602816 183.5407936 569.24334016 215.1554176ZM749.12016 199.48488576C758.012576 205.86786048 766.6878912 212.72049664 775.1138304 220.04505152 921.8325632 347.58570368 937.3794752 569.91686592 809.8388224 716.6356032 790.0075776 739.4488384 767.8845824 759.0907328 744.110432 775.5164864L697.970016 729.2940032C721.154176 714.6443584 742.6201856 696.4096 761.537408 674.6478272 865.8888512 554.60522176 853.1686528 372.6979072 733.126048 268.34646464 723.5206976 259.99665984 713.5192512 252.39641728 703.1931392 245.54074112L749.12016 199.48488576ZM512 243.77708736L256 371.76306816 256 588.21106816 512 716.222912 512 243.77708736ZM656.7336384 291.99074624C723.3825408 330.79943872 768.1810496 403.01950528 768.1810496 485.70282432 768.1810496 570.65680256 720.8882304 644.5649536 651.1937216 682.5361408L603.19459968 634.46795456C662.353216 610.98036224 704.1810496 553.22630016 704.1810496 485.70282432 704.1810496 420.49769216 665.1761344 364.4026464 609.22575616 339.4771456L656.7336384 291.99074624ZM192 384L128 384 128 576 192 576 192 384Z"/></svg>;
  },

});
