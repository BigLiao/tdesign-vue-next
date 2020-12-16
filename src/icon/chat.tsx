import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chat`;

export default Vue.extend({
  name,

  props: {
    // xs/small/medium/large/xl/18px/2em
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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 192C864.8214912 192 891.8724608 216.70657216 895.5694272 248.53624768L896 256 896 706.9296896C896 739.7511808 870.6109248 764.1721728 838.781248 767.8691392L832 767.8691392 384.416992 767.8691392C377.7662688 767.8691392 308.8100096 800.4125824 177.5482144 865.499456 172.334288 868.9186496 166.2350528 870.74016 160 870.74016 144.29056704 870.74016 131.22506432 859.4201472 128.51556288 844.4921984L128 838.74016 128 256C128 223.17850624 152.70657216 196.12754176 184.53624768 192.43057472L192 192 832 192ZM832 256L192 256 192 779.456 384.72851584 706.9296896 832 706.9296896 832 256Z"/></svg>;
  },

});