import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-forward`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M468.50139712 192.14011072C493.24375424 192.14011072 513.30139712 212.1977536 513.30139712 236.94011072L513.26822656 498.52840832C515.86351936 485.71627264 522.42487808 473.66547328 532.79392 464.2395968L819.0712768 204.001968C825.6572352 198.01506752 833.8368256 194.15996224 842.5414976 192.85048704L849.1517632 192.35211904C873.8940992 192.32214464 893.9760576 212.3554464 894.0060608 237.09778496L894.6718464 786.0187648C894.6853312 797.1648512 890.5434112 807.9157056 883.0550144 816.1715648 866.4320896 834.4981248 838.099936 835.8791872 819.7733824 819.2562688L532.84585856 559.0014784 529.54997312 555.76164416C520.87947008 546.24281216 515.47050368 535.11478272 513.21496832 523.64958144L513.30139712 786.21168C513.30139712 797.2966208 509.19181184 807.9879552 501.76707008 816.2189312 485.19452416 834.5910592 456.86627136 836.0499008 438.49414784 819.4773568L149.1330784 558.45964352C146.66963648 556.15775424 146.66963648 556.15775424 144.3737632 553.68870464 120.76278912 527.38514112 122.94556352 486.92141376 149.24912704 463.31043968L438.57538176 203.60134016C446.79640896 196.22186624 457.45413824 192.14011072 468.50139712 192.14011072ZM449.30139712 280L192.00057792 510.93725376 449.30139712 742.976 449.30139712 280ZM830.1309376 280.448L575.843664 511.5969568 830.6429376 742.656 830.1309376 280.448Z"/></svg>;
  },

});
