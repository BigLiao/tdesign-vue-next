import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-pin`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M773.820736 138.33542464L904.289664 265.29523776C928.2233216 288.5851712 930.2264064 326.36267712 908.8898432 352.05298368L679.256448 628.43127104 719.3956224 668.5869184C744.3891776 693.5804672 744.3891776 734.1030272 719.3956224 759.0965824L628.88595456 849.6062528C603.8924 874.599808 563.36984128 874.599808 538.37628608 849.6062528L383.32562112 694.5384512 134.94997952 918.250016 92.12562112 870.6887488 338.01362112 649.2264512 176.33761472 487.56757952C151.34405952 462.57402432 151.34405952 422.05146624 176.33761472 397.05791104L266.84728256 306.5482432C291.84083712 281.55468864 332.36339584 281.55468864 357.3569504 306.5482432L404.82444864 353.99927104 690.0465984 133.56659328C715.2632512 114.07487808 750.978944 116.10798912 773.820736 138.33542464ZM729.1829888 184.20593472L399.40371712 439.0743872 312.10211648 351.80307712 221.59244864 442.31274496 583.63112064 804.3514176 674.1407872 713.8417472 592.74237248 632.40993536 859.6558656 311.1626976 729.1829888 184.20593472Z"/></svg>;
  },

});
