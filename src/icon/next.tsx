import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-next`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 127.66249984L832 895.6625024 768 895.6625024 768 127.66249984 832 127.66249984ZM238.75625024 128.60475776C248.744224 128.60475776 258.44576192 131.94245248 266.31957888 138.08758208L266.31957888 138.08758208 680.7772544 461.55153664C708.6417344 483.2984032 713.6010432 523.51634688 691.854176 551.38082944 688.6317376 555.50977536 684.9146368 559.22754048 680.7862656 562.45071808L680.7862656 562.45071808 266.32588736 886.0359232C246.8234688 901.2622144 218.67028864 897.7957248 203.44399872 878.293312 197.29577536 870.4184256 193.95625024 860.7143872 193.95625024 850.7236736L193.95625024 850.7236736 193.95625024 173.40475776C193.95625024 148.66240064 214.01389312 128.60475776 238.75625024 128.60475776ZM257.92 212.736L257.92 811.328 641.4010688 512.00464448 257.92 212.736Z"/></svg>;
  },

});