import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-refresh`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M854.1780288 337.54977472C880.9181184 389.89483136 896 449.1861344 896 512 896 724.077344 724.077344 896 512 896 454.92637056 896 400.76090432 883.5486784 352.07182784 861.2142528 347.0803968 860.2139136 342.289456 858.0176192 338.14990016 854.6267392 337.97134528 854.3931392 337.76050368 854.2856768 337.54977472 854.1780288 336.99768192 853.6512768 336.3758528 853.0767296 335.77214336 852.473024 323.2753664 839.9762432 323.2753664 819.7149632 335.77214336 807.2181888L448.9092288 694.0811008 494.16406272 739.335936 416.13915328 817.3939968C446.40402816 826.8843712 478.6046048 832 512 832 688.7311168 832 832 688.7311168 832 512 832 467.14051328 822.7693056 424.43697152 806.1036928 385.68515072L854.1780288 337.54977472ZM512 128C586.53113024 128 656.1029312 149.23342144 714.9961344 185.98099968 720.4083328 187.3940224 725.5303744 190.1927744 729.7620864 194.42448704 742.2588608 206.92126464 742.2588608 227.182544 729.7620864 239.67932096L616.62499968 352.8164064 571.37016576 307.56157248 653.844736 225.07563712C611.09565632 203.90158016 562.93770944 192 512 192 335.26888 192 192 335.26888 192 512 192 573.81262848 209.52589632 631.53186496 239.8796 680.4596224L193.58116928 726.6980544C152.17662336 665.4112576 128 591.52900416 128 512 128 299.922656 299.922656 128 512 128Z"/></svg>;
  },

});
